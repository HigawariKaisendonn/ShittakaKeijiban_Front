import { DashboardHeader } from "@/components/molecules/dashboardHeader/DashboardHeader";
import { PostCard } from "@/components/organisms/PostCard/PostCard";
import { CreationCard } from "@/components/organisms/CreationCard/CreationCard";


type Question = {
  id: number;
  genre_id: number;
  user_id: string;
  title: string;
  body: string;
  explanation: string;
  created_at: string;
  views: number;
  correct_count: number;
  incorrect_count: number;
};

type Genre = {
  id: number;
  name: string;
};

type Choice = {
  id: number;
  question_id: number;
  label: string;
  isCorrect: boolean;
};

async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch("http://localhost:8088/api/questions", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch questions");
  }
  return res.json();
}

async function fetchGenres(): Promise<Genre[]> {
  const res = await fetch("http://localhost:8088/api/genres", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }
  return res.json();
}

async function fetchChoicesForQuestion(questionId: number): Promise<Choice[]> {
  try {
    const res = await fetch(`http://localhost:8088/api/choices/${questionId}`, { cache: "no-store" });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data.choices.map((choice: any) => ({
      id: choice.id,
      question_id: choice.question_id,
      label: choice.text,
      isCorrect: choice.is_correct
    }));
  } catch (error) {
    console.error(`Failed to fetch choices for question ${questionId}:`, error);
    return [];
  }
}

async function fetchAllChoices(questions: Question[]): Promise<Choice[]> {
  const choicesPromises = questions.map(q => fetchChoicesForQuestion(q.id));
  const choicesArrays = await Promise.all(choicesPromises);
  return choicesArrays.flat();
}

const DashboardPage = async () => {
  const questions = await fetchQuestions();
  console.log("Questions data:", questions);
  const genres = await fetchGenres();
  const choices = await fetchAllChoices(questions);
  return (
    <div>
      <DashboardHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          margin: "20px",
          flexWrap: "wrap",
        }}
      >
        <CreationCard />
        {questions.map((q) => (
          <PostCard key={q.id} post={q} choices={choices} genres={genres} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
