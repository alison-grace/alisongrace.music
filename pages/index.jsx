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
				<Button
					href="https://cloudcrew.bandcamp.com/album/color-coated-wam-3"
					className={classNames(styles.externalLink, styles.bigExternalLink)}
				>
					<img
						src="/assets/colorcoated_album_cover.png"
						className={styles.icon}
					/>
					<div className={styles.externalLinkLabel}>Color Coated (WAM #3)</div>
				</Button>
				<Button href="https://www.youtube.com/@alisongracemusic" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com" className={styles.icon} />
					<div className={styles.externalLinkLabel}>youtube</div>
				</Button>
				<Button href="https://alisongrace.bandcamp.com" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=bandcamp.com" className={styles.icon} />
					<div className={styles.externalLinkLabel}>bandcamp</div>
				</Button>
				<Button href="https://vgen.co/alisongrace" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=vgen.co" className={styles.icon} />
					<div className={styles.externalLinkLabel}>commissions (closed)</div>
				</Button>
			</div>
		</>
	);
}
