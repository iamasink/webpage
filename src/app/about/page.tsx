import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"

export default function Home() {
	return (
		<div>
			<main className="items-left flex min-h-screen flex-col justify-between p-24">
				<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
					<Header></Header>
					<p>hello world</p>
				</div>
			</main>
		</div>
	)
}
