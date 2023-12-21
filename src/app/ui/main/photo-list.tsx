"use client";

import { useState, useRef } from "react";
import clsx from "clsx";

import Pagination from "@/app/ui/common/pagination";
import usePagination from "@/app/ui/common/usePagination";
import Modal from "@/app/ui/modal";
import PhotoItem from "@/app/ui/main/photo-item";
import styles from "@/app/ui/main/photo-list.module.css";

const PAGINATION = {
  pageRange: 5,
  btnRange: 5,
};

const PhotoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const elements = Array(20)
    .fill(<></>)
    .map((el, i) => <PhotoItem key={i} setIsOpen={setIsOpen} />);
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: [],
  });

  return (
    <section>
      <div className="container">
        <ul className={styles.photoList}>{elements}</ul>
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

      {isOpen && (
        <div ref={modalRef} className={styles.modalRef}>
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}
    </section>
  );
};

export default PhotoList;
