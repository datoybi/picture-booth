import styles from "@/app/ui/common/navbar.module.css";
import Link from "next/link";

type ItemType = { items: { name: string; href: string }[] };

const Navbar = ({ items }: ItemType) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map(({ name, href }, index) =>
          name === "|" ? (
            <div key={index} className={styles.line}>
              |
            </div>
          ) : (
            <li key={index} className={styles.navItem}>
              <Link href={href}>{name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
