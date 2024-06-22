import { Button } from "@/components/ui/button";
import React from "react";

export default function Page({ params }: { params: { subject: string } }) {
  return (
    <div>
      <div>
        <span>Question 6 of 10</span>
        <h1>
          Which of these color contrast ratios defines the minimum WCAG 2.1
          Level AA requirement for normal text?
        </h1>
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
    </div>
  );
}
