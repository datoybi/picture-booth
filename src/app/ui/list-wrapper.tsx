import PhotoList from "@/app/ui/common/photo-list";
import { getPhotos, getPhoto } from "@/app/lib/data";
import { Photo } from "@/app/lib/definitions";
import { PAGINATION } from "@/app/constants";

const ListWrapper = async ({ query, page }: { query: string; page: number }) => {
  const photoData = (await getPhotos({ query, page, per_page: PAGINATION.pageRange })) as {
    results: Photo[];
    total_pages: number;
  };
  return <PhotoList photoData={photoData} page={page} />;
};

export default ListWrapper;
