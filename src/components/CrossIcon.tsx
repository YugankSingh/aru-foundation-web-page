import React from "react"
import styles from "@styles/CrossIcon.module.css"

const CrossIcon = () => {
	return (
		<div className={styles.crossIcon}>
			<div className={styles.horizontalLine}></div>
			<div className={styles.verticalLine}></div>
		</div>
	)
}

export default CrossIcon
