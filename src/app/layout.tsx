import { Inter } from "next/font/google";
import "@/app/reset.css";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
