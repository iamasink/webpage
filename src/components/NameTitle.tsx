import Link from "next/link"
import "./NameTitle.css" // make sure to import the CSS


const NameTitle: React.FC = ({ }) => {
	return (
		<div className="namecontainer">
			<div className="text-5xl bg-clip-text animated-background group m-0 mt-9 inline-flex max-w-[30ch] bg-gradient-to-r from-white to-pink-700 bg-[length:400px_200px] group-hover:text-purple-500">
				<span className={`name text-transparent`}>
					<span>i</span><span>am</span><span>a</span><span>sink</span>
				</span>

				{/* <span
				className={` select-none text-purple-800 group-hover:opacity-75 opacity-0 transition-opacity -translate-x-[73px] align-bottom`}
				style={{
					transition: "0.5s ease-in-out",
				}}
			>
				.
			</span> */}
			</div>
		</div>
	)
}

export default NameTitle

