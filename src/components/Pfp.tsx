import Image from "next/image"
import Tooltip from "./Tooltip"

interface PfpProps {
	size?: number
	tooltip?: boolean
}

const hovermsg = "pfp art by shioneko114"
const ttooltip = (<div className="">
	<span className="absolute left-1/2 top-8 -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-gradient-to-br from-pink-950 to-pink-500 bg-[length:400px_200px] p-2 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
		<a draggable="true" target="_blank" rel="noopener noreferrer" href="https://twitter.com/shioneko114/status/1695414505151635514">
			{hovermsg}
		</a>
	</span>
</div>)


const Pfp: React.FC<PfpProps> = ({ size = 200, tooltip = true }) => {
	//const alt="pfp art by shioneko114 https://twitter.com/shioneko114/status/1700896958682959929"
	//  https://twitter.com/shioneko114/status/1695414505151635514

	return (
		<div className="place-content-center ">
			<div className="group relative inline-block">
				<Image
					src="/pfp.png"
					alt="profile picture"
					draggable={false}
					width={size}
					height={size}
					style={{
						border: "3px solid #ffffff",
					}}
					className="m-4 rounded-3xl group-hover:rounded-xl transition-all"
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				></Image>
				{tooltip && ttooltip}

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
	)
}

export default Pfp
