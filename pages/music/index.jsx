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
				<meta property="og:description" content="portfolio examples of what i do best." />
			</Head>

			<Columns className={styles.musicColumns}>
				<div className={styles.musicTextBoxes}>
					<TextBox big>
						<p>
							my commissions are <b>currently closed</b>, but i am always <b>open</b> for <b>work on games</b>!
						</p>
						<p>
							<a href="https://vgen.co/alisongrace">for individual commissions (when they're open), send your requests through VGen!</a>
						</p>
					</TextBox>
					<TextBox big>
						<p>
							if you're interested in hiring me as a composer for a game or project, please <b>contact me personally</b> to discuss details:
						</p>
						<p>
							<b>email:</b> <a href="mailto:ali@alisongrace.music">ali@alisongrace.music</a><br/>
							<b>discord</b>: alisongrace.music
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

				{/* <iframe className={styles.iframe}
					src="https://bandcamp.com/EmbeddedPlayer/album=1073379070/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/">
				</iframe> */}

				<MusicList/>
			</Columns>
		</>
	);
}
