import Image from "next/image";
import SocialLink from "../components/SocialLink";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10 pt-24">
			<div className="mb-32 grid text-center lg:mb-0 lg:text-left">
				<div className="flex items-center text-center ">
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
							className={`m-0 max-w-[30ch] text-base md:text-base lg:text-5xl`}
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

				<SocialLink
					href="https://twitter.com/iamasink"
					src="/twitter.svg"
					alt="twitter logo"
					text="Twitter"
				/>

				<SocialLink
					href="https://steamcommunity.com/id/iamasink/"
					src="/steam.svg"
					alt="steam logo"
					text="Steam"
				/>
			</div>
		</main>
	);
}
