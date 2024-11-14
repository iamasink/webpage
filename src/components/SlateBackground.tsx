import React from "react"
import Header from "./Header"

interface SlateBackgroundProps {
    children: React.ReactNode
}

const Tooltip: React.FC<SlateBackgroundProps> = ({ children }) => {
    return (
        <div className='w-screen max-w-[800px] border-rose-800 border-y-2 min-[800px]:border-2 min-[800px]:rounded-2xl bg-slate-800'>
            {children}
        </div>
    )
}

export default Tooltip
