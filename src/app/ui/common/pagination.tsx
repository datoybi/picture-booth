import styles from "@/app/ui/common/pagination.module.css";
import clsx from "clsx";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

type Pagination = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPost: number;
  btnRange: number;
  pageRange: number;
};

const Pagination = ({ page, setPage, totalPost, pageRange, btnRange }: Pagination) => {
  const currentSet = Math.ceil(page / btnRange); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 버튼의 시작 페이지 번호
  const endPage = startPage + btnRange - 1; // 현재 버튼의 끝 페이지 번호
  const totalPage = Math.ceil(totalPost / pageRange); // 총 게시글 세트 수
  const totalSet = Math.ceil(totalPage / btnRange); // 전체 버튼 세트 수

  // const firstButton = currentSet > 1 && (
  //   <button className={styles.button} onClick={() => setPage(1)}>
  //     &lt;&lt;
  //   </button>
  // );

  const lastButton = totalSet > currentSet && (
    <button className={styles.button} onClick={() => setPage(totalPage)}>
      {totalPage}
    </button>
  );

  const nextButton = totalSet > currentSet && (
    <button className={clsx(styles.moveButton, styles.button)} onClick={() => setPage(endPage + 1)}>
      <ChevronRightIcon className={styles.chevronIcon} />
    </button>
  );

  const prevButton = (
    <button
      className={clsx(styles.moveButton, styles.button, { [styles.disabled]: currentSet <= 1 })}
      onClick={() => setPage(startPage - 1)}
      disabled={currentSet <= 1}
    >
      <ChevronLeftIcon className={styles.chevronIcon} />
    </button>
  );

  const numberButtons = Array(btnRange)
    .fill(startPage)
    .map((_, i) => {
      if (startPage + i > totalPage) return;
      return (
        <button className={clsx(styles.button, styles.pageNumber)} key={i} onClick={() => setPage(startPage + i)}>
          {startPage + i}
        </button>
      );
    });

  return (
    <nav className={styles.nav}>
      {/* {firstButton} */}
      {prevButton}
      {numberButtons}
      {totalSet > currentSet && "..."}
      {lastButton}
      {nextButton}
    </nav>
  );
};

export default Pagination;
