import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import BouncyText from "@/components/BouncyText"

export default function Home() {
	return (
		<div>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="mx-7 py-3 pt-5">
					<BouncyText>I&apos;m not very interesting so theres not much here..</BouncyText>
					<br />
					{/*  translucent unless hovered */}
					<small className="opacity-40 hover:opacity-100 transition-opacity duration-300">I guess you can visit my <Link className="textlink" href="/blog">blog</Link>..</small>
					<br />
					<br />
					<img className="float-right" src="/place_him2.png"></img>
					<br />

					<br />
					<Link className="textlink" href="/"> go back</Link>
				</div>
			</main>
		</div>
	)
}
