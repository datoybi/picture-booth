"use client";

import PhotoItem from "@/app/ui/common/photo-item";
import styles from "@/app/ui/common/photo-list.module.css";
import clsx from "clsx";
import Pagination from "@/app/ui/common/pagination";
import { PAGINATION } from "@/constants/index";
import { useSearchParams } from "next/navigation";
import { Photo } from "@/app/lib/definitions";

type PhotoListType = {
  photoData: { results: Photo[]; total_pages: number };
};

const PhotoList = ({ photoData }: PhotoListType) => {
  const { results: photos = [], total_pages } = photoData;
  const params = useSearchParams();
  const page = Number(params.get("page")) || 1;

  if (photos.length === 0) {
    return <p>사진이 없습니다.</p>;
  }

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
