import NavLink from '../NavLink';
import styles from './styles.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src="/assets/logo.png" />
			<nav className={styles.nav}>
				<NavLink href="/music">Music</NavLink>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/soki">Soki</NavLink>
			</nav>
		</header>
	);
}
