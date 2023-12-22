"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/search.module.css";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

const SearchForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submit");
  };

  const handleSearch = useDebouncedCallback((e: any) => {
    console.log(e.target.value);
    // fetch
  }, 500);

  return (
    <section className={clsx(styles.searchCover, "mb-50")}>
      <div className={styles.search}>
        <h1 className={styles.title}>Will Photo</h1>
        <p>
          인터넷의 시각 자료 출처입니다.
          <br /> 모든지역에 있는 크리에이터들의 지원을 받습니다.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="input"
            className={styles.input}
            placeholder="고해상도 이미지 검색"
            onChange={(e) => handleSearch(e)}
          />
          <button type="submit">
            <MagnifyingGlassIcon className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </section>
  );
};
export default SearchForm;
