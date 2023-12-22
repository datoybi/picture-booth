"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/common/photo-item.module.css";
import Image from "next/image";
import { useContext } from "react";
import LikeContext from "@/like-context";
import clsx from "clsx";

type PhotoItemType = {
  setModal: React.Dispatch<React.SetStateAction<{ isOpen: boolean; id: string | null }>>;
  photo: any;
};

const PhotoItem = ({ setModal, photo }: PhotoItemType) => {
  // console.log(photo);
  const { setLikes, likeIds } = useContext(LikeContext);

  const handleLike = (e: any) => {
    e.stopPropagation();
    console.log(photo);
    setLikes(photo);
  };

  return (
    <li className={styles.photoItem} onClick={() => setModal({ isOpen: true, id: photo.id })}>
      <Image src={photo.urls.small} width={99} height={30} alt="img" />
      <button>
        <HeartIcon
          className={clsx(styles.likeButton, { [styles.active]: likeIds.includes(photo.id) })}
          onClick={handleLike}
        />
      </button>
    </li>
  );
};

export default PhotoItem;
