"use client";

import { useState, useRef } from "react";
import PhotoItem from "@/app/ui/common/photo-item";
import styles from "@/app/ui/common/photo-list.module.css";
import clsx from "clsx";
import Pagination from "@/app/ui/common/pagination";
import usePagination from "@/app/ui/common/usePagination";
import Modal from "@/app/ui/modal";

const PAGINATION = {
  pageRange: 10,
  btnRange: 5,
};

// type PhotoListType = {
//   setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
//   per_page: number;
//   page: number;
// };

// page : 검색할 페이지 번호 (기본 1)
// per_page : 페이지당 항목 수 (기본 10)

const PhotoList = ({ photos }: any) => {
  // const photos = getRandomPhotos();
  // console.log(photos);
  const [modal, setModal] = useState<{ isOpen: boolean; id: string | null }>({ isOpen: false, id: null });
  const modalRef = useRef<HTMLDivElement>(null);

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: [],
  });
  console.log(modal);

  return (
    <section>
      <div className="container">
        <ul className={clsx(styles.photoList)}>
          {photos.map((photo: any, i: number) => (
            // photoItem을 굳이 빼야될것같니??
            <PhotoItem key={photo.id} photo={photo} setModal={setModal} />
          ))}
        </ul>
      </div>
      <div className={clsx("container", styles.pagingWrapper)}>
        <Pagination
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />
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
