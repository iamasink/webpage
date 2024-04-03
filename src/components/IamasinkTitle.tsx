"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const move1 = {
	initial: { x: 0, opacity: 1, delay: 0, color: "#transparent" },
	animate: { x: -70, opacity: 1, delay: 0, color: "#00ff00" },
};
const move2 = {
	initial: { x: 0, opacity: 1, delay: 0, color: "#transparent" },
	animate: { x: 4, opacity: 1, delay: 0, color: "#ff0000" },
};

const IamasinkTitle: React.FC = ({}) => {
	return (
		<motion.div
			initial="initial"
			animate="initial"
			whileHover="animate"
			className="animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] bg-clip-text hover:text-purple-500"
		>
			<h1
				className={` text-5xl text-transparent transition-all  `}
				style={{}}
			>
				iamas
			</h1>
			<motion.div
				initial={{ x: 4, opacity: 1 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 1, ease: "easeInOut", duration: 0.15 }}
			>
				<motion.h1
					variants={move2}
					className={`text-5xl text-transparent transition-all duration-300  `}
					style={{}}
				>
					ink
				</motion.h1>
			</motion.div>
			<motion.div
				initial={{ x: -70, opacity: 1 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 1, ease: "easeInOut", duration: 0.3 }}
			>
				<motion.h1
					variants={move1}
					className={`m-0 max-w-[30ch] text-5xl text-purple-500 transition-all group-hover:text-transparent`}
				>
					.
				</motion.h1>
			</motion.div>
		</motion.div>
	);
};

export default IamasinkTitle;
