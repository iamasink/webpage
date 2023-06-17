import Image from "next/image";
import SocialLink from "../components/SocialLink";
import SocialLinkSmall from "../components/SocialLinkSmall";

export default function Home() {
	return (
		<main className="flex min-h-screen  flex-col items-center justify-between p-1 pt-24">
			<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
				<div className="p-x-10 flex items-center text-center">
					<Image
						src="/pfp.jpg"
						alt="image"
						draggable={false}
						width={100}
						height={0}
						style={{
							borderRadius: "15%",
							border: "2px solid #ffffff",
						}}
						className="m-4"
						// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					></Image>
					<div className="group flex">
						<h1
							className={`m-0 max-w-[30ch] text-5xl`}
							style={{ letterSpacing: 1.5, zIndex: "1" }}
						>
							iamasink
						</h1>
						{/* <h1
							className={`m-0 max-w-[30ch] text-3xl transition-all group-hover:opacity-0`}
							aria-hidden={true}
							style={{
								position: "relative",
								left: "-4ch",
								userSelect: "none",
								cursor: "text",
								zIndex: "0",
								transitionDuration: "250ms",
							}}
						>
							.
						</h1> */}
					</div>
				</div>

				<div>
					<SocialLink
						href="https://github.com/iamasink"
						src="/github.svg"
						alt="GitHub"
						text="GitHub"
					/>
				</div>
				<div className="grid grid-cols-3">
					<SocialLinkSmall
						href="https://twitter.com/iamasink"
						src="/twitter.svg"
						alt="Twitter"
					/>

					<SocialLinkSmall
						href="https://steamcommunity.com/id/iamasink/"
						src="/steam.svg"
						alt="Steam"
					/>

					<SocialLinkSmall
						href="https://iamas.ink/discord"
						src="/discord.svg"
						alt="Discord Server"
					/>
				</div>
			</div>
		</main>
	);
}
