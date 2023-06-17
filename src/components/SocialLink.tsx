import Image from "next/image";

interface SocialLinkProps {
	href: string;
	src: string;
	alt: string;
	text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt, text }) => {
	return (
		<a
			href={href}
			className="group m-1 flex rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:px-5 lg:py-5"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="flex aspect-square items-center border-gray-100 p-1 align-middle transition-transform group-hover:translate-x-1">
				<Image
					className="inline-block object-center align-middle"
					src={src}
					alt={alt}
					height={60}
					width={60}
				/>
			</div>
			<div className="flex items-center border-gray-100 p-1 align-middle transition-transform group-hover:translate-x-1">
				{" "}
				<h2 className=" translate-x-1 text-3xl font-semibold transition-transform group-hover:translate-x-3 lg:text-5xl">
					{text}
				</h2>
			</div>

			<p className="m-0 max-w-[30ch] text-sm opacity-50"></p>
		</a>
	);
};

export default SocialLink;
