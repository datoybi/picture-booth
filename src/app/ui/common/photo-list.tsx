"use client";

import { useState, useRef } from "react";
import PhotoItem from "@/app/ui/common/photo-item";
import styles from "@/app/ui/common/photo-list.module.css";
import clsx from "clsx";
import Pagination from "@/app/ui/common/pagination";
import Modal from "@/app/ui/modal";
import { PAGINATION } from "@/app/page";
import { useSearchParams } from "next/navigation";

const PhotoList = ({ photoData = [] }: any) => {
  const { results: photos = [], total, total_pages } = photoData;
  const [modal, setModal] = useState<{ isOpen: boolean; id: string | null }>({ isOpen: false, id: null });
  const modalRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const page = Number(params.get("page")) || 1;

  if (photos.length === 0) {
    return <p>사진이 없습니다.</p>;
  }

  console.log(total_pages);

  return (
    <section>
      <div className="container">
        <ul className={clsx(styles.photoList)}>
          {photos?.map((photo: any) => (
            // photoItem을 굳이 빼야될것같니??
            <PhotoItem key={photo.id} photo={photo} setModal={setModal} />
          ))}
        </ul>
      </div>
      <div className={clsx("container", styles.pagingWrapper)}>
        <Pagination page={page} totalPost={total} btnRange={PAGINATION.btnRange} pageRange={PAGINATION.pageRange} />
      </div>

      {modal.isOpen && (
        <div ref={modalRef} className={styles.modalRef}>
          <Modal setModal={setModal} photoId={modal.id} />
        </div>
      )}
    </section>
  );
};

export default PhotoList;
