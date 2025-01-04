import Link from "next/link"
import Image from "next/image"

type Props = {
    link: string
    src: string
    alt: string
}

export function Button8831({
    link, src, alt
}: Props) {
    if (!alt) alt = link
    return (
        <Link href={link}><img style={{ imageRendering: "pixelated" }} width={88} height={31} title={alt} alt={alt} src={src} /></Link>
    )
}
