import styles from './styles.module.scss';

export default function OuterWall() {
	return (
		<div className={styles.outerWall}>
			<div className={styles.cloud1} />
			<div className={styles.cloud2} />
			<div className={styles.cloud3} />
			<div className={styles.cloud4} />
		</div>
	);
};
