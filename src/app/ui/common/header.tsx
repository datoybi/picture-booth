import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/common/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.png" width={99} height={30} alt="logo" />
      </Link>
      <div className={styles.buttonWrapper}>
        <button className={clsx(styles.button, styles.fill)}>사진 제출</button>
        <Link href="/likes" className={clsx(styles.button, styles.outline)}>
          북마크 <HeartIcon className={styles.heartIcon} />
        </Link>

        <div className={styles.userWrapper}>
          <span className={styles.name}>Evie</span>
          <span>evie@willlog.io</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
