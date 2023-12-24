import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "@/app/ui/common/pagination.module.css";

type Pagination = {
  page: number;
  btnRange: number;
  totalPage: number;
};

const Pagination = ({ page, btnRange, totalPage }: Pagination) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentSet = Math.ceil(page / btnRange); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 버튼의 시작 페이지 번호
  const endPage = startPage + btnRange - 1; // 현재 버튼의 끝 페이지 번호
  const totalSet = Math.ceil(totalPage / btnRange); // 전체 버튼 세트 수

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const lastButton = totalSet > currentSet && (
    <Link className={styles.button} href={createPageURL(totalPage)}>
      {totalPage}
    </Link>
  );

  const nextButton = totalSet > currentSet && (
    <Link className={clsx(styles.moveButton, styles.button)} href={createPageURL(endPage + 1)}>
      <ChevronRightIcon className={styles.chevronIcon} />
    </Link>
  );

  const prevButton = (
    <Link
      className={clsx(styles.moveButton, styles.button, { [styles.disabled]: currentSet <= 1 })}
      href={createPageURL(startPage - 1)}
    >
      <ChevronLeftIcon className={styles.chevronIcon} />
    </Link>
  );

  const numberButtons = Array(btnRange)
    .fill(startPage)
    .map((_, i) => {
      if (startPage + i > totalPage) return;
      return (
        <Link
          href={createPageURL(startPage + i)}
          className={clsx(styles.button, styles.pageNumber, { [styles.active]: startPage + i === page })}
          key={i}
        >
          {startPage + i}
        </Link>
      );
    });

  return (
    <nav className={styles.nav}>
      {prevButton}
      {numberButtons}
      {totalSet > currentSet && <EllipsisHorizontalIcon className={styles.ellipsisDot} />}
      {lastButton}
      {nextButton}
    </nav>
  );
};

export default Pagination;
