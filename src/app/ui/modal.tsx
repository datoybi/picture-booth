"use client";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/modal.module.css";

type ModalProp = {
  setModal: React.Dispatch<React.SetStateAction<{ isOpen: boolean; id: string | null }>>;
  photoId: string | null;
};

const Modal = ({ setModal, photoId }: ModalProp) => {
  console.log(photoId);
  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        setModal({ isOpen: false, id: null });
      }}
    >
      <div
        className={styles.modalInner}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalTitle}>
          <div className={styles.modalTitleWrapper}>
            <XMarkIcon
              className={styles.cancelIcon}
              onClick={() => {
                setModal({ isOpen: false, id: null });
              }}
            />
            <h3 className={styles.photoName}>Evie Park</h3>
          </div>
          <div className={styles.modalButtons}>
            <HeartIcon className={styles.heartIcon} />
            <button className={styles.downloadButton}>다운로드</button>
          </div>
        </div>
        <div className={styles.modalImage}></div>
        <div className={styles.photoDescription}>
          <dl className={styles.photoInfo}>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>이미지 크기</dt>
              <dd className={styles.infoContent}>4500 X 5000</dd>
            </div>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>업로드</dt>
              <dd className={styles.infoContent}>6일전 게시됨</dd>
            </div>
            <div className={styles.infoWrapper}>
              <dt className={styles.infoTitle}>다운로드</dt>
              <dd className={styles.infoContent}>1234</dd>
            </div>
          </dl>
          <div className={styles.tags}>
            <span className={styles.tag}>알로에</span>
            <span className={styles.tag}>식집사</span>
            <span className={styles.tag}>식물</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
