"use client";

import clsx from "clsx";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import styles from "@/app/ui/search.module.css";

const SearchForm = () => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    const params = new URLSearchParams(searchParam);
    params.set("page", "1");
    if (keyword) params.set("query", keyword);
    else params.delete("query");

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <section className={clsx(styles.searchCover, "mb-50")}>
      <div className={styles.search}>
        <h1 className={styles.title}>Photo Search</h1>
        <p>
          인터넷의 시각 자료 출처입니다.
          <br /> 모든지역에 있는 크리에이터들의 지원을 받습니다.
        </p>
        <form>
          <input
            type="input"
            name="search"
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
