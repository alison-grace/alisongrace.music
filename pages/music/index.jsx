import Head from 'next/head';
import MusicListing from '../../components/MusicListing';
import TextBox from '../../components/TextBox';
import styles from './styles.module.scss';

export default function Music() {
	return (
		<>
			<Head>
				<title>kevenandsoki (music)</title>
				<meta property="og:title" content="kevenandsoki (music)" />
				<meta property="og:description" content="portfolio examples of what i do best." />
			</Head>

			<TextBox>
				below are numerous works of mine, both originals and covers, that reflect what i do best.
			</TextBox>

			<div className={styles.musicList}>
				<MusicListing
					label="Sub Battle - Bahamut Lagoon (Arrange)"
					url="/music/sub_battle_-_bahamut_lagoon.mp3"
					date="09/22/22"
				/>
				<MusicListing
					label="stuck in a"
					url="/music/stuck_in_a.mp3"
					date="08/18/22"
				/>
				<MusicListing
					label="hunch"
					url="/music/hunch.mp3"
					date="08/10/22"
				/>
				<MusicListing
					label="trap beat (VRC6) (demo)"
					url="/music/trap_beat_(wip).mp3"
					date="08/10/22"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=KjoB68bgrMc">to your roots</a>
					}
					url="/music/to_your_roots.mp3"
					date="08/10/22"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=nAGMtYB0B9k">Wily Stage 1/2 - Mega Man 2 (Arrange)</a>
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
					label="Lake - Pokémon DPPt (Arrange)"
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
				<MusicListing
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
				/>
				<MusicListing
					label="mega man 8 mockup stage select"
					url="/music/mega_man_8_mockup_stage_select.mp3"
					date="06/24/21"
				/>
				<MusicListing
					label="cutesie (demo)"
					url="/music/cutesie.mp3"
					date="06/16/21"
				/>
				<MusicListing
					label="dawn in the city"
					url="/music/dawn_in_the_city.mp3"
					date="05/01/21"
				/>
				<MusicListing
					label="encounter! (SNES)"
					url="/music/encounter.mp3"
					date="02/05/21"
				/>
				<MusicListing
					label="neverending blizzard"
					url="/music/neverending_blizzard.mp3"
					date="01/27/21"
				/>
				<MusicListing
					label="team photon hideout"
					url="/music/team_photon_hideout.mp3"
					date="12/24/20"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=d-SASCaYqcA">village of the forest</a>
					}
					url="/music/village_of_the_forest.mp3"
					date="12/18/20"
				/>
				<MusicListing
					label="soon to be"
					url="/music/soon_to_be.mp3"
					date="11/22/20"
				/>
				<MusicListing
					label="consequence"
					url="/music/consequence.mp3"
					date="11/16/20"
				/>
				<MusicListing
					label="soaked clothes"
					url="/music/soaked_clothes.mp3"
					date="11/01/20"
				/>
				<MusicListing
					label={
						<a href="https://www.youtube.com/watch?v=ZB-9H-o7QQo">lost humanity</a>
					}
					url="/music/lost_humanity.wav"
					date="10/30/20"
				/>
			</div>
		</>
	);
}
