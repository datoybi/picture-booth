import { Inter } from "next/font/google";
import "@/app/reset.css";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        {children}
        <div id="modal" />
      </body>
    </html>
  );
}
