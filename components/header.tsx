"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Switch } from "./ui/switch";

export default function Header() {
  const pathname = usePathname();
  const subject = pathname.replace("/", "");

  console.log(pathname);
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
          <Switch />
        </div>
      </div>
    </header>
  );
}
