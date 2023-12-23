import { Inter } from "next/font/google";
import "@/app/reset.css";
import "@/app/globals.css";
import { LikeContextProvider } from "@/like-context";

const inter = Inter({ subsets: ["latin"] });
// TODO: app의 layout - 여기 보기
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <LikeContextProvider>
          {children}
          <div id="modal" />
        </LikeContextProvider>
      </body>
    </html>
  );
}
