import Link from "next/link";
import styles from "./styles.module.scss";

export default function FooterLink({ children, href }) {
  return (
    <Link href={href} className={styles.footerLink}>
      {children}
    </Link>
  );
}
