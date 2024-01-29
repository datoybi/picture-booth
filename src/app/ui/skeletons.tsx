import { HeartIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/skeletons.module.css";
import clsx from "clsx";

export const ItemSkeleton = () => (
  <div className={clsx(styles.skeletonItem)}>
    <HeartIcon className={styles.heartIcon} />
  </div>
);

export const ListSkeleton = () => (
  <div className={styles.skeletonList}>
    {Array(20).fill(<ItemSkeleton />)}
    <div className={styles.shimmer} />
  </div>
);
