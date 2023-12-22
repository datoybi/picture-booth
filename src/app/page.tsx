import Header from "@/app/ui/common/header";
import SearchForm from "@/app/ui/search";
import Navbar from "@/app/ui/common/navbar";
import PhotoList from "./ui/common/photo-list";
// import { photos } from "@/app/lib/placeholder-data";
import { getPhotos } from "@/app/lib/data";

export const PAGINATION = {
  pageRange: 20,
  btnRange: 5,
};

export default async function Page({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  // const totalPages = await fetchPhotos(query);
  console.log(query, page);
  let photoData = await getPhotos({ query, page, per_page: PAGINATION.pageRange });

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
        <PhotoList photoData={photoData} />
        {/* 페이지네이션을 밖으로 빼도 되지 않을까? */}
      </main>
    </div>
  );
}
