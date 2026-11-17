import Head from 'next/head';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';
import MusicList from '../../components/MusicList';

export default function Music() {
	return (
		<>
			<Head>
				<title>alisongrace (music)</title>
				<meta property="og:title" content="alisongrace (music)" />
				<meta property="og:description" content="my portfolio, and some examples of my music!" />
			</Head>

			<Columns className={styles.musicColumns}>
				<div className={styles.musicTextBoxes}>
					<TextBox big>
						<p>
							i make chiptune and VGM, both for and outside of games! i score, compose, arrange, and produce, as well as write for my own personal music project. i've been quite busy finishing up college, so my VGen commissions are <b>closed indefinitely</b>, but i'm <b>always open</b> for <b>work on games/projects/albums</b>. do reach out!
						</p>
						<p>
							when they do eventually open again, you can send commission requests through{" "}
							<a href="https://vgen.co/alisongrace">VGen</a>.
						</p>
						<p>
							i'm <b>semi-negotiable</b> on rates! please contact me for more info.
						</p>
						<p>
							<b>email:</b> <a href="mailto:ali@alisongrace.music">ali@alisongrace.music</a><br/>
							<b>discord</b>: alisongrace.music
							<br/>
						</p>
					</TextBox>
					{/* <TextBox big subtle>
						<iframe src="https://www.youtube.com/embed/G8Vo5_TfN4Q" />
					</TextBox> */}
				</div>

				{/* <TextBox big>
					<p>
						below are some more works of mine from over the years, both originals and covers.
					</p>
				</TextBox> */}

				<div className={styles.musicExamplesColumn}>
					<div className={styles.musicSmallTextBox}>
						<p>
							below are a mix of released tracks, unreleased tracks, demos, and covers!
						</p>
					</div>
					{/* <iframe className={styles.iframe}
						src="https://bandcamp.com/EmbeddedPlayer/album=1073379070/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/">
					</iframe> */}
					<MusicList/>
				</div>
			</Columns>
		</>
	);
}
