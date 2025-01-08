import React from "react"
import "./Marquee.css"

type Props = {
    children: React.ReactNode
}

export function Marquee({ children }: Props) {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {children}
            </div>
        </div>
    )
}
