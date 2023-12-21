import Header from "@/app/ui/common/header";
import styles from "@/app/page.module.css";
import SearchForm from "./ui/main/search";
import PhotoList from "@/app/ui/main/photo-list";

export default function Page() {
  const navItems = [
    "보도/편집 전용",
    "팔로잉",
    "Will Photo+",
    "|",
    "단색",
    "배경 화면",
    "3D 렌더링",
    "자연",
    "텍스쳐 및 패턴",
    "건축 및 인테리어",
    "거리 사진",
    "실험적인",
  ];

  return (
    <div className="container">
      <Header />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) =>
            item === "|" ? (
              <div key={index} className={styles.line}>
                |
              </div>
            ) : (
              <li key={index} className={styles.navItem}>
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

      <main className={styles.container}>
        <SearchForm />
        <PhotoList />
      </main>
    </div>
  );
}
