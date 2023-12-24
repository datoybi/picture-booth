import Header from "@/app/ui/common/header";
import SearchForm from "@/app/ui/search";
import Navbar from "@/app/ui/common/navbar";
import PhotoList from "@/app/ui/common/photo-list";
import Modal from "@/app/ui/common/modal";
import { getPhotos, getPhoto } from "@/app/lib/data";
import { PAGINATION } from "@/app/constants";
import { Photo } from "@/app/lib/definitions";

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string; show?: string; id?: string };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const show = Boolean(searchParams?.show) || false;
  const id = searchParams?.id || "";

  const isOpenModal = show === true && id !== "";
  const photo = isOpenModal ? await getPhoto({ id }) : null;
  const photoData = (await getPhotos({ query, page, per_page: PAGINATION.pageRange })) as {
    results: Photo[];
    total_pages: number;
  };

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
      </main>
      {isOpenModal && photo && <Modal photo={photo} />}
    </div>
  );
}
