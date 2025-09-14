"use client";
import { useState, useEffect } from "react";
import { ChoiceOption } from "@/components/molecules/ChoiceOption/ChoiceOption";
import { PostFooter } from "@/components/molecules/PostFooter/PostFooter";
import { getProfileByUserId, getUserById } from "@/lib/authService";
import { Profile } from "@/types/Profile";
import "./post-card.scss";

type Choice = {
  id: number;
  question_id: number;
  label: string;
  isCorrect: boolean;
};

type Genre = {
  id: number;
  name: string;
};

type Post = {
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

type Props = {
  post: Post;
  choices: Choice[];
  genres: Genre[];
};

export const PostCard = ({ post, choices, genres }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching profile for user_id:", post.user_id);
        const profileData = await getProfileByUserId(post.user_id);
        console.log("Profile data received:", profileData);
        setProfile(profileData);
      } catch (profileError) {
        console.error("Failed to fetch profile for user_id:", post.user_id, profileError);
        console.log("Falling back to getUserById...");
        try {
          const userData = await getUserById(post.user_id);
          console.log("User data received:", userData);
          // Profile形式に変換
          const fallbackProfile: Profile = {
            user_id: post.user_id,
            username: userData.username,
            display_name: userData.username,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          setProfile(fallbackProfile);
        } catch (userError) {
          console.error("Failed to fetch user data as fallback:", userError);
          setProfile(null);
        }
      }
    };

    fetchProfile();
  }, [post.user_id]);

  const handleSelect = (id: number) => {
    setSelectedId(id.toString());
  };

  const genre = genres.find(g => g.id === post.genre_id);
  const postChoices = choices.filter(choice => choice.question_id === post.id);

  console.log(`Post ${post.id} - Total choices: ${choices.length}, Filtered choices: ${postChoices.length}`, postChoices);

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className="post-author">投稿者：{profile?.display_name || profile?.username || "不明なユーザー"}</p>
      <h5>ジャンル：{genre?.name}</h5>
      <textarea className="question" value={post.body} readOnly />
      <div className="choices">
        {postChoices.map((choice) => {
          const isSelected = selectedId === choice.id.toString();
          const showResult = isSelected;
          return (
            <div
              key={choice.id}
              className={
                showResult
                  ? choice.isCorrect
                    ? "correctBg"
                    : "wrongBg"
                  : undefined
              }
            >
              <ChoiceOption
                id={choice.id}
                name={`post-${post.id}`}
                label={choice.label}
                checked={isSelected}
                isSelected={isSelected}
                isCorrect={choice.isCorrect}
                onChange={() => handleSelect(choice.id)}
              />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "auto" }}>
        <PostFooter
          comments={0}
          likes={post.correct_count + post.incorrect_count}
          onToggleExplanation={() => setShowExplanation(!showExplanation)}
          isExplanationOpen={showExplanation}
        />
      </div>

      {showExplanation && (
        <div className="explanation">
          <p>{post.explanation}</p>
        </div>
      )}
    </div>
  );
};
