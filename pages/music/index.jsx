import Head from 'next/head';
import MusicListing from '../../components/MusicListing';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';

export default function Music() {
	return (
		<>
			<Head>
				<title>alisongrace (music)</title>
				<meta property="og:title" content="alisongrace (music)" />
				<meta property="og:description" content="portfolio examples of what i do best." />
			</Head>

			{/* The style is there because the misalignment of the tops and bottoms
			    of each column look like poopoo dog doodoo without it. */}

			<Columns style={{ alignItems: 'center' }}>
				<TextBox big>
					<p>
						my commissions are <b>currently closed</b>, but i am always <b>open</b> for <b>work on games</b>!
					</p>
					<p>
						<a href="https://vgen.co/alisongrace">for individual commissions (when they're open), send your requests through VGen!</a>
					</p>
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
			</Columns>

			{/* <TextBox big>
				<p>
					below are some more works of mine from over the years, both originals and covers.
				</p>
			</TextBox> */}

			<div className={styles.musicList}>
				<MusicListing
					label="macromedia flash (Roland Sound Canvas VA, demo)"
					url="/music/macromedia_flash.mp3"
					date="01/05/25"
				/>
				<MusicListing
					label="Let's Report a Bug! (original)"
					url="/music/Let's_Report_a_Bug!.mp3"
					date="06/24/24"
				/>
				<MusicListing
					label="ethereal (trance-adjacent, demo)"
					url="/music/ethereal.mp3"
					date="05/19/24"
				/>
				<MusicListing
					label="penultimate area (Persona 4-inspired)"
					url="/music/penultimate_area.mp3"
					date="03/21/24"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=RZaXk477Hbc">Sinister Sundown - Kingdom Hearts II (Faithful Cover)</a>
					}
					url="/music/sinister_sundown_-_kingdom_hearts_ii.mp3"
					date="07/26/23"
				/>
				<MusicListing
					label="Strengthened By Hope (demo)"
					url="/music/strengthened_by_hope_(demo).mp3"
					date="06/13/23"
				/>
				<MusicListing
					label="Fated Bond (original)"
					url="/music/fated_bond_(v2).mp3"
					date="04/25/23"
				/>
				<MusicListing
					label="Red Alert - Metal Gear (MSX, Arrange)"
					url="/music/red_alert_-_metal_gear_msx.mp3"
					date="02/13/23"
				/>
				{/* <MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=knH_6sSfFMY">fighting in harmony</a>
					}
					url="/music/fighting_in_harmony.mp3"
					date="01/22/23"
				/> */}
				<MusicListing
					label="Sub Battle - Bahamut Lagoon (Cover)"
					url="/music/sub_battle_-_bahamut_lagoon.mp3"
					date="09/22/22"
				/>
				<MusicListing
					label="hunch (dubstep, demo)"
					url="/music/hunch_(demo).mp3"
					date="08/10/22"
				/>
				<MusicListing
					label="need ur company (VRC6, chibi-tech inspired demo)"
					url="/music/trap_beat_(wip).mp3"
					date="08/10/22"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=nAGMtYB0B9k">Wily Stage 1/2 - Mega Man 2 (FM Arrange)</a>
					}
					url="/music/wily_stage_1_-_mm2_(arrange).mp3"
					date="08/03/22"
				/>
				<MusicListing
					label="90s house (demo)"
					url="/music/90s_house_(wip).mp3"
					date="06/22/22"
				/>
				<MusicListing
					label={
						<>makeikusa (for <a href="https://twitter.com/Shimada_Swears">@Shimada_Swears</a>)</>
					}
					url="/music/makeikusa.mp3"
					date="06/18/22"
				/>
				<MusicListing
					label="Lake - Pokémon Diamond & Pearl (Digifu Arrange)"
					url="/music/lake_-_pkmn_dppt.mp3"
					date="04/01/22"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=FLJYgQvvJ1E">Windmill Isle (Day) - Sonic Unleashed (Arrange)</a>
					}
					url="/music/windmill_isle_-_sonic_unleashed_(arrange).mp3"
					date="10/09/21"
				/>
				{/* <MusicListing
					label="city lights"
					url="/music/city_lights.mp3"
					date="07/24/21"
				/>
				<MusicListing
					label={
						<>Sunrays (for <a href="https://twitter.com/GambleputtyG">@GambleputtyG</a>)</>
					}
					url="/music/sunrays.mp3"
					date="07/15/21"
				/> */}
				<MusicListing
					label="Stage Select (Mega Man 8-styled original)"
					url="/music/mega_man_8_mockup_stage_select.mp3"
					date="06/24/21"
				/>
				{/* <MusicListing
					label="cutesie (demo)"
					url="/music/cutesie.mp3"
					date="06/16/21"
				/> */}
				<MusicListing
					label="dawn in the city (original)"
					url="/music/dawn_in_the_city.mp3"
					date="05/01/21"
				/>
				<MusicListing
					label="encounter! (SNES-inspired battle theme)"
					url="/music/encounter!.mp3"
					date="02/05/21"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=ZB-9H-o7QQo">lost humanity (original)</a>
					}
					url="/music/lost_humanity.mp3"
					date="10/30/20"
				/>
			</div>
		</>
	);
}
