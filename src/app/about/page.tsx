import Image from "next/image";

import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Iamasink</title>
				<meta
					name="description"
					content="iamasink's homepage"
					key="desc"
				/>
				<meta property="og:title" content="Iamasink" />
				<meta property="og:description" content="iamasink" />
				{/* <meta
					property="og:image"
					content="https://example.com/images/cool-page.jpg"
				/> */}
			</Head>
			<main className="items-left flex min-h-screen flex-col justify-between p-24">
				<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
					<Header></Header>
					<p>test</p>
				</div>
			</main>
		</div>
	);
}
