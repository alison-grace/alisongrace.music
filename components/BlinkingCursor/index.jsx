import styles from './styles.module.scss';

export default function Button({ children, className, href }) {
	return (
		<div className={styles.blinkingCursor} />
	);
}
