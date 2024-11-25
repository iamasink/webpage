import Image from "next/image"
import Link from "next/link"

interface SocialLinkProps {
	href: string
	src: string
	alt: string
	text: string
	newtab?: boolean
}



const SocialLink: React.FC<SocialLinkProps> = ({
	href,
	src,
	alt,
	text,
	newtab = false,
}) => {
	let target = ""
	let rel = ""
	if (newtab === true) {
		target = "_blank"
		rel = "noopener noreferrer"
	}
	return (
		<Link
			href={href}
			className="group m-1 flex rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:px-5 lg:py-5"
			target={target}
			rel={rel}
		>
			<div className="flex h-full px-2 ">
				<div className="flex aspect-square items-center border-gray-100 p-1 align-middle transition-transform group-hover:translate-x-3">
					<Image
						className="inline-block object-center align-middle"
						src={src}
						alt=""
						height={40}
						width={40}
						draggable={false}
					/>
				</div>
				<div className="flex items-center border-gray-100 pl-1 pr-4 align-middle transition-transform group-hover:translate-x-1">
					{" "}
					<h2 className=" py-1 translate-x-3 bg-white bg-clip-text px-3 text-3xl font-semibold text-transparent text-opacity-100 transition-all duration-500 group-hover:translate-x-3 group-hover:bg-pink-200 lg:text-4xl">
						{text}
					</h2>
				</div>
			</div>
		</Link>
	)
}

export default SocialLink
