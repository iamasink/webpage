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

export default function Home() {
	return (
		<div>
			<Head>
				<title>iamasink</title>
				<meta name="description" content="iamasink's homepage" />
				<meta property="og:title" content="iamasink" />
				<meta property="og:description" content="iamasink's homepage" />
			</Head>
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
								alt="Bluesky"
								text="Bluesky"
								newtab={true}
							/>
							<SocialLink
								href="/blog"
								src="/oldpfp.jpg"
								alt=""
								text="Blog"
								newtab={false}
							/>
							<SocialLink
								href="https://github.com/iamasink"
								src="/github.svg"
								alt="GitHub"
								text="GitHub"
								newtab={true}
							/>{" "}
							<SocialLink
								href="https://discord.gg/xzZHfMw887"
								src="/discord.svg"
								alt="Discord"
								text="Discord"
								newtab={true}
							/>
							<SocialLink
								href="https://steamcommunity.com/id/iamasink/"
								src="/steam.svg"
								alt="Steam"
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
				</div>
			</main >
		</div >
	)
}
