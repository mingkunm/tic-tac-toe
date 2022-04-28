import { FunctionComponent } from 'react'

import { DataType } from './Board'
import styles from './Square.module.sass'

interface SquareProps {
	data: DataType
	coordinate: {
		row: number
		col: number
	}
}

const Square: FunctionComponent<SquareProps> = ({ data }) => {
	return <div className={styles.square}>{data.length ? data : ' '}</div>
}

export default Square
