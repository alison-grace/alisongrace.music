import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import OuterWall from '../OuterWall';
import styles from './styles.module.scss';
import fadeInStyles from '../../styles/fade_in.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import classNames from 'classnames';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

function loadAnalytics() {
	window.dataLayer = window.dataLayer || [];
	function gtag() { dataLayer.push(arguments); }
	gtag('js', new Date());

	gtag('config', 'G-2HW5F6LBL0');
};

export default function Page({ children }) {
	const router = useRouter();

	useEffect(() => {
		loadAnalytics();
	}, []);

	const mainRef = useRef();

	useIsomorphicLayoutEffect(() => {
		let animationFrame;

		function centerMain() {
			animationFrame = requestAnimationFrame(centerMain);

			const main = mainRef.current;
			const mainRect = main.getBoundingClientRect();

			const center = window.innerHeight / 2;
			const centeredTop = center - mainRect.height / 2;
			const offsetTop = window.scrollY + mainRect.top;
			const differenceToCenteredTop = centeredTop - offsetTop;

			const previousMarginTop = +main.style.marginTop.slice(0, -2);
			const marginTop = Math.max(0, previousMarginTop + differenceToCenteredTop);

			if (marginTop === previousMarginTop) {
				return;
			}

			main.style.marginTop = `${marginTop}px`;
		}

		centerMain();

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<div className={styles.page}>
			<Head>
				<title>alisongrace (home)</title>

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="alisongrace.music" />
				<meta property="og:description" content="welcome to my portfolio website!" />
				<meta property="og:image" content="/assets/ali_portrait.png" />
				<meta name="theme-color" content="#6f9cd6" />

				<link rel="shortcut icon" href="/favicon.ico?" />

				<base target="_blank" />
			</Head>

			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2HW5F6LBL0"></Script>

			<OuterWall />

			<Header />
			<main
				key={`main_${router.asPath}`}
				className={classNames(styles.main, fadeInStyles.fadeIn)}
				ref={mainRef}
			>
				{children}
			</main>
			<Footer
				key={`footer_${router.asPath}`}
			/>
		</div>
	);
}
