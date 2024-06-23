import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from "@/components/header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Frontend quiz app",
  description:
    "Frontend quiz app for Frontend Developers. Test your knowledge of HTML, CSS, JavaScript, and Accessibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.className} patterns bg-blue-like-light dark:bg-medium-dark`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
