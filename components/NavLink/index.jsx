import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavLink({ children, href }) {
	return (
		<Link
			href={href}
			className={styles.navLink}
			target="_self"
		>
			{children}
		</Link>
	);
}
