import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Page({ params }: { params: { subject: string } }) {
  return (
    <article>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-sm italic leading-[150%] text-blue-like">
            Question 6 of 10
          </span>
          <h1 className="text-xl font-medium leading-[120%]">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </h1>
        </div>
        <Progress
          value={60}
          className="grid place-items-center bg-blue-like px-1 shadow-md dark:bg-medium-dark"
          indicatorClass="h-[50%] rounded-full bg-purple-like"
        />
      </div>
      <div>
        <ul>
          <li>
            <span>A</span> 4.5:1
          </li>
          <li>
            <span>B</span> 3:1
          </li>
          <li>
            <span>c</span> 2.5:1
          </li>
          <li>
            <span>D</span> 5:1
          </li>
        </ul>
        <Button>Submit Answer</Button>
      </div>
    </article>
  );
}
