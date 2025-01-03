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
	description: "sinks's homepage",
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
							<div className="">
								Discord @
								<CopyableText text="iamasink"></CopyableText>
							</div>
						</div>
					</div>


					<div className="mx-7">
						<p className="">tenpo mi li (<span className="font-mono">Europe/London</span>):</p>
						<Clock></Clock>
					</div>
					{/* <DiscordStatus></DiscordStatus> */}


					{/* <SlateBackground> */}

					<div className="mx-7 py-3 pt-5">
						<span>lipu ni li lili..</span>
						<br />
						<span>o lukin e lipu ni: <a title="tawa lipu snailhands.neocities.org" className="underline text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100" href="https://snailhands.neocities.org/">lipu pi jan pona</a></span>
						<br />
						<span>tenpo kama la mi suli e ni</span>
						<br />
						<br />
						<span>nena a! sina ken jasima lon lipu sina!</span>
						<br />
						{/* <div className="overflow-scroll w-[81px] h-[31px]"> */}
						<Copyable message="o pali la sama" text='<a href="https://iamas.ink/"><img src="https://iamas.ink/assets/buttons/iamasink.gif"/></a>'>
							<img src="/assets/buttons/iamasink.gif" alt="iamasink's button" width={81} height={31} style={{ imageRendering: "pixelated" }}></img>
						</Copyable>
						{/* </div> */}
						<br />
						<img className="float-right" src="/terriermon-blink.gif" alt="soweli Telilimon pi musi Sikimon (Digimon)" title="ale li pona" width={150} height={0}></img>
						<br />
						<span>lipu pona</span>
						<br />

						<div className="flex">
							<a href="https://dimden.dev/"><img width={81} height={31} src="https://dimden.dev/services/images/88x31.gif" /></a>
							<a href="https://eightyeightthirty.one/"><Image width={81} height={31} alt="eightyeightthirtyone" src="/assets/buttons/88x31.png" /></a>
						</div>
						<br />

						<span>o alasa</span>
						<br />
						<Link href="/"><img src="/assets/images/o-toki-ike.png"></img></Link>
					</div>

					{/* </SlateBackground> */}
					{/* <div className=""> */}
				</div>
			</main >
		</div >
	)
}
