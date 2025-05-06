import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import BouncyText from "@/components/BouncyText"
import CopyableText from "@/components/CopyableText"
import Copyable from "@/components/Copyable"



export default function Home() {
	return (
		<div>
			<title>elsewhere..</title>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="mx-7 py-3 pt-5 centered-main">
					<BouncyText>Minecraft server.........</BouncyText>
					<img src="/catfire.gif" width={384} height={96} />
					<br />
					<p>IP (click to copy)</p>
					<div className="ml-2">
						<Copyable message="Click to copy ip!" text='mc.iamas.ink'>
							<span className="bg-gradient-to-r from-pink-500 to-blue-500 font-mono text-2xl bg-clip-text text-transparent hover:opacity-100 transition-opacity duration-300">
								<BouncyText>mc.iamas.ink</BouncyText>
							</span>
						</Copyable>
					</div>
				</div>
			</main>
		</div>
	)
}
