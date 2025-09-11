import { PostCard } from "@/components/organisms/PostCard/PostCard";

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

async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch("http://localhost:8088/api/questions", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch questions");
  }
  return res.json();
}

const DashboardPage = async () => {
  const questions = await fetchQuestions();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        margin: "20px",
        flexWrap: "wrap",
      }}
    >
      {questions.map((q) => (
        <PostCard key={q.id} post={q} choices={[]} />
      ))}
    </div>
  );
};

export default DashboardPage;
