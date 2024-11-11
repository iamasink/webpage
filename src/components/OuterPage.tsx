import React from "react"
import Header from "./Header"

interface OuterPageProps {
    children: React.ReactNode
}

const Tooltip: React.FC<OuterPageProps> = ({ children }) => {
    return (
        <div className="">
            <Header></Header>
            <div className="mx-6">
                {children}
            </div>
            <footer>
                meow ・ nya
            </footer>
        </div>
    )
}

export default Tooltip
