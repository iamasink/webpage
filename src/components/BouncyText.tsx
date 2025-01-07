"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import "./BouncyText.css"

interface Props {
    children: ReactNode,
    hoverOnly?: boolean
}

const BouncyText: React.FC<Props> = ({ children, hoverOnly = false }) => {
    const [letters, setLetters] = useState<string[]>([])
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const timeoutId = useRef<NodeJS.Timeout | null>(null)
    const firstHoverTime = useRef<number | null>(null)

    useEffect(() => {
        if (typeof children === 'string') {
            setLetters(children.split(""))
        }
    }, [children])

    const handleMouseEnter = () => {
        if (!firstHoverTime.current) {
            firstHoverTime.current = Date.now()
        }
        setIsHovered(true)
        const elapsedTime = Date.now() - (firstHoverTime.current || 0)
        const remainingTime = Math.max(0, 2000 + (letters.length) * 100 - elapsedTime)
        timeoutId.current = setTimeout(() => {
            setIsHovered(false)
            firstHoverTime.current = null
        }, remainingTime)
    }

    const handleMouseLeave = () => {
    }

    return (
        <span
            className={`bouncy-text ${hoverOnly ? "hover-only slight-bounce" : "slight-bounce"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={typeof children === 'string' ? children : undefined}
        >
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`bouncy-letter ${isHovered ? "hovered" : ""}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-hidden="true"
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </span>
    )
}

export default BouncyText
