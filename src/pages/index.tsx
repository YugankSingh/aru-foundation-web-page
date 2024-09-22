import styles from "@/styles/Home.module.scss"
import ARUStats from "@/components/ARUStats"
import Link from "next/link"
import Footer from "@/components/Footer"
import Stories from "@/components/Stories"
import GetInvolved from "@/components/GetInvolved"

export default function Home() {
	// const [isHoveringOnStory, setIsHoveringOnStory] = useState(false)
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<div className={styles.heading}>
						<h1>ARU</h1>
						<div className={styles.headingSecondaryGroup}>
							<h3 className={styles.headingSecondaryCharacter}>F</h3>
							<h3 className={styles.headingSecondaryCharacter}>O</h3>
							<h3 className={styles.headingSecondaryCharacter}>U</h3>
							<h3 className={styles.headingSecondaryCharacter}>N</h3>
							<h3 className={styles.headingSecondaryCharacter}>D</h3>
							<h3 className={styles.headingSecondaryCharacter}>A</h3>
							<h3 className={styles.headingSecondaryCharacter}>T</h3>
							<h3 className={styles.headingSecondaryCharacter}>I</h3>
							<h3 className={styles.headingSecondaryCharacter}>0</h3>
							<h3 className={styles.headingSecondaryCharacter}>N</h3>
						</div>
					</div>
					<div className={styles.information}>
						Every click takes you on a journey of hope. Meet the faces behind
						the stories of transformation—individuals whose lives have been
						touched by our programs and initiatives.
					</div>
					<div className={styles.cta}>
						<a className={styles.ctaButton} href="/#get-involved">
							GET INVOLVED
						</a>
					</div>
				</div>
			</section>
			<section className={styles.hope}>
				<h2>It all starts with one thing.</h2>
				<h1>HOPE</h1>
			</section>

			<section className={styles.difference}>
				<div className={styles.bg1}></div>
				<div className={styles.bg2}>
					<div className={styles.gradient}></div>
				</div>
				<div className={styles.content}>
					<div className={styles.contentWrapper}>
						<p>
							and the<span className={styles.differenceHope}> Hope </span>
							was to make a
							<strong className={styles.difference}> Difference </strong>
						</p>
						<p className={styles.learnMore}>
							Learn about our{" "}
							<Link href="/about-us">
								mission, values, and the dedicated team
							</Link>{" "}
							working tirelessly to bring about positive change in our
							communities.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.impact}>
				<h1>IMPACT</h1>
				<div className={styles.impactContent}>
					<h2>
						We have been helping out the children from financially weak
						communities since 2017
					</h2>
				</div>
			</section>
			<ARUStats />
			<Stories />
			<GetInvolved />
			<section className={styles.placeholder}>
				{/* <div>
					Our journey began with a simple idea: to make a difference. Learn
					about our mission, values, and the dedicated team working tirelessly
					to bring about positive change in our communities.
				</div> */}
			</section>
			<Footer />
		</>
	)
}
