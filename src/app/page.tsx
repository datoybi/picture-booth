import Header from "@/app/ui/common/header";
import SearchForm from "@/app/ui/search";
import PhotoList from "@/app/ui/common/photo-list";
import Navbar from "@/app/ui/common/navbar";

export default function Page() {
  const navItems = [
    { name: "보도/편집 전용", href: "/" },
    { name: "팔로잉", href: "/" },
    { name: "Will Photo+", href: "/" },
    { name: "|", href: "/" },
    { name: "단색", href: "/" },
    { name: "배경 화면", href: "/" },
    { name: "3D 렌더링", href: "/" },
    { name: "자연", href: "/" },
    { name: "텍스쳐 및 패턴", href: "/" },
    { name: "건축 및 인테리어", href: "/" },
    { name: "거리 사진", href: "/" },
    { name: "실험적인", href: "/" },
  ];

  return (
    <div className="container">
      <Header />
      <Navbar items={navItems} />
      <main className="container">
        <SearchForm />
        <PhotoList />
      </main>
    </div>
  );
}
