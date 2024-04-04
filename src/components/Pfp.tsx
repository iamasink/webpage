import Image from "next/image";

const Pfp: React.FC = ({}) => {
	return (
		<Image
			src="/pfp.png"
			// alt="pfp art by shioneko114 https://twitter.com/shioneko114/status/1700896958682959929"
			alt="pfp art by shioneko114 https://twitter.com/shioneko114/status/1695414505151635514"
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
	);
};

export default Pfp;
