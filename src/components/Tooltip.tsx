import Image from "next/image";
import React from "react";

interface TooltipProps {
	children: React.ReactNode;
	message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
	return (
		<div className="group relative flex">
			{children}
			<span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
				{message}
			</span>
		</div>
	);
};

export default Tooltip;
