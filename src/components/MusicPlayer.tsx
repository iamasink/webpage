"use client"

import { useRef, useState, useEffect } from "react"
import BouncyText from "@/components/BouncyText"
import { Marquee } from "@/components/Marquee"
import "./MusicPlayer.css"

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const sliderRef = useRef<HTMLInputElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [volume, setVolume] = useState<number>(1)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [isHovered, setIsHovered] = useState<boolean>(false)

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
            setVolume(audioElement.volume)
        }

        audioElement?.play().catch(() => {
            setIsPlaying(false)
        })

        const sliderElement = sliderRef.current

        const handleVolumeScroll = (event: WheelEvent) => {
            event.preventDefault()
            if (!audioElement) return
            let newVolume = volume + (event.deltaY < 0 ? 0.05 : -0.05)
            newVolume = Math.max(0, Math.min(1, newVolume))  // Clamp volume between 0 and 1
            setVolume(newVolume)
            audioElement.volume = newVolume
        }

        sliderElement?.addEventListener("wheel", handleVolumeScroll, { passive: false })

        return () => {
            if (audioElement) {
                audioElement.removeEventListener("ended", handleEnded)
            }
            sliderElement?.removeEventListener("wheel", handleVolumeScroll)
        }
    }, [volume])

    return (
        <div className="music-player flex">
            <audio ref={audioRef} src="/assets/music/jam2go_the_eternal_september.mp3" autoPlay className=""></audio>
            <button onClick={handlePlayPause} className="textlink" aria-label="play/pause">
                {isPlaying ? "⏸️" : "▶️"}
            </button>

            <div className="volume-slider bg-gray-200 rounded-lg p-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <input ref={sliderRef}
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    onChange={event => {
                        const newVolume = event.target.valueAsNumber
                        setVolume(newVolume)
                        if (audioRef.current) {
                            audioRef.current.volume = newVolume
                        }
                    }}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                />
            </div>
        </div>
    )
}
