import { HeartIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/common/photo-item.module.css";
import Image from "next/image";

const PhotoItem = ({ setIsOpen }: any) => {
  return (
    <li className={styles.photoItem} onClick={() => setIsOpen(true)}>
      <Image src="/images/sample.webp" width={99} height={30} alt="img" />
      <button>
        <HeartIcon className={styles.likeButton} />
      </button>
    </li>
  );
};

export default PhotoItem;
