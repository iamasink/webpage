"use client"

import { useState } from "react"
import Image from "next/image"
import Tooltip from "./Tooltip"

interface CopyableProps {
	text: string
	children: React.ReactNode
	message?: string
	copymessage?: string
}

const Copyable: React.FC<CopyableProps> = ({
	text,
	children,
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
			aria-label="Copy text"
			onClick={handleCopy}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") handleCopy()
			}}
			style={{ cursor: "pointer" }}
		>
			<Tooltip message={tooltip}>{children}</Tooltip>
		</span>
	)
}

export default Copyable
