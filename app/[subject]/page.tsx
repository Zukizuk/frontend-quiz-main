import Quiz from "@/components/quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getQuiz, getSubjectColor } from "@/lib/actions/subject";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: { subject: string };
}) {
  const quiz = await getQuiz(params.subject);
  if (quiz === undefined) return notFound(); //To handle exceptional cases and prevent typescript warnings
  const subjectColor = await getSubjectColor(params.subject);

  return (
    <article className="flex flex-col gap-10 pb-[8.375rem] dark:text-white md:gap-16">
      <Quiz quiz={quiz} subjectColor={subjectColor} subject={params.subject} />
    </article>
  );
}
