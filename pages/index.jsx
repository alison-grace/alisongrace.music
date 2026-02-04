import Button from '../components/Button';
import TextBox from '../components/TextBox';
import BlinkingCursor from '../components/BlinkingCursor';
import styles from './styles.module.scss';
import classNames from 'classnames';

export default function Home() {
	return (
		<>
			<TextBox portraitURL="/assets/ali_portrait.png" className={styles.sagging} style={{ letterSpacing: "1px" }}>
				hi, i'm alison!<br/>i make chiptune and VGM, for and outside of games.
				<BlinkingCursor />
			</TextBox>

			<div className={styles.externalLinks}>
				<div className={styles.smallTextBox}>
					<u>latest releases:</u>
				</div>
				<Button
					href="https://chipt4t.bandcamp.com/album/celestial-circuit"
					className={classNames(styles.externalLink, styles.bigExternalLink)}
				>
					<img
						src="/assets/celestialcircuit_album_cover.png"
						className={styles.icon}
					/>
					<div className={styles.externalLinkLabel}>
						Celestial Circuit (Chip T4T)
					</div>
				</Button>
				<Button
					href="https://alisongrace.bandcamp.com/album/venus"
					className={classNames(styles.externalLink, styles.bigExternalLink)}
				>
					<img
						src="/assets/venus_album_cover.png"
						className={styles.icon}
					/>
					<div className={styles.externalLinkLabel}>venus (ALBUM)</div>
				</Button>
				<Button
					href="https://alisongrace.bandcamp.com/album/peaches-interplanetary-ost"
					className={classNames(styles.externalLink, styles.bigExternalLink)}
				>
					<img
						src="/assets/peachesinterplanetary_album_cover.png"
						className={styles.icon}
					/>
					<div className={styles.externalLinkLabel}>Peaches Interplantary (OST)</div>
				</Button>
				<Button href="https://alisongrace.bandcamp.com" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=bandcamp.com" className={styles.icon} />
					<div className={styles.externalLinkLabel}>full discography (bandcamp)</div>
				</Button>
				{/* <Button href="https://vgen.co/alisongrace" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=vgen.co" className={styles.icon} />
					<div className={styles.externalLinkLabel}>commissions (closed)</div>
				</Button> */}
			</div>
			<img
				className={styles.aliSittingImage}
				src="/assets/ali_sitting.png"
			/>
		</>
	);
}
