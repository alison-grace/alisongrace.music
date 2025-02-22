import Button from '../components/Button';
import TextBox from '../components/TextBox';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<>
			<TextBox portraitURL="/assets/ali_portrait.png" className={styles.sagging}>
				hi, i'm alison! i'm a VGM composer with a specialty in digital and jazz fusion.
			</TextBox>

			<div className={styles.externalLinks}>
				<Button href="https://linktr.ee/alisongracemusic" className={styles.externalLink}>
					<img src="/assets/venus_album_cover.png" className={styles.icon}></img>
					venus (NEW ALBUM)
				</Button>
				<Button href="https://www.youtube.com/@alisongracemusic" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com" className={styles.icon}></img>
					youtube
				</Button>
				<Button href="https://alisongrace.bandcamp.com" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=bandcamp.com" className={styles.icon}></img>
					bandcamp
				</Button>
				<Button href="https://vgen.co/alisongrace" className={styles.externalLink}>
					<img src="https://www.google.com/s2/favicons?sz=64&domain=vgen.co" className={styles.icon}></img>
					commissions (via VGen)
				</Button>
			</div>
		</>
	);
}
