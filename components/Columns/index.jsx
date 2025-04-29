import styles from './styles.module.scss';
import fadeInStyles from '../../styles/fade_in.module.scss';
import classNames from 'classnames';

export default function Columns({ className, children, ...props }) {
	return (
		<div
			className={classNames(styles.columns, fadeInStyles.fadeIn, className)}
			{...props}
		>
			{children}
		</div>
	);
}
