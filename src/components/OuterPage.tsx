import React from "react"
import Header from "./Header"

interface OuterPageProps {
    children: React.ReactNode
}

const Tooltip: React.FC<OuterPageProps> = ({ children }) => {
    return (
        <div className="min-h-screen ">
            <Header></Header>
            <div className="">
                {children}
            </div>
            <footer>
                meow ・ nya
            </footer>
        </div>
    )
}

export default Tooltip
