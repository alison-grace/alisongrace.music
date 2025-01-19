import styles from './styles.module.scss';

export default function Balcony() {
	return (
		<div className={styles.balcony}>
			<div className={styles.cloud1} />
			<div className={styles.cloud2} />
			<div className={styles.cloud3} />
			<div className={styles.cloud4} />
		</div>
	);
};
