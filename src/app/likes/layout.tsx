import Header from "@/app/ui/common/header";
import Navbar from "@/app/ui/common/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: "사진", href: "/likes" },
    { name: "좋아요", href: "/likes" },
    { name: "컬렉션", href: "/likes" },
    { name: "통계", href: "/likes" },
  ];

  return (
    <>
      <Header />
      <Navbar items={navItems} />
      {children}
    </>
  );
}
