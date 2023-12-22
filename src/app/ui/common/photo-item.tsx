"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/common/photo-item.module.css";
import Image from "next/image";

type PhotoItemType = {
  setModal: React.Dispatch<React.SetStateAction<{ isOpen: boolean; id: string | null }>>;
  photo: any;
};

const PhotoItem = ({ setModal, photo }: PhotoItemType) => {
  // console.log(photo);
  return (
    <li className={styles.photoItem} onClick={() => setModal({ isOpen: true, id: photo.id })}>
      <Image src={photo.urls.small} width={99} height={30} alt="img" />
      <button>
        <HeartIcon className={styles.likeButton} />
      </button>
    </li>
  );
};

export default PhotoItem;
