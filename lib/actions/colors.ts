"use server";

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
