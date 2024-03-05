import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zack Ward",
  description: "Resume and portfolio for Zack Ward, software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-dark">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
