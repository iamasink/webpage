import Link from "next/link"
import NameTitle from "@/components/NameTitle"
import Pfp from "@/components/Pfp"

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
	return (
		<div className="grid text-center mb-0 ">
			<div className="items-top p-x-10 flex text-left">
				<Pfp></Pfp>
				<div className="">
					<Link href="/">
						<NameTitle></NameTitle>
					</Link>
					<p className="m-0 pt-9 text-2xl ">
						<span className="text-pink-500 transition-all hover:bg-pink-500 hover:text-pink-100">
							&lt;3
						</span>
					</p>
					<p className="m-0 flex-wrap pt-1  text-2xl"></p>
				</div>
			</div>
		</div>
	)
}

export default Header
