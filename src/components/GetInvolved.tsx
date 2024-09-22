import styles from "@/styles/Home.module.scss"
import { useState } from "react"

function GetInvolved({}) {
	const [isDonateActive, setIsDonateActive] = useState(false)

	return (
		<div className={styles.getInvolved} id="get-involved">
			<h1>Get Involved</h1>

			<div></div>

			<section className={styles.volunteer + " " + styles.supportCampaign}>
				<div className={styles.volunteerWrapper}>
					<h1>Support a campaign</h1>
					<p>
						Your donations directly impact our campaigns, providing vital
						resources for children's education, healthcare, and well-being,
						ensuring their brighter future. Thank you for your invaluable
						support
					</p>
					<a className={styles.button + " " + styles.viewCampaignButton}>
						View Campaigns
					</a>
				</div>
			</section>
			<section
				className={`${styles.donate} ${
					isDonateActive ? styles.donationActive : ""
				}`}
			>
				<div className={styles.donateImageWrapper}>
					<div className={styles.donateImageFG}></div>
					<div className={styles.donateImageBG}></div>
					<div className={styles.donateImageGradient}></div>
					<div className={styles.donateButtonWrapper}>
						<button
							onMouseOver={() => setIsDonateActive(true)}
							onMouseOut={() => setIsDonateActive(false)}
							className={styles.buttonBG + " " + styles.donateButton}
						>
							<p>Donate</p>
						</button>
						<button
							onMouseOver={() => setIsDonateActive(true)}
							onMouseOut={() => setIsDonateActive(false)}
							className={styles.buttonText + " " + styles.donateButton}
						>
							<p>Donate</p>
						</button>
					</div>
				</div>
			</section>

			<section className={styles.volunteer}>
				<div className={styles.volunteerWrapper}>
					<h1>Be a proud Volunteer</h1>
					<p>
						Being a volunteer you have a great opportunity to do something for
						society and especially for humanity. Somewhere it gives you
						satisfaction and peace for that keeps you motivated and ahead.
					</p>
					<button className={styles.button}>Join Now</button>
				</div>
			</section>
		</div>
	)
}

export default GetInvolved
