"use client";
import Link from "next/link";

const DiscordStatus: React.FC = ({ }) => {

    async function reloadImg(url: string) {
        await fetch(url, { cache: 'reload', mode: 'no-cors' })
        const image: any = document.getElementById("discordstatus")
        image.src = url
    }
    if (typeof window !== 'undefined') {
        // client-side-only code
        setInterval(() => {
            reloadImg(`https://lanyard.cnrad.dev/api/303267459824353280?showDisplayName=true&hideActivity=whenNotUsed&showDisplayName=true&theme=dark&bg=bg=809ecf00&hideProfile=true&hideTimestamp=false&${Date.now()}`)
            // console.log("Hello, world!")
        }, 15 * 1000)
    }
    return (
        <img id="discordstatus" draggable="false" src={`https://lanyard.cnrad.dev/api/303267459824353280?showDisplayName=true&hideActivity=whenNotUsed&showDisplayName=true&theme=dark&bg=bg=809ecf00&hideProfile=true&hideTimestamp=false&${Date.now()}`} alt="Discord Presence" ></img>
    );
};

export default DiscordStatus;
