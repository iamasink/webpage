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
	const handleCopy = () => {
		setTooltip(copymessage)
		navigator.clipboard.writeText(text)

		setTimeout(() => {
			setTooltip(message)
		}, 2500)
	}

	return (
		<span
			role="button"
			tabIndex={0}
			aria-label={`${text}. Copy text`}
			onClick={handleCopy}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") handleCopy()
			}}
			style={{ cursor: "pointer" }}
		>
			<Tooltip message={tooltip}>{text}</Tooltip>
		</span>
	)
}

export default CopyableText
