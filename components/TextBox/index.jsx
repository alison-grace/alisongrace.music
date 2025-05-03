import classNames from 'classnames';
import styles from './styles.module.scss';

export default function TextBox({ children, portraitURL, big, subtle, resizable, className }) {
	return (
		<section className={
			classNames(
				styles.textBox,
				{ [styles.big]: big },
				{ [styles.subtle]: subtle },
				{ [styles.resizable]: resizable },
				className,
			)
		}>
			{portraitURL && (
				<img
					className={styles.portrait}
					src={portraitURL}
				/>
			)}
			{children}
		</section>
	);
}
