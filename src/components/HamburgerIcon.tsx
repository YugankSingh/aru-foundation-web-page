import React, { useState } from "react"
import styles from "@styles/HamburgerIcon.module.css"

interface HamburgerIconProps {
	onClick: () => void
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ onClick }) => {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		onClick()
		setIsActive(!isActive)
	}

	return (
		<div
			className={`${styles.hamburgerIcon} ${isActive ? styles.active : ""}`}
			onClick={handleClick}
		>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
		</div>
	)
}

export default HamburgerIcon
