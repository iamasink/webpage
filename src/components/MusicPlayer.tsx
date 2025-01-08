"use client"

import { useRef, useState, useEffect } from "react"
import BouncyText from "@/components/BouncyText"
import { Marquee } from "@/components/Marquee"

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    useEffect(() => {
        const handleEnded = () => {
            setIsPlaying(false)
        }

        const audioElement = audioRef.current
        if (audioElement) {
            audioElement.addEventListener("ended", handleEnded)
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener("ended", handleEnded)
            }
        }
    }, [])

    return (
        <div className="">
            <audio ref={audioRef} src="/assets/music/jam2go_the_eternal_september.mp3" autoPlay className=""></audio>
            <button onClick={handlePlayPause} className="textlink" aria-label="play/pause">
                {isPlaying ? "⏸️" : "▶️"}
            </button>
        </div>
    )
}
