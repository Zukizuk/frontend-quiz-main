import { getSubjectColor, getSubjectTitles } from "@/lib/actions/subject";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const subjects = await getSubjectTitles();

  return (
    <div className="flex flex-col gap-10 dark:text-white md:gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="flex flex-col gap-2 text-[40px] font-light leading-9 md:text-[64px] md:leading-[64px]">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-sm italic leading-[150%] text-light-dark dark:text-blue-like md:text-[20px]">
          Pick a subject to get started.
        </p>
      </div>
      <ul className="mb-[15.75rem] flex flex-col gap-3 md:mb-[241px] md:gap-6">
        {subjects.map(async (subject) => {
          const subjectColor = await getSubjectColor(subject);
          return (
            <li
              key={subject}
              className="subject-item relative drop-shadow-md dark:drop-shadow-4xl"
            >
              <div
                className={`${subjectColor} grid size-10 place-items-center rounded-md p-1 md:size-14`}
              >
                <Image
                  src={`/assets/images/${subject}.svg`}
                  alt={`${subject} Image`}
                  width={40}
                  height={40}
                />
              </div>
              <p>{subject}</p>
              <Link
                href={`/${subject.toLowerCase()}`}
                className="absolute inset-0"
              >
                <span className="sr-only">{subject}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
