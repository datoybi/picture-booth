"use client";

import Header from "@/app/ui/common/header";
import styles from "@/app/page.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className={styles.container}>
      <Header />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>보도/편집 전용</li>
          <li className={styles.navItem}>팔로잉</li>
          <li className={styles.navItem}>Will Photo+</li>
          <div className={styles.line}>|</div>
          <li className={styles.navItem}>단색</li>
          <li className={styles.navItem}>배경 화면</li>
          <li className={styles.navItem}>3D 렌더링</li>
          <li className={styles.navItem}>자연</li>
          <li className={styles.navItem}>텍스쳐 및 패턴</li>
          <li className={styles.navItem}>건축 및 인테리어</li>
          <li className={styles.navItem}>거리 사진</li>
          <li className={styles.navItem}>실험적인</li>
        </ul>
      </nav>

      <main className={styles.container}>
        <section className={styles.searchCover}>
          <div className={styles.search}>
            <h1 className={styles.title}>Will Photo</h1>
            <p>
              인터넷의 시각 자료 출처입니다.
              <br /> 모든지역에 있는 크리에이터들의 지원을 받습니다.
            </p>
            <form onSubmit={handleSubmit}>
              <input type="input" className={styles.input} placeholder="고해상도 이미지 검색" />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
