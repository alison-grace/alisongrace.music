import styles from './styles.module.scss';
import fadeInStyles from '../../styles/fade_in.module.scss';
import FooterLink from '../FooterLink';
import classNames from 'classnames';

export default function Footer() {
	return (
		<footer className={classNames(styles.footer, fadeInStyles.fadeIn)}>
			<FooterLink href="mailto:ali@kevenandsoki.com">Email</FooterLink>
			<FooterLink href="https://www.youtube.com/@kevenandsoki">YT</FooterLink>
			<FooterLink href="https://vgen.co/kevenandsoki">VGen</FooterLink>
			<FooterLink href="https://kevenandsoki.bandcamp.com">Bandcamp</FooterLink>
			<FooterLink href="https://bsky.app/profile/kevenandsoki.com">Bsky</FooterLink>
		</footer>
	);
}
