import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>

			<Link className={styles.logo} href="/" target="_self">
				<img className={styles.logo} src="/assets/alisongrace_logo.png" />
				{/* <img className={styles.unlit} src="/assets/logo_unlit.gif" />
				<img className={styles.lit} src="/assets/logo_lit.gif" /> */}
			</Link>

			<nav className={styles.nav}>
				<Button href="/music" className={styles.navLink}>music</Button>
				<Button href="/" className={styles.navLink}>home</Button>
				<Button href="/about" className={styles.navLink}>about</Button>
			</nav>

		</header>
	);
}
