import Link from "next/link";
import NavLink from "../NavLink";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" target="_self">
        <img className={styles.unlit} src="/assets/logo_unlit.gif" />
        <img className={styles.lit} src="/assets/logo_lit.gif" />
      </Link>

      <nav className={styles.nav}>
        <NavLink href="/music">Music</NavLink>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  );
}
