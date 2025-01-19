import styles from './styles.module.scss';
import FooterLink from '../FooterLink';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterLink href="mailto:ali@alisongrace.music">Email</FooterLink>
			<FooterLink href="https://www.youtube.com/@alisongracemusic">YouTube</FooterLink>
			<FooterLink href="https://alisongrace.bandcamp.com/">Bandcamp</FooterLink>
			<FooterLink href="https://bsky.app/profile/alisongrace.music">Bluesky</FooterLink>
		</footer>
	);
}
