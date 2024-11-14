"use client"

import { useState } from "react"
import Image from "next/image"
import Tooltip from "./Tooltip"

interface CopyableTextProps {
	text: string
	message?: string
	copymessage?: string
}

const CopyableText: React.FC<CopyableTextProps> = ({
	text,
	message = "Click to copy!",
	copymessage = "Copied!",
}) => {
	const [tooltip, setTooltip] = useState(message)

	return (
		<span
			onClick={() => {
				setTooltip(copymessage)
				navigator.clipboard.writeText(text)

				setTimeout(() => {
					setTooltip(message)
				}, 2500)
			}}
		>
			<Tooltip message={tooltip}>{text}</Tooltip>
		</span>
	)
}

export default CopyableText
