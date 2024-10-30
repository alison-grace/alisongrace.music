import Page from '../components/Page';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}
