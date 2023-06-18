import Image from "next/image";
import SocialLink from "../components/SocialLink";
import SocialLinkSmall from "../components/SocialLinkSmall";

export default function Home() {
	return (
		<main className="flex min-h-screen  flex-col items-center justify-between p-1 pt-24">
			<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
				<div className="p-x-10 items-top flex text-center">
					<Image
						src="/pfp.jpg"
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
							className={`m-0 max-w-[30ch] pt-9 text-5xl`}
							style={{ letterSpacing: 1.5 }}
						>
							iamasink
						</h1>
						<p className="m-0 pt-9 text-2xl">Lily </p>
						<p>
							<span className="border border-transparent text-white">
								she/her
							</span>{" "}
							<span className="text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100">
								&lt;3
							</span>
						</p>

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
					/>{" "}
					<SocialLink
						href="https://twitter.com/iamasink"
						src="/twitter.svg"
						alt="Twitter"
						text="Twitter"
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
				</div>
			</div>
		</main>
	);
}
