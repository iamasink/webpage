import Image from "next/image"
import SocialLink from "@/components/SocialLink"
import SocialLinkSmall from "@/components/SocialLinkSmall"
import Head from "next/head"
import NameTitle from "@/components/NameTitle"
import Pfp from "@/components/Pfp"
import Tooltip from "@/components/Tooltip"
import { useRouter } from "next/router"
import { useState } from "react"
import CopyableText from "@/components/CopyableText"
import Clock from "@/components/Clock"
import DiscordStatus from "@/components/DiscordStatus"
import SlateBackground from "@/components/SlateBackground"
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
	title: 'iamasink - home',
	description: "sink's homepage",
	openGraph: {
		title: 'iamasink - home',
		description: "sink's homepage",
		url: 'https://iamas.ink/',
		images: [
			{
				url: 'https://iamas.ink/pfp.png',
				width: 100,
				height: 100,
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'iamasink - home',
		description: "sink's homepage",
		images: ['https://iamas.ink/pfp.png'],
	},
	referrer: 'origin-when-cross-origin',
	keywords: ['iamasink', 'links', 'homepage'],
	authors: [{ name: "Lily" }],
	creator: 'iamasink',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
}

import type { Viewport } from 'next'
import Copyable from "@/components/Copyable"
import Link from "next/link"
import { Button8831 } from "@/components/Button8831"
import BouncyText from "@/components/BouncyText"
export const viewport: Viewport = {
	themeColor: 'black',
}


export default function Home() {
	return (
		<div>
			<Script src="./oneko.js"></Script>
			<main className="flex min-h-screen flex-col items-center pt-24">
					<div className="">

					<div className="items-top flex">
						<Pfp></Pfp>
						<div className="">
							<NameTitle></NameTitle>
							<br />
							<br />
							<br />
							<div className="" aria-label="Discord @iamasink">
								Discord @
								<CopyableText text="iamasink"></CopyableText>
							</div>
						</div>
					</div>


					<div className="mx-7">
						<p className="" >My time (<span className="font-mono">Europe/London</span>):</p>
						<Clock></Clock>
					</div>
					{/* <DiscordStatus></DiscordStatus> */}


					{/* <SlateBackground> */}

					<div className="mx-7 pt-5">
						<span>hi</span>
						<br />
						<br />
						<div style={{alignItems:"center"}}>
						<span>button thing</span><br/>
						<Copyable message="Click to copy source!" text='<a href="https://iamas.ink/"><img src="https://iamas.ink/assets/buttons/iamasink.gif"/></a>'>
							<img src="/assets/buttons/iamasink.gif" alt="iamasink's button" width={88} height={31} style={{ imageRendering: "pixelated" }}></img>
						</Copyable>
						</div>
						<br />
						<br />
						<span>go <Link className="textlink" href="/elsewhere"><BouncyText hoverOnly={true}>elsewhere~</BouncyText></Link></span>
					</div>

					{/* </SlateBackground> */}
					{/* <div className=""> */}
				</div>
			</main >
		</div >
	)
}
