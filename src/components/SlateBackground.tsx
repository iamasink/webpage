import React from "react"
import Header from "./Header"

interface SlateBackgroundProps {
    children: React.ReactNode
}

const Tooltip: React.FC<SlateBackgroundProps> = ({ children }) => {
    return (
        <div className='pt-4 px-2 min-[800px]:px-10 w-screen max-w-[800px] border-rose-800 border-y-2 min-[800px]:border-2 min-[800px]:rounded-2xl bg-emerald-950 bg-opacity-50'>
            {children}
        </div>
    )
}

export default Tooltip
