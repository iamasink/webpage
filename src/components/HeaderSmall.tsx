import Link from "next/link"
import NameTitle from "@/components/NameTitle"
import Pfp from "@/components/Pfp"

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
	return (
		<header>
			<div className="flex">
				<Pfp size={100} tooltip={false}></Pfp>
				<div className="">
					<Link href="/">
						<NameTitle></NameTitle>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
