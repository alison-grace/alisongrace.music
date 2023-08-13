import Head from 'next/head';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';

export default function About() {
	return (
		<>
			<Head>
				<title>kevenandsoki (about)</title>
				<meta property="og:title" content="kevenandsoki (about)" />
				<meta property="og:description" content="some info about me, and my musical background." />
			</Head>

			<Columns>
				<TextBox big>
					<p>
						as i said before, i'm keven. hi! i'm an 18 year old entering college, graduating in 2027.
					</p>
					<p>
						i grew up with and always loved video games, especially their music. most of my childhood was spent either playing games, or trying to make my own. i was never very engaged in the game designing process, but the one thing i loved most and easily spent the most time on was creating soundtracks for my games.
					</p>
					<p>
						even though my music when i was 12 wasn't very great, i never quit. i was greatly inspired by indie musicians like{' '}
						<a href="https://en.wikipedia.org/wiki/Daisuke_Amaya">Daisuke "Pixel" Amaya</a>{' '}
						<i>(<a href="https://www.cavestory.org/">Cave Story</a>)</i>{' '}
						and{' '}
						<a href="https://en.wikipedia.org/wiki/Toby_Fox">Toby Fox</a>{' '}
						<i>(<a href="https://www.undertale.com/">UNDERTALE</a>)</i>, who started out making music with unprofessional or free tools, and made amazing soundtracks and games with them. i thought from them, that i could too, if i just gave it my all.
					</p>
					<p>
						amazing musicians like them are the ones who taught me that tools don't make the composer.
					</p>
				</TextBox>
				<TextBox big>
					<p>
						i use FL Studio 21 as my main DAW, although i'll occassionally use LSDJ or Famitracker to utilize a specific soundchip's unique sound. i'm also familiar with Logic and Ableton. on top of a vast library of samples and digital plugins, i try to use my little collection of real instruments whenever i can. these include my electric bass, electric guitar, acoustic guitar, flute, melodica, and some percussive instuments.
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
