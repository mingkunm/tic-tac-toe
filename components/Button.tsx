import { FunctionComponent } from 'react'

import styles from './Button.module.sass'

type ButtonProps = {
	text: string
	onClick: () => void
	width?: string
}

const Button: FunctionComponent<ButtonProps> = ({
	text,
	onClick,
	width = 'auto',
}) => {
	return (
		<button onClick={onClick} style={{ width }} className={styles.button}>
			{text}
		</button>
	)
}

export default Button
