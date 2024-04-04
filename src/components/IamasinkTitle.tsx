import Link from "next/link";

const IamasinkTitle: React.FC = ({}) => {
	return (
		<div className="animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] bg-clip-text hover:text-purple-500">
			<h1
				className={` text-5xl text-transparent transition-all  `}
				style={{}}
			>
				iamas
			</h1>
			<h1
				className={`text-5xl text-transparent transition-all duration-300 group-hover:translate-x-1 `}
				style={{}}
			>
				ink
			</h1>
			<h2
				className={`m-0 max-w-[30ch] text-5xl text-purple-500 transition-all group-hover:-translate-x-[70px] group-hover:text-transparent`}
			>
				.
			</h2>
		</div>
	);
};

export default IamasinkTitle;
