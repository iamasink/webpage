"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";

interface CopyableTextProps {
	text: string;
}

const CopyableText: React.FC<CopyableTextProps> = ({ text }) => {
	let tooltip = "Click to copy!";

	return (
		<span
			onClick={() => {
				tooltip = "Copied!";
				navigator.clipboard.writeText(text);
			}}
		>
			<Tooltip message={tooltip}>{text}</Tooltip>
		</span>
	);
};

export default CopyableText;
