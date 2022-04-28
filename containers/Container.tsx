import { FunctionComponent } from 'react'

import styles from './Container.module.sass'
import InfoBox from './InfoBox'
import Board from './Board'

const Container: FunctionComponent = () => {
	return (
		<div className={styles.container}>
			<InfoBox />
			<Board />
		</div>
	)
}

export default Container
