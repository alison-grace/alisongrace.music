import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import OuterWall from '../OuterWall';
import styles from './styles.module.scss';
import fadeInStyles from '../../styles/fade_in.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import classNames from 'classnames';

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

	return (
		<div className={styles.page}>
			<Head>
				<title>kevenandsoki</title>

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="kevenandsoki" />
				<meta property="og:description" content="welcome to my site!" />
				<meta property="og:image" content="/favicon.ico" />

				<base target="_blank" />
			</Head>

			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2HW5F6LBL0"></Script>

			<OuterWall />

			<Header />
			<main
				key={`main_${router.asPath}`}
				className={classNames(styles.main, fadeInStyles.fadeIn)}
			>
				{children}
			</main>
			<Footer
				key={`footer_${router.asPath}`}
			/>
		</div>
	);
}
