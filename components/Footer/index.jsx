import styles from "./styles.module.scss";
import FooterLink from "../FooterLink";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterLink href="mailto:ali@kevenandsoki.com">Email</FooterLink>
      <FooterLink href="https://www.youtube.com/@kevenandsoki">YT</FooterLink>
      <FooterLink href="https://vgen.co/kevenandsoki">VGen</FooterLink>
      <FooterLink href="https://kevenandsoki.bandcamp.com">Bandcamp</FooterLink>
      <FooterLink href="https://bsky.app/profile/kevenandsoki.com">Bsky</FooterLink>
    </footer>
  );
}
