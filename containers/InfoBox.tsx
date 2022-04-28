import { FunctionComponent } from 'react'

import styles from './InfoBox.module.sass'
import Button from '../components/Button'

type InfoBoxProps = {}

const InfoBox: FunctionComponent<InfoBoxProps> = () => {
	return (
		<div className={styles.container}>
			<Button text='Start' onClick={() => console} />
		</div>
	)
}

export default InfoBox
