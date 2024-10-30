import styles from './styles.module.scss';

export default function MusicListing({ label, url, date }) {
	return (
		<div className={styles.musicListing}>
			<div className={styles.musicListingHeading}>
				<div className={styles.musicListingLabel}>
					{label}
				</div>
				<div className={styles.musicListingDate}>
					{date}
				</div>
			</div>
			<div className={styles.musicListingContent}>
				<audio src={url} controls />
			</div>
		</div>
	);
}
