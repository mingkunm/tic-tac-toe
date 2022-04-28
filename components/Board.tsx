import { FunctionComponent } from 'react'

import Square from './Square'
import styles from './Board.module.sass'

export type DataType = 'X' | 'O' | ' '

const MockData = [
	['X', ' ', 'O'],
	['O', ' ', ' '],
	[' ', 'X', ' '],
] as DataType[][]

interface BoardRowProps {
	rowData: DataType[]
	rowIndex: number
}
const BoardRow: FunctionComponent<BoardRowProps> = ({ rowData, rowIndex }) => {
	return (
		<div className={styles.boardRow}>
			{rowData.map((colData, colIndex) => (
				<Square
					data={colData}
					key={colIndex}
					coordinate={{
						row: rowIndex,
						col: colIndex,
					}}
				/>
			))}
		</div>
	)
}

const Board: FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<div className={styles.board}>
				{MockData.map((rowData, rowIndex) => (
					<BoardRow rowData={rowData} rowIndex={rowIndex} key={rowIndex} />
				))}
			</div>
		</div>
	)
}

export default Board
