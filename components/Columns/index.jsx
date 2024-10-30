import styles from './styles.module.scss';
import fadeInStyles from '../../styles/fade_in.module.scss';
import classNames from 'classnames';

export default function Columns({ children, ...props }) {
	return (
		<div
			className={classNames(styles.columns, fadeInStyles.fadeIn)}
			{...props}
		>
			{children}
		</div>
	);
}
