import Head from 'next/head';
import MusicListing from '../../components/MusicListing';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';
import Columns from '../../components/Columns';

export default function Music() {
	return (
		<>
			<Head>
				<title>kevenandsoki (music)</title>
				<meta property="og:title" content="kevenandsoki (music)" />
				<meta property="og:description" content="portfolio examples of what i do best." />
			</Head>

			{/* The style is there because the misalignment of the tops and bottoms
			    of each column look like poopoo dog doodoo without it. */}
			<Columns style={{ alignItems: 'center' }}>
				<TextBox big>
					{/* <p>
						my commissions are open! i'm open to write music for games, streams, or most multimedia.
					</p> */}
					<p>
						my commissions are <b>currently closed</b>, but i'm currently <b>accepting requests</b> for <b>work on games</b>!
					</p>
					<p>
						my pricing is <b>$20/minute</b> of music.
					</p>
					<p>
						<a href="https://vgen.co/kevenandsoki">for individual commissions, send your requests through VGen!</a>
					</p>
					<p>
						if you're interested in hiring me as a composer for a game or project, please <b>contact me personally</b> to discuss details:
					</p>
					<p>
						<b>discord</b>: kevenandsoki <br/>
						<b>email:</b> <a href="mailto:keven@kevenandsoki.com">keven@kevenandsoki.com</a>
					</p>
				</TextBox>
				<TextBox big subtle>
					<iframe src="https://www.youtube.com/embed/RYDr6XYo6l4" />
				</TextBox>
			</Columns>

			<TextBox big>
				<p>
					below are some more works of mine from over the years, both originals and covers.
				</p>
			</TextBox>

			<div className={styles.musicList}>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=RZaXk477Hbc">Sinister Sundown - Kingdom Hearts II (Cover)</a>
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
					label="Fated Bond"
					url="/music/fated_bond_(v2).mp3"
					date="04/25/23"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=aOj4jtZp8rQ">M.Z.M.B.C - FΛDE (Fusion Cover)</a>
					}
					url="/music/mzmbc_-_fade.mp3"
					date="03/17/23"
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
					label="trap beat (NES VRC6, demo)"
					url="/music/trap_beat_(wip).mp3"
					date="08/10/22"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=KjoB68bgrMc">To Your Roots (2000s JRPG-inspired original)</a>
					}
					url="/music/to_your_roots.mp3"
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
					label="Lake - Pokémon Diamond & Pearl (Arrange)"
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
					label="dawn in the city"
					url="/music/dawn_in_the_city.mp3"
					date="05/01/21"
				/>
				<MusicListing
					label="encounter! (SNES-inspired battle theme)"
					url="/music/encounter!.mp3"
					date="02/05/21"
				/>
				<MusicListing
					label="neverending blizzard (Touhou-inspired original)"
					url="/music/neverending_blizzard.mp3"
					date="01/27/21"
				/>
				<MusicListing
					label="consequence"
					url="/music/consequence.mp3"
					date="11/16/20"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=ZB-9H-o7QQo">lost humanity</a>
					}
					url="/music/lost_humanity.mp3"
					date="10/30/20"
				/>
			</div>
		</>
	);
}
