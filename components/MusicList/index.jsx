import MusicListing from '../MusicListing';
import styles from './styles.module.scss';

export default function MusicList () {
	return (
		<div className={styles.musicList}>
			<MusicListing
				label="penultimate area (Persona 4-inspired)"
				url="/music/penultimate_area.mp3"
				date="03/21/24"
			/>
			<MusicListing
				label="Fated Bond (original)"
				url="/music/fated_bond_(v2.5).mp3"
				date="04/25/23"
			/>
			<MusicListing
				label="ethereal (trance-adjacent, demo)"
				url="/music/ethereal.mp3"
				date="05/19/24"
			/>
			<MusicListing
				label="macromedia flash (Roland Sound Canvas, demo)"
				url="/music/macromedia_flash.mp3"
				date="01/05/25"
			/>
			<MusicListing
				label="Let's Report a Bug! (original)"
				url="/music/Let's_Report_a_Bug!.mp3"
				date="06/24/24"
			/>
			<MusicListing
				label="Lake - Pokémon Diamond & Pearl (Digifu Arrange)"
				url="/music/lake_-_pkmn_dppt.mp3"
				date="04/01/22"
			/>
			<MusicListing
				label="need ur company (NES VRC6, very chibi-tech inspired demo)"
				url="/music/trap_beat_(wip).mp3"
				date="08/10/22"
			/>
			<MusicListing
				label="Sub Battle - Bahamut Lagoon (Cover)"
				url="/music/sub_battle_-_bahamut_lagoon.mp3"
				date="09/22/22"
			/>
			<MusicListing
				label={
					<a href="https://www.youtube.com/watch?v=nAGMtYB0B9k">Wily Stage 1/2 - Mega Man 2 (FM Arrange)</a>
				}
				url="/music/wily_stage_1_-_mm2_(arrange).mp3"
				date="08/03/22"
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
			{/* <MusicListing
				label={
					<>makeikusa (for <a href="https://twitter.com/Shimada_Swears">@Shimada_Swears</a>)</>
				}
				url="/music/makeikusa.mp3"
				date="06/18/22"
			/> */}
			<MusicListing
				label={
					<a href="https://www.youtube.com/watch?v=FLJYgQvvJ1E">Windmill Isle (Day) - Sonic Unleashed (Arrange)</a>
				}
				url="/music/windmill_isle_-_sonic_unleashed_(arrange).mp3"
				date="10/09/21"
			/>
			<MusicListing
				label="Stage Select (Mega Man 8-styled original)"
				url="/music/mega_man_8_mockup_stage_select.mp3"
				date="06/24/21"
			/>
			<MusicListing
				label="dawn in the city (original)"
				url="/music/dawn_in_the_city.mp3"
				date="05/01/21"
			/>
			<MusicListing
				label="hunch (dubstep, demo)"
				url="/music/hunch_(demo).mp3"
				date="08/10/22"
			/>
		</div>
	);
}