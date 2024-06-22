"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "@/context/ThemeProvider";

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
  return (
    <header>
      <div className="flex justify-between">
        {subject && (
          <div>
            {/* <Image src={"/logo.svg"} alt="Frontend Quiz" width={200} height={200} /> */}
            {subject}
          </div>
        )}
        <div>
          <Switch onClick={handleTheme} />
        </div>
      </div>
    </header>
  );
}
