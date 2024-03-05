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
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
