import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import BouncyText from "@/components/BouncyText"
import CopyableText from "@/components/CopyableText"
import Copyable from "@/components/Copyable"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'support iamasink',
	description: "links to support iamasink",
	openGraph: {
		title: 'support iamasink',
		description: "links to support iamasink",
		url: 'https://iamas.ink/support',
		images: [
			{
				url: 'https://iamas.ink/pfp.png',
				width: 100,
				height: 100,
			},
		],
		type: 'website',
	},
	referrer: 'origin-when-cross-origin',
	keywords: ['iamasink', 'links', 'homepage'],
	creator: 'iamasink',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
}

export default function Home() {
	return (
		<div>
			<title>support me</title>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="mx-7 py-3 pt-5 centered-main">
					<BouncyText>support me</BouncyText>
					<br />
					<br />
					<a
						href="https://ko-fi.com/iamasink"
						target="_blank" rel="noopener noreferrer"
					>
						<img src="assets/images/support/kofi_button_dark.webp"></img>
					</a>
					<a
						href="https://github.com/sponsors/iamasink"
						target="_blank"	rel="noopener noreferrer"
					>
						<button
							style={{
								width: "270px",
								height: "40px",
								backgroundColor: "#24292f",
								color: "#fff",
								border: "none",
								borderRadius: "6px",
								cursor: "pointer",
								fontSize: "14px",
							}}
						>
							❤️ Sponsor me on GitHub Sponsors
						</button>
					</a>

					<hr/>
					<br/>
					<h1>other ways to donate</h1>
					<Copyable text="0x58e789D03911a44A0Eb7cA438bee9239Cfa4eA31"><span className="text-gray-400 inline-flex">ethereum: <img src="copy.svg" className="ml-3" style={{filter: "invert(1)"}}></img></span><span className="text-gray-500">0x58e789D03911a44A0Eb7cA438bee9239Cfa4eA31</span></Copyable>
				</div>
			</main>
		</div>
	)
}
