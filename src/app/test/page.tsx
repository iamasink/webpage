import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"

export default function Home() {
	return (
		<main className="min-h-screen">
			<div className="pl">
				<h1 className="border an">
					<br />
					h1
				</h1>
				<Image src="/pfp.png" alt="pfp" ></Image>
			</div>
		</main>
	)
}
