import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const subjects = [
    { label: "HTML", color: "#FFF1E9" },
    { label: "CSS", color: "#E0FDEF" },
    { label: "Javascript", color: "#EBF0FF" },
    { label: "Accessibility", color: "#F6E7FF" },
  ];
  return (
    <div className="flex flex-col gap-10 dark:text-white">
      <div className="flex flex-col gap-4">
        <h1 className="flex flex-col gap-2 text-[40px] font-light leading-9">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-sm italic leading-[150%] text-light-dark dark:text-blue-like">
          Pick a subject to get started.
        </p>
      </div>
      <ul className="mb-[15.75rem] flex flex-col gap-3">
        {subjects.map((subject) => {
          const subjectColor = getSubjectColor(subject.label);
          return (
            <li
              key={subject.label}
              className="subject-item relative drop-shadow-md dark:drop-shadow-4xl"
            >
              <div className={`${subjectColor} size-10 rounded-md p-1`}>
                <Image
                  src={`/assets/images/${subject.label}.svg`}
                  alt={`${subject.label} Image`}
                  width={40}
                  height={40}
                />
              </div>
              <p>{subject.label}</p>
              <Link
                href={`/${subject.label.toLowerCase()}`}
                className="absolute inset-0"
              >
                <span className="sr-only">{subject.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
