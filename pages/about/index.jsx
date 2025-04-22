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

			<Columns style={{ alignItems: 'center' }}>
				<TextBox big>
					<p><i>
						"combining the music of America and Japan alike, </i><b>alisongrace</b><i> explores chiptune and video game music from a songwriter's perspective. she lives and breathes the mantra that 'tools don't make the artist,' applying modern production techniques to trashy, dated sounds and samples."
					</i></p>
					{/* <p>
						growing up, alison's childhood was filled with music and games--both playing games and trying to make her own. her favorite part of game developemnt was writing music for them.
					</p> */}
					<p>
						VGM composers like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						<i>(<a href="https://www.cavestory.org/">Cave Story</a>)</i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						<i>(<a href="https://www.undertale.com/">UNDERTALE</a>)</i> are major inspirations for her--proving that despite not having the most professional or industry-standard tools, she can create out beautiful, concise, and evocative music.
					</p>
				</TextBox>
				<TextBox big>
					<p>
						alisongrace uses a range of DAWs, chiptune trackers, a vast library of digital instruments, a collection of live instruments, and a keen ear to compose and produce her music.
					</p>
					<p>
						<b>email:</b> <a href="mailto:ali@alisongrace.music">ali@alisongrace.music</a><br/>
						<b>discord</b>: alisongrace.music
					</p>
				</TextBox>
			</Columns>
			<img
				className={styles.kasSittingImage}
				src="/assets/kas_sitting.png"
			/>
		</>
	);
}
