import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CSSとJavaScriptで作る動くUIアイデアレシピ",
  description: "React*TailwindCSsで実装します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
      >
        {children}
      </body>
    </html>
  );
}
