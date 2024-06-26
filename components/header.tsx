"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const subject = pathname.replace("/", "");
  const { mode, setMode } = useTheme();

  const handleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const subjectColor =
    subject.toLowerCase() === "html"
      ? "bg-[#FFF1E9]"
      : subject.toLowerCase() === "css"
        ? "bg-[#E0FDEF]"
        : subject.toLowerCase() === "javascript"
          ? "bg-[#EBF0FF]"
          : subject.toLowerCase() === "accessibility"
            ? "bg-[#F6E7FF]"
            : "bg-[#FFF1E9]";

  return (
    <header>
      <div className="flex-between px-6 py-4 md:px-16 md:py-[3.375rem] lg:px-[8.75rem] lg:py-[6.063rem] lg:pb-[5.438rem]">
        <div className="h-10 w-[10.438rem]">
          {subject && (
            <div className="flex-start gap-4 md:gap-6">
              <div
                className={cn(
                  `grid size-10 flex-shrink-0 place-items-center rounded-md p-1 md:size-14`,
                  subjectColor,
                )}
              >
                <Image
                  src={`/assets/images/${subject.toLowerCase()}.svg`}
                  alt="Frontend Quiz"
                  width={40}
                  height={40}
                />
              </div>
              <span
                className={cn(
                  "text-[18px] font-medium leading-[28px] dark:text-white md:text-[28px]",
                  subject.toLowerCase() === "html" ||
                    subject.toLowerCase() === "css"
                    ? "uppercase"
                    : "capitalize",
                )}
              >
                {subject}
              </span>
            </div>
          )}
        </div>
        <div className="flex-between gap-2 lg:gap-4">
          <Image
            src={`/assets/images/icon-sun-${mode === "light" ? "dark" : "light"}.svg`}
            width={16}
            height={16}
            alt="Sun"
            className="md:size-6"
          />
          <Switch
            onClick={handleTheme}
            className="h-5 w-8 !bg-purple-like md:h-7 md:w-12 lg:h-[28px] lg:w-[48px]"
            thumbClassName="!bg-white h-3 w-3 md:h-[20px] md:w-[20px]"
            checked={mode === "dark"}
          />
          <Image
            src={`/assets/images/icon-moon-${mode === "light" ? "dark" : "light"}.svg`}
            width={16}
            height={16}
            alt="Sun"
            className="md:size-6"
          />
        </div>
      </div>
    </header>
  );
}
