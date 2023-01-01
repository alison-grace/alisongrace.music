import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';

export default function Soki() {
	return (
		<>
			<div className={styles.sokiContainer}>
				<TextBox big>
					<p>
						as i said before, i'm keven. hi! i'm a 17 year old student in high school, graduating in 2023.
					</p>
					<p>
						i grew up with and always loved video games, and their music. most of my childhood was spent either playing games, or trying to make my own games. i was never very successful in making them, but the one thing i loved the most was making music for my games.
					</p>
					<p>
						even though my music when i was 12 wasn't very great, i never quit. indie musicians like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						<i>(<a href="https://www.cavestory.org/">Cave Story</a>)</i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						<i>(<a href="https://www.undertale.com/">UNDERTALE</a>)</i>, who started out making music with unprofessional or free tools, made amazing soundtracks and games. and so i thought, that i could too.
					</p>
					<p>
						amazing musicians like them are the ones who taught me tools don't make the composer.
					</p>
				</TextBox>
				<TextBox big>
					<p>
						i use FL Studio 12 as my main DAW, although i'll occassionally use LSDJ or Famitracker to utilize a specific soundchip. i am also familiar with Logic and Ableton. i also try to use my little collection of real instruments whenever i can such as my bass, electric guitar, acoustic guitar, and some small percussion instuments.
					</p>
				</TextBox>
			</div>
			<img
				className={styles.kasSittingImage}
				src="/assets/kas_sitting.png"
			/>
		</>
	);
}
