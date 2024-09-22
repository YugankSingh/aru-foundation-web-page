import "@/styles/globals.scss"
import HamburgerIcon from "@/components/HamburgerIcon"
import CrossIcon from "@/components/CrossIcon"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useState } from "react"
import Link from "next/link"

export default function App({ Component, pageProps }: AppProps) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)

	return (
		<>
			<Head>
				<title>Aru Foundation</title>
				<meta
					name="description"
					content="Aru Foundation is a non-profity organization helping various sectors of the society"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<HamburgerIcon onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
				<div className={`navWrapper ${isNavbarOpen ? "visible" : "hidden"}`}>
					<div className={`navMain`}>
						<button
							className="closeButton"
							onClick={() => setIsNavbarOpen(false)}
						>
							<CrossIcon />
						</button>
						<Link href="/about-us">About Us</Link>
						<Link href="/programs">Programs</Link>
						<Link href="/impact-stories">Impact Stories</Link>
						<Link href="/campaign">Campaigns</Link>
						<Link href="/contact-us">Contact Us</Link>
						<Link href="/resources">Donate</Link>
					</div>
					<div className="navBg" onClick={() => setIsNavbarOpen(false)}></div>
				</div>
				<Link href="/">
					<img
						src="/images/logo-white.png"
						alt="ARU"
						height={70}
						className="aru-logo"
					/>
				</Link>
			</nav>
			<main className="main">
				<Component {...pageProps} />
			</main>
		</>
	)
}
