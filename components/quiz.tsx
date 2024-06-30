"use client";

import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

type QuizProps = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export default function Quiz({
  quiz,
  subjectColor,
  subject,
}: {
  quiz: QuizProps;
  subjectColor: string;
  subject: string;
}) {
  const optionLabels = ["A", "B", "C", "D"];
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [locked, setLocked] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(
    null,
  );
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChoice = (choice: string) => {
    if (locked) return;
    setSelectedAnswer(choice);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    setLocked(true);
  };

  const nextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion === quiz.questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setLocked(false);
      setIsSubmitted(false);
    }
  };

  return (
    <>
      {showResult ? (
        <>
          <div>
            <h2 className="text-[40px] font-light leading-none md:text-[64px]">
              Quiz completed
              <br />
              <strong className="font-medium leading-tight">
                You scored...
              </strong>
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-4 rounded-[12px] bg-white p-8 shadow-lg dark:bg-medium-dark md:gap-10 md:p-12">
              <p className="flex items-center gap-4">
                <span
                  className={`${subjectColor} grid size-10 place-items-center rounded-md p-1 md:size-14`}
                >
                  <Image
                    src={`/assets/images/${subject.toLowerCase()}.svg`}
                    alt={`${subject} Image`}
                    width={40}
                    height={40}
                  />
                </span>
                <span
                  className={cn(
                    "text-[18px] font-medium md:text-[28px]",
                    subject.toLowerCase() === "html" ||
                      subject.toLowerCase() === "css"
                      ? "uppercase"
                      : "capitalize",
                  )}
                >
                  {subject}
                </span>
              </p>
              <p className="flex flex-col items-center gap-4 text-[88px] font-medium leading-none md:text-[144px]">
                {score}
                <span className="text-[18px] font-normal text-medium-dark dark:text-blue-like md:text-[24px]">
                  out of 10
                </span>
              </p>
            </div>
            <Link
              href="/"
              className="flex-center h-14 rounded-[12px] bg-purple-like p-3 text-lg font-medium text-white md:h-[92px] md:rounded-[24px] md:p-8 md:text-[28px]"
            >
              Play Again
            </Link>
          </div>
        </>
      ) : (
        <>
          <section className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-sm italic leading-[150%] text-medium-dark dark:text-blue-like md:text-[20px]">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <h1 className="text-xl font-medium leading-[120%] md:text-[36px]">
                {quiz.questions[currentQuestion].question}
              </h1>
            </div>
            <Progress
              value={((currentQuestion + 1) / quiz.questions.length) * 100}
              className="grid items-center bg-white px-1 shadow-md drop-shadow dark:bg-medium-dark"
              indicatorClass="h-[50%] rounded-full bg-purple-like"
            />
          </section>
          <section className="flex flex-col gap-3 md:gap-8">
            <ul className="flex flex-col gap-3 md:gap-6">
              <h2 className="sr-only">Options</h2>
              {quiz.questions[currentQuestion].options.map((option, index) => {
                const isCorrect =
                  option === quiz.questions[currentQuestion].answer;
                const isSelected = selectedAnswer === option;
                return (
                  <li
                    role="button"
                    className={cn(
                      `subject-item drop-shadow-md dark:drop-shadow-4xl`,
                      locked && isSelected
                        ? isCorrect
                          ? "!outline !outline-green-like"
                          : "!outline !outline-red-like"
                        : "",
                      isSelected &&
                        !isSubmitted &&
                        "!outline !outline-purple-like",
                    )}
                    key={index}
                    onClick={() => handleChoice(option)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleChoice(option);
                      }
                    }}
                    aria-pressed={isSelected}
                  >
                    <div
                      className={cn(
                        `subject-item__options flex-shrink-0`,
                        locked && isSelected
                          ? isCorrect
                            ? "!bg-green-500 !text-white"
                            : "!bg-red-500 !text-white"
                          : "",
                        isSelected &&
                          !isSubmitted &&
                          "!bg-purple-like !text-white",
                      )}
                    >
                      {optionLabels[index]}
                    </div>
                    <p className="flex-1 text-sm leading-[100%] md:text-[20px]">
                      {option}
                    </p>
                    <div className="grid size-8 place-items-center">
                      {locked && (isCorrect || isSelected) && (
                        <Image
                          src={`/assets/images/icon-${isCorrect ? "correct" : "incorrect"}.svg`}
                          height={24}
                          width={24}
                          alt={isCorrect ? "Correct" : "Incorrect"}
                          className="transition-opacity"
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button
              onClick={isSubmitted ? nextQuestion : handleSubmit}
              className="h-[56px] rounded-[12px] bg-purple-like p-3 text-lg text-white md:h-[92px] md:rounded-[24px] md:p-8 md:text-[28px]"
            >
              {isSubmitted
                ? currentQuestion + 1 < quiz.questions.length
                  ? "Next Question"
                  : "Finish Quiz"
                : "Submit Answer"}
            </Button>
          </section>
        </>
      )}
    </>
  );
}
