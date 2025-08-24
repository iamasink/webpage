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
			<title>support me</title>
			<main className="flex min-h-screen flex-col items-center pt-24">
				<div className="mx-7 py-3 pt-5 centered-main">
					<BouncyText>support me</BouncyText>
					<br />
					<br />
					<a
						href="https://ko-fi.com/iamasink"
						target="_blank" rel="noopener noreferrer"
					>
						<img src="assets/images/support/kofi_button_dark.webp"></img>
					</a>
					<a
						href="https://github.com/sponsors/iamasink"
						target="_blank"	rel="noopener noreferrer"
					>
						<button
							style={{
								width: "270px",
								height: "40px",
								backgroundColor: "#24292f",
								color: "#fff",
								border: "none",
								borderRadius: "6px",
								cursor: "pointer",
								fontSize: "14px",
							}}
						>
							❤️ Sponsor me on GitHub Sponsors
						</button>
					</a>
				</div>
			</main>
		</div>
	)
}
