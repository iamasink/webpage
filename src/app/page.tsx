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
						<p className="">My time (<span className="font-mono">Europe/London</span>):</p>
						<Clock></Clock>
					</div>
					{/* <DiscordStatus></DiscordStatus> */}


					{/* <SlateBackground> */}

					<div className="mx-7 py-3 pt-5">
						<span>I&apos;m not very interesting so theres not much here..</span>
						<br />
						<span>why don&apos;t you check out <a title="link to snailhands.neocities.org" className="underline text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100" href="https://snailhands.neocities.org/">oomf</a></span>
						<br />
						<span>i will update this page one day.....</span>
						<br />
						<br />
						<span>heres a button! feel free to link to me :3</span>
						<br />
						<img className="float-right" src="/terriermon-blink.gif" alt="terriermon blinking gif" title="moumantai" width={150} height={0}></img>
						{/* <div className="overflow-scroll w-[88px] h-[31px]"> */}
						<Copyable message="Click to copy source!" text='<a href="https://iamas.ink/"><img src="https://iamas.ink/assets/buttons/iamasink.gif"/></a>'>
							<img src="/assets/buttons/iamasink.gif" alt="iamasink's button" width={88} height={31} style={{ imageRendering: "pixelated" }}></img>
						</Copyable>
						{/* </div> */}
						<br />
						<br />
						<span>some cool sites</span>
						<div className="flex">
							<a href="https://dimden.dev/"><img width={88} height={31} src="https://dimden.dev/services/images/88x31.gif" /></a>
							<a href="https://eightyeightthirty.one/"><Image width={88} height={31} alt="eightyeightthirtyone" src="/assets/buttons/88x31.png" /></a>
						</div>
						<br />

						<span>theres more</span>
						<br />
						<Link href="/tok"><img src="/assets/images/o-toki-pona.png"></img></Link>
					</div>

					{/* </SlateBackground> */}
					{/* <div className=""> */}
				</div>
			</main >
		</div >
	)
}
