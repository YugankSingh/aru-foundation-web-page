import React from "react"
import styles from "@styles/Footer.module.scss"
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<p>Copyright &copy; All rights reserved by ARU foundation.</p>
				<p>
					Developed and built by{" "}
					<a href="https://www.linkedin.com/in/yugank-singh/" target="_blank">Yugank Singh.</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
