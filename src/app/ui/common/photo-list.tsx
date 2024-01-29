import clsx from "clsx";
import PhotoItem from "@/app/ui/common/photo-item";
import Pagination from "@/app/ui/common/pagination";
import { Photo } from "@/app/lib/definitions";
import { PAGINATION } from "@/app/constants";
import styles from "@/app/ui/common/photo-list.module.css";

type PhotoListType = {
  photoData: { results: Photo[]; total_pages: number };
  page: number;
};

const PhotoList = ({ photoData, page }: PhotoListType) => {
  const { results: photos = [], total_pages } = photoData;
  if (photos.length === 0) return <p>사진이 없습니다.</p>;

  return (
    <section>
      <div className="container">
        <ul className={clsx(styles.photoList)}>
          {photos?.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
      <div className={clsx("container", styles.pagingWrapper)}>
        <Pagination page={page} totalPage={total_pages} btnRange={PAGINATION.btnRange} />
      </div>
    </section>
  );
};

export default PhotoList;
