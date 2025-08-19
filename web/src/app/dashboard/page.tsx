"use client";
import { PostCard } from "@/components/organisms/PostCard/PostCard";

const DashboardPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        margin: "20px",
      }}
    >
      <PostCard
        post={{
          id: "1",
          question:
            "Sample Questionっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっh?",
          choices: [
            { id: "1", value: "A", label: "Choice A", isCorrect: true },
            { id: "2", value: "B", label: "Choice B", isCorrect: false },
            { id: "3", value: "C", label: "Choice C", isCorrect: false },
            { id: "4", value: "D", label: "Choice D", isCorrect: false },
          ],
          stats: {
            comments: 5,
            likes: 10,
          },
        }}
      />
      <PostCard
        post={{
          id: "1",
          question: "Sample Question?",
          choices: [
            { id: "1", value: "A", label: "Choice A", isCorrect: true },
            { id: "2", value: "B", label: "Choice B", isCorrect: false },
          ],
          stats: {
            comments: 5,
            likes: 10,
          },
        }}
      />
    </div>
  );
};

export default DashboardPage;
