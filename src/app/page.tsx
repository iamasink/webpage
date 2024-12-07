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
export const viewport: Viewport = {
	themeColor: 'black',
}


export default function Home() {
	return (
		<div>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="">
					<div className="items-top flex">
						<Pfp></Pfp>
						<div className="">
							<NameTitle></NameTitle>
							<p className="text-pink-100">
								haii :3c
							</p>
							<p className="pt-9 text-2xl ">
								<span className="text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100">
									&lt;3
								</span>
							</p>
							<p>
								she/her
							</p>


							<div className="">
								Discord @
								<CopyableText text="iamasink"></CopyableText>
							</div>
						</div>
					</div>

					<div className="">
						<p className="">My time (<span className="font-mono">Europe/London</span>):</p>
						<Clock></Clock>
					</div>
					<DiscordStatus></DiscordStatus>

					<div className="">
						<div>
							<SocialLink
								href="https://bsky.app/profile/iamas.ink"
								src="/bluesky.svg"
								text="Bluesky"
								newtab={true}
							/>
							<SocialLink
								href="/blog"
								src="/oldpfp.jpg"
								text="Blog"
								newtab={false}
							/>
							<SocialLink
								href="https://github.com/iamasink"
								src="/github.svg"
								text="GitHub"
								newtab={true}
							/>{" "}
							<SocialLink
								href="https://discord.gg/xzZHfMw887"
								src="/discord.svg"
								text="Discord"
								newtab={true}
							/>
							<SocialLink
								href="https://steamcommunity.com/id/iamasink/"
								src="/steam.svg"
								text="Steam"
								newtab={true}
							/>
						</div>
						<div className="grid grid-cols-3">
							{/* small ones go here */}
							<SocialLinkSmall
								href="https://ko-fi.com/iamasink"
								src="/kofi.svg"
								alt="Ko-fi"
								newtab={true}
							/>
							<SocialLinkSmall
								href="https://youtube.com/@iamasink"
								src="/youtube.svg"
								alt="youtube"
								newtab={true}
							/>
							<SocialLinkSmall
								href="mailto:lily@iamas.ink"
								src="/email.svg"
								alt="email"
								newtab={true}
							/>
						</div>
					</div>

					{/* <SlateBackground> */}
					<p className="mx-5 px-2 py-3 border-rose-800 border-2 rounded-2xl bg-slate-800">
						<span>I&apos;m not very interesting so theres not much here..</span>
						<br />
						<span>why don&apos;t you check out <a title="link to snailhands.neocities.org" className="underline text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100" href="https://snailhands.neocities.org/">oomf</a></span>
						<br />
						<span>i will update this page one day.....</span>
					</p>
					{/* </SlateBackground> */}
				</div>
			</main >
		</div >
	)
}
