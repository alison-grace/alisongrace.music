import Head from 'next/head';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';

export default function About() {
	return (
		<>
			<Head>
				<title>alisongrace (about)</title>
				<meta property="og:title" content="alisongrace (about)" />
				<meta property="og:description" content="some info about me, and my musical background." />
			</Head>

			<Columns>
				<TextBox big>
					<p><i>
						Combining the music of America and Japan alike, alisongrace explores chiptune and video game music from a songwriter's perspective. She lives and breathes the mantra that 'tools don't make the artist,' applying creative, modern production techniques to dated sounds and samples, breathing new life into them.
					</i></p>
					{/* <p>
						growing up, alison's childhood was filled with music and games--both playing games and trying to make her own. her favorite part of game developemnt was writing music for them.
					</p> */}
					<p><i>
						VGM composers like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						</i>(<a href="https://www.cavestory.org/game-info/about-cave-story.php">Cave Story</a>)<i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						</i>(<a href="https://www.undertale.com/">UNDERTALE</a>)<i> are major inspirations for her--proving that she can create beautiful, and evocative music with just about anything.
					</i></p>
				</TextBox>
				<div>
					{/* <img
						className={styles.alisonCollage}
						src="https://f4.bcbits.com/img/0010850854_21.jpg"
					/> */}
					<TextBox big>
						<p>
							alisongrace uses a range of DAWs, chiptune trackers, a vast library of digital plugins, a collection of live instruments, and the support of her cat to compose and produce her music.
						</p>
						<p>
							<b>email:</b> <a href="mailto:ali@alisongrace.music">ali@alisongrace.music</a><br/>
							<b>discord</b>: alisongrace.music
						</p>
					</TextBox>
				</div>
			</Columns>
			<img
				className={styles.kasSittingImage}
				src="/assets/kas_sitting.png"
			/>
		</>
	);
}
