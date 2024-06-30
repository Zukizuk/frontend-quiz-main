"use server";

import Data from "@/data/data.json";

export async function getSubjectColor(subject: string) {
  return subject.toLowerCase() === "html"
    ? "bg-[#FFF1E9]"
    : subject.toLowerCase() === "css"
      ? "bg-[#E0FDEF]"
      : subject.toLowerCase() === "javascript"
        ? "bg-[#EBF0FF]"
        : subject.toLowerCase() === "accessibility"
          ? "bg-[#F6E7FF]"
          : "bg-[#FFF1E9]";
}

export async function getQuiz(subject: string) {
  return Data.quizzes.find(
    (quiz) => quiz.title.toLowerCase() === subject.toLowerCase(),
  );
}

export async function getSubjectTitles() {
  return Data.quizzes.map((quiz) => quiz.title);
}
