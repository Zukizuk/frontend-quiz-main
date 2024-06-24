import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getSubjectColor } from "@/lib/actions/colors";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default async function Page({
  params,
}: {
  params: { subject: string };
}) {
  const result = true;
  const subjectColor = await getSubjectColor(params.subject);

  return (
    <article className="flex flex-col gap-10 pb-[8.375rem] dark:text-white">
      {result ? (
        <>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-sm italic leading-[150%] text-medium-dark dark:text-blue-like">
                Question 6 of 10
              </span>
              <h1 className="text-xl font-medium leading-[120%]">
                Which of these color contrast ratios defines the minimum WCAG
                2.1 Level AA requirement for normal text?
              </h1>
            </div>
            <Progress
              value={60}
              className="grid items-center bg-white px-1 shadow-md drop-shadow dark:bg-medium-dark"
              indicatorClass="h-[50%] rounded-full bg-purple-like"
            />
          </div>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              <li
                role="button"
                className="subject-item drop-shadow-md dark:drop-shadow-4xl"
              >
                <div className={`subject-item__options`}>A</div>
                <p>4.5 : 1</p>
              </li>
              <li
                role="button"
                className="subject-item drop-shadow-md dark:drop-shadow-4xl"
              >
                <div className="subject-item__options">B</div> <p>3 : 1</p>
              </li>
              <li
                role="button"
                className="subject-item drop-shadow-md dark:drop-shadow-4xl"
              >
                <div className="subject-item__options">c</div> <p>2.5 : 1</p>
              </li>
              <li
                role="button"
                className="subject-item drop-shadow-md dark:drop-shadow-4xl"
              >
                <div className="subject-item__options">D</div> <p>5 : 1</p>
              </li>
            </ul>
            <Button className="h-[3.5rem] rounded-[12px] bg-purple-like p-3 text-lg text-white">
              Submit Answer
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-[40px] font-light leading-none">
              Quiz completed
              <br />
              <strong className="font-medium leading-tight">
                You scored...
              </strong>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-4 rounded-[12px] bg-white p-8 shadow-lg dark:bg-medium-dark">
              <p className="flex items-center gap-4">
                <span
                  className={`${subjectColor} grid size-10 place-items-center rounded-md p-1`}
                >
                  <Image
                    src={`/assets/images/${params.subject.toLowerCase()}.svg`}
                    alt={`${params.subject} Image`}
                    width={40}
                    height={40}
                  />
                </span>
                <span
                  className={cn(
                    "text-[18px] font-medium",
                    params.subject.toLowerCase() === "html" ||
                      params.subject.toLowerCase() === "css"
                      ? "uppercase"
                      : "capitalize",
                  )}
                >
                  {params.subject}
                </span>
              </p>
              <p className="flex flex-col items-center gap-4 text-[88px] font-medium leading-none">
                8
                <span className="text-[18px] font-normal text-blue-like dark:text-medium-dark">
                  out of 10
                </span>
              </p>
            </div>
            <Button className="h-14 rounded-[12px] bg-purple-like p-3 text-lg text-white">
              Play Again
            </Button>
          </div>
        </>
      )}
    </article>
  );
}
