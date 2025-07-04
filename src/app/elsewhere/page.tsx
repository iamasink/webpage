import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import BouncyText from "@/components/BouncyText"



export default function Home() {
	return (
		<div>
			<title>elsewhere..</title>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="mx-7 py-3 pt-5 centered-main">
					<BouncyText>Theres not much here yet...</BouncyText>
					<br />
					{/*  translucent unless hovered */}
					<small className="opacity-70">but you can visit my <Link className="textlink" href="/blog">blog</Link>..</small>
					<br />
					<br />
					<img className="float-right" src="/place_him2.png" style={{ imageRendering: "pixelated" }}></img>
					<br />
					<Link href="/elsewhere/meow"><img src="/assets/images/kb/pfp_flashback_hapi.png" width={150} height={150} style={{ imageRendering: "pixelated" }}></img></Link>
					<br />
					<Link className="textlink" href="/"> go back</Link>
					<br />
					<br />
					<Link href="/elsewhere/gifs"><img src="/assets/images/mindwave/spr_popup_s1.gif" width={138 * 2} height={101 * 2} style={{ imageRendering: "pixelated" }}></img></Link>
					<br />
					<br />
					<img src="/catfire.gif" width={384} height={96} />
				</div>
			</main>
		</div>
	)
}
