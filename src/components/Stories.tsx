import styles from "@/styles/Home.module.scss"
import { useState } from "react"

function Stories({}) {


	const [activeStory, setActiveStory] = useState(-1)
	let gridTemplateString = ""
	for (let i = 1; i <= 3; i++) {
		if (i == activeStory) gridTemplateString += " 3fr "
		else gridTemplateString += " 1fr "
	}

	return (
		<section className={styles.storiesSection}>
			<h1>Stories</h1>
			<div
				className={`${styles.stories}`}
				style={{
					gridTemplateColumns: gridTemplateString,
					gridTemplateRows: gridTemplateString,
				}}
			>
				<div
					className={styles.story + " " + styles.kidStory}
					style={{
						filter: `${
							activeStory === -1
								? "grayscale(0%)"
								: "grayscale(70%) blur(1.8px)"
						}`,
					}}
					onMouseOver={() => setActiveStory(1)}
					onMouseOut={() => setActiveStory(-1)}
				></div>
				<div
					style={{
						filter: `${
							activeStory === -1
								? "grayscale(0%)"
								: "grayscale(70%) blur(1.8px)"
						}`,
					}}
					className={styles.story + " " + styles.ladyStory}
					onMouseOver={() => setActiveStory(2)}
					onMouseOut={() => setActiveStory(-1)}
				></div>
				<div
					style={{
						filter: `${
							activeStory === -1
								? "grayscale(0%)"
								: "grayscale(70%) blur(1.8px)"
						}`,
					}}
					className={styles.story + " " + styles.oldLadyStory}
					onMouseOver={() => setActiveStory(3)}
					onMouseOut={() => setActiveStory(-1)}
				></div>
			</div>
		</section>
	)
}

export default Stories
