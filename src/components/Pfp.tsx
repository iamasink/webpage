import Image from "next/image";
import Tooltip from "./Tooltip";

const Pfp: React.FC = ({ }) => {
	//const alt="pfp art by shioneko114 https://twitter.com/shioneko114/status/1700896958682959929"
	//  https://twitter.com/shioneko114/status/1695414505151635514
	const alt = "pfp art by shioneko114"

	return (
		<div className="content-center">
			<Tooltip message={alt}>
				<a href=" https://twitter.com/shioneko114/status/1695414505151635514">

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
				</a>
			</Tooltip>
		</div>
	);
};

export default Pfp;
