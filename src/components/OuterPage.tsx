import React from "react"
import Header from "./Header"
import HeaderSmall from "./HeaderSmall"

interface OuterPageProps {
    children: React.ReactNode
}

const Tooltip: React.FC<OuterPageProps> = ({ children }) => {
    return (
        <div className="flex-col flex min-h-screen">
            <HeaderSmall></HeaderSmall>
            <div className="flex-1">
                {children}
            </div>
            <footer>
                nya
            </footer>
        </div>
    )
}

export default Tooltip
