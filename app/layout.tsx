import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gobinathan K | Data Science Portfolio",
  description:
    "Data Science, AI & Machine Learning portfolio showcasing real-world projects in Python, SQL, Power BI, and Deep Learning.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "AI Portfolio",
    "Python Developer",
    "Power BI Developer",
    "SQL Projects",
    "Data Analyst"
  ],
  authors: [{ name: "Gobinathan K" }],
  openGraph: {
    title: "Gobinathan K Portfolio",
    description: "AI + Data Science Projects and Dashboards",
    type: "website",
    url: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        {/* MAIN WRAPPER */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}