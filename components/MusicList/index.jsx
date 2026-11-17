import { useState } from 'react';
import MusicListing from '../MusicListing';
import styles from './styles.module.scss';

export default function MusicList() {
	const [scrolledToTop, setScrolledToTop] = useState(true);
	const [scrolledToBottom, setScrolledToBottom] = useState(false);

	function handleScroll(event) {
		setScrolledToTop(event.target.scrollTop === 0);
		setScrolledToBottom(
			event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight
		);
	}

	return (
		<div className={styles.musicList}>
			<div
				className={styles.musicListingsWrapper}
				style={{
					"--mask-color-top": scrolledToTop ? "black" : "transparent",
					"--mask-color-bottom": scrolledToBottom ? "black" : "transparent",
				}}
				onScroll={handleScroll}
			>
				<MusicListing
					label={
						<a href="https://chipt4t.bandcamp.com/track/fashion-snow">Fashion Snow (original, game boy + guitar)</a>
					}
					url="/music/Fashion_Snow.mp3"
					date="09/02/25"
				/>
				<MusicListing
					label={
						<a href="https://alisongrace.bandcamp.com/album/venus">venus (ALBUM, preview of multiple tracks)</a>
					}
					url="/music/venus_preview.mp3"
					date="01/15/25"
				/>
				<MusicListing
					label="anew break (demo)"
					url="/music/anew_break.mp3"
					date="07/12/25"
				/>
				<MusicListing
					label="Close, and far (game boy+, unreleased)"
					url="/music/Close,_and_far.mp3"
					date="09/03/25"
				/>
				<MusicListing
					label="Fated Bond (unreleased)"
					url="/music/fated_bond_(v2.5).mp3"
					date="04/25/23"
				/>
				<MusicListing
					label="Your Lies (game boy, unreleased)"
					url="/music/your_lies.mp3"
					date="idk bro :sob:"
				/>
				<MusicListing
					label="Fear of the dark (unreleased)"
					url="/music/fear_of_the_dark_(finished).mp3"
					date="05/19/24"
				/>
				<MusicListing
					label="the hand shredder (snes)"
					url="/music/the_hand_shredder.mp3"
					date="05/26/26"
				/>
				{/* <MusicListing
					label="macromedia flash (Roland Sound Canvas, demo)"
					url="/music/macromedia_flash.mp3"
					date="01/05/25"
				/> */}
				<MusicListing
					label={
						<a href="https://youtu.be/HaxDTWGDbes">Undertale - Toby Fox (UNDERTALE) (game boy+ cover)</a>
					}
					url="/music/undertale_-_toby_fox_final.mp3"
					date="03/21/24"
				/>
				<MusicListing
					label="penultimate area (demo)"
					url="/music/penultimate_area.mp3"
					date="03/21/24"
				/>
				<MusicListing
					label="ethereal (demo)"
					url="/music/ethereal.mp3"
					date="05/19/24"
				/>
				<MusicListing
					label="Snake Man - Mega Man 3 (game boy cover)"
					url="/music/snake_man_lsdj.mp3"
					date=""
				/>
				{/* <MusicListing
					label="Lake - Pokémon Diamond & Pearl (Digifu Arrange)"
					url="/music/lake_-_pkmn_dppt.mp3"
					date="04/01/22"
				/> */}
			</div>
		</div>
	);
}
