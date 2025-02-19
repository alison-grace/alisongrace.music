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
					<p>
						hi again, im alison (she/her)! i'm an 19 year old NY college student, graduating in 2027.
					</p>
					<p>
						i grew up with and always loved video games, especially their music. most of my childhood was spent either playing games, or trying to make my own. when making them, my favorite part was always writing music for them.
					</p>
					<p>
						VGM composers like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						<i>(<a href="https://www.cavestory.org/">Cave Story</a>)</i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						<i>(<a href="https://www.undertale.com/">UNDERTALE</a>)</i> inspired me to never give up doing what i love. despite not having the most professional or industry-standard tools, they put out beautifully effective, and evocative music--saying thousands of words with just one melody.
					</p>
					<p>
						amazing musicians like them are the ones who taught me that tools don't make the composer.
					</p>
				</TextBox>
				<TextBox big>
					<p>
						i've since pursued formal music training and have aimed to perfect my craft.
					</p>
					<p>
						i use a variety of DAWs in my music, from FL Studio and Logic, to chiptune trackers like LSDJ, Famitracker, or Furnace Tracker.
					</p>
					<p>
						on top of a vast library of digital instruments, i try to use my collection of real instruments whenever i can. these include electric guitar, electric bass, acoustic guitar, flute, melodica, and some percussive instuments.
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
