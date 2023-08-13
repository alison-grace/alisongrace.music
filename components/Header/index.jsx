import Link from 'next/link';
import NavLink from '../NavLink';
import styles from './styles.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>

			<Link href="/" target="_self">
				<img className={styles.logo} src="/assets/logo.png" />
			</Link>

			<nav className={styles.nav}>
				<NavLink href="/music">Music</NavLink>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/about">About</NavLink>
			</nav>

		</header>
	);
}
