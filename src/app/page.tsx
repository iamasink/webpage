import Image from "next/image";
import SocialLink from "../components/SocialLink";
import SocialLinkSmall from "../components/SocialLinkSmall";
import Head from "next/head";

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
			<main className="flex min-h-screen  flex-col items-center justify-between p-1 pt-24">
				<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
					<div className="items-top p-x-10 flex text-center">
						<Image
							src="/pfp.png"
							alt="image"
							draggable={false}
							width={200}
							height={0}
							style={{
								borderRadius: "15%",
								border: "3px solid #ffffff",
							}}
							className="m-4"
							// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						></Image>
						<div className="group">
							<h1
								className={`animate-fade-gradient-right m-0 max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] bg-clip-text pt-9 text-5xl text-transparent transition-all `}
								style={{}}
							>
								iamasink
							</h1>
							<p className="m-0 pt-9 text-2xl ">
								{/* <span>Lily</span>{" "} */}
								<span className="text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100">
									&lt;3
								</span>
							</p>
							<p>
								<span className="border border-transparent text-white">
									she/her
								</span>
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<h1 className={`max-w-[30ch] text-center text-xl`}>
							Discord @
							<span className="select-text">iamasink</span>
						</h1>
					</div>

					<div>
						<SocialLink
							href="https://github.com/iamasink"
							src="/github.svg"
							alt="GitHub"
							text="GitHub"
						/>{" "}
						<SocialLink
							href="https://discord.gg/xzZHfMw887"
							src="/discord.svg"
							alt="Discord"
							text="Discord"
						/>
						<SocialLink
							href="https://steamcommunity.com/id/iamasink/"
							src="/steam.svg"
							alt="Steam"
							text="Steam"
						/>
					</div>
					<div className="grid grid-cols-3">
						{/* small ones go here */}
						<SocialLinkSmall
							href="https://ko-fi.com/iamasink"
							src="/kofi.svg"
							alt="Ko-fi"
						/>
						<SocialLinkSmall
							href="https://youtube.com/@iamasink"
							src="/youtube.svg"
							alt="youtube"
						/>
						<SocialLinkSmall
							href="mailto:lily@yoink.org.uk"
							src="/email.svg"
							alt="email"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
