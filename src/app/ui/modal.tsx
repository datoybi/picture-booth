"use client";

import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/modal.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import LikeContext from "@/like-context";
import { PhotoDetail } from "@/app/lib/definitions";

const Modal = ({ photo }: { photo: PhotoDetail }) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { userName, width, height, downloads, tags, url, downloadUrl, createdAt } = photo;
  const { likeIds } = useContext(LikeContext);

  const handleCloseModal = () => {
    const params = new URLSearchParams(searchParam);
    params.delete("id");
    params.delete("show");
    replace(`${pathname}?${params.toString()}`);
  };

  function elapsedTime(date: string) {
    const start = new Date(date).valueOf();
    const end = new Date().valueOf();
    const diff = (end - start) / 1000;

    const times = [
      { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
      { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
      { name: "일", milliSeconds: 60 * 60 * 24 },
      { name: "시간", milliSeconds: 60 * 60 },
      { name: "분", milliSeconds: 60 },
    ];

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return "방금 전";
  }
  return (
    <div className={styles.backdrop} onClick={handleCloseModal}>
      <div
        className={styles.modalInner}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalTitle}>
          <div className={styles.modalTitleWrapper}>
            <XMarkIcon className={styles.cancelIcon} onClick={handleCloseModal} />
            <h3 className={styles.photoName}>{userName}</h3>
          </div>
          <div className={styles.modalButtons}>
            {likeIds.includes(photo.id) && <HeartIcon className={styles.heartIcon} />}
            <button className={styles.downloadButton}>
              <Link href={downloadUrl}>다운로드</Link>
            </button>
          </div>
        </div>
        <div className={styles.modalImage}>
          <Image src={url} fill={true} alt="img" style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.photoDescription}>
          <dl className={styles.photoInfo}>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>이미지 크기</dt>
              <dd className={styles.infoContent}>
                {width} X {height}
              </dd>
            </div>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>업로드</dt>
              <dd className={styles.infoContent}>{elapsedTime(createdAt)} 게시됨</dd>
            </div>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>다운로드</dt>
              <dd className={styles.infoContent}>{downloads}</dd>
            </div>
          </dl>
          <div className={styles.tags}>
            {tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
