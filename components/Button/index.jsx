import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames';

export default function Button({ children, className, href }) {
	return (
		<Link
			href={href}
			className={classNames(styles.button, className)}
			target="_self"
		>
			{children}
		</Link>
	);
}
