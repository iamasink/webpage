import Link from "next/link"

const NameTitle: React.FC = ({ }) => {
	return (
		<div className="text-5xl bg-clip-text animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] group-hover:text-purple-500">
			<h1
				className={`text-transparent `}
				style={{}}
			>
				iamasink
			</h1>
			<h2
				className={`select-none text-purple-500 group-hover:opacity-100 opacity-0 transition-opacity -translate-x-[73px] align-bottom`}
			>
				.
			</h2>
		</div>
	)
}

export default NameTitle
