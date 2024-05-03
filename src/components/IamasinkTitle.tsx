import Link from "next/link";

const IamasinkTitle: React.FC = ({ }) => {
	return (
		<div className="text-5xl bg-clip-text animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] group-hover:text-purple-500">
			<h1
				className={`text-transparent `}
				style={{}}
			>
				iamas
			</h1>
			<h1
				// className={`text-transparent transition-transform duration-300 group-hover:translate-x-1 `}
				className={`text-transparent transition-transform duration-300`}
				style={{}}
			>
				ink
			</h1>
			{/* <h2
				className={`m-0 max-w-[30ch] text-purple-500 transition-all group-hover:-translate-x-[70px] group-hover:text-transparent`}
			>
				.
			</h2> */}
		</div>
	);
};

export default IamasinkTitle;
