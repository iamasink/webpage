"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const url = "https://lanyard.cnrad.dev/api/303267459824353280?showDisplayName=true&hideActivity=whenNotUsed&showDisplayName=true&theme=dark&bg=809ecf00&hideProfile=true&hideTimestamp=true&"

const DiscordStatus: React.FC = ({ }) => {
    async function reloadImg(url: string) {
        await fetch(url, { cache: 'reload', mode: 'no-cors' })
        const image: any = document.getElementById("discordstatus")
        image.src = url
    }
    if (typeof window !== 'undefined') {
        // client-side-only code

        setInterval(() => {
            // reloadImg(`https://https://lanyard.cnrad.dev/api/303267459824353280?showDisplayName=true&hideActivity=whenNotUsed&showDisplayName=true&theme=dark&bg=bg=809ecf00&hideProfile=true&hideTimestamp=false&${Date.now()}`)
            // console.log("Hello, world!")
            reloadImg(`${url + Date.now()}`)
        }, 15 * 1000)
    }
    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 3 }}
        >
            <div className="-mt-5 h-[110px] w-[410px]">
                <img suppressHydrationWarning id="discordstatus" draggable="false" src={url} alt="Discord Presence" ></img>
            </div>
        </motion.div>
    )
}

export default DiscordStatus