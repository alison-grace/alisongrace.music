import classNames from 'classnames';
import styles from './styles.module.scss';

export default function TextBox({ children, portraitURL, big, subtle, resizable, className, ...props }) {
	return (
		<section
			className={
				classNames(
					styles.textBox,
					{ [styles.big]: big },
					{ [styles.subtle]: subtle },
					{ [styles.resizable]: resizable },
					className,
				)
			}
			{...props}
		>
			{portraitURL && (
				<img
					className={styles.portrait}
					src={portraitURL}
				/>
			)}
			<div>
				{children}
			</div>
		</section>
	);
}
