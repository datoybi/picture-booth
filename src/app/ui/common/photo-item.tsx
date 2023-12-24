"use client";

import clsx from "clsx";
import { useContext } from "react";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import LikeContext from "@/like-context";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Photo as PhotoType } from "@/app/lib/definitions";
import styles from "@/app/ui/common/photo-item.module.css";

const PhotoItem = ({ photo }: { photo: PhotoType }) => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { setLikesData, likeIds } = useContext(LikeContext);

  const handleLike = (e: React.MouseEvent<any>) => {
    e.stopPropagation();
    setLikesData(photo);
  };

  const handleOpenModal = () => {
    const params = new URLSearchParams(searchParam);
    params.set("show", "true");
    params.set("id", photo.id);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <li className={styles.photoItem} onClick={handleOpenModal}>
      <Image src={photo.url} width={99} height={30} alt="img" />
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
