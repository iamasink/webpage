import Image from "next/image";
import Tooltip from "./Tooltip";

const Pfp: React.FC = ({ }) => {
	//const alt="pfp art by shioneko114 https://twitter.com/shioneko114/status/1700896958682959929"
	//  https://twitter.com/shioneko114/status/1695414505151635514
	const alt = "pfp art by shioneko114"

	return (
		<div className="place-content-center ">
			<div className="group relative inline-block">
				<Image
					src="/pfp.png"
					alt={alt}
					draggable={false}
					width={200}
					height={200}
					style={{
						borderRadius: "15%",
						border: "3px solid #ffffff",

					}}
					className="m-4"
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				></Image>
				<div className="">
					<span className="absolute left-1/2 top-8 -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-gradient-to-br from-pink-950 to-pink-500 bg-[length:400px_200px] p-2 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
						<a draggable="true" target="_blank" rel="noopener noreferrer" href="https://twitter.com/shioneko114/status/1695414505151635514">
							{alt}
						</a>
					</span>
				</div>
			</div>

			{/* 
				<Tooltip message={alt}>
					<Image
						src="/pfp.png"
						alt={alt}
						draggable={false}
						width={200}
						height={200}
						style={{
							borderRadius: "15%",
							border: "3px solid #ffffff",

						}}
						className="m-4"
					// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					></Image>
				</Tooltip> */}
		</div>
	);
};

export default Pfp;
