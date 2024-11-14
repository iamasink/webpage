import Image from "next/image"
import Link from "next/link"

interface SocialLinkProps {
	href: string
	src: string
	alt: string
	newtab?: boolean
}

let target = ""
let rel = "noopener noreferrer"

const SocialLinkSmall: React.FC<SocialLinkProps> = ({ href, src, alt, newtab = false }) => {
	if (newtab) {
		target = "_blank"
		rel = "noopener noreferrer"
	}
	return (
		<Link
			href={href}
			className="group m-1 flex items-center justify-center rounded-lg border border-transparent px-4 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:px-5 lg:py-5"
			target={target}
			rel={rel}
		>
			<div className="flex aspect-square border-gray-100 p-1 transition-transform group-hover:-translate-y-1">
				<Image
					className="inline-block object-center align-middle"
					src={src}
					alt={alt}
					height={40}
					width={40}
					draggable={false}

				/>
			</div>
		</Link>
	)
}

export default SocialLinkSmall
