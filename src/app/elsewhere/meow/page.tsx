import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import MusicPlayer from "@/components/MusicPlayer"
import BouncyText from "@/components/BouncyText"
import { Marquee } from "@/components/Marquee"

export default function Home() {
    return (
        <div>
            <title>kitty cat cat</title>
            <main className="flex min-h-screen flex-col items-center pt-24">
                <div className="mx-7 py-3 pt-5 centered-main">
                    <div className="flex align-middle mb-2">
                        <MusicPlayer />
                        <Marquee>
                            <BouncyText>Meow Playing: Jam2go - The Eternal September</BouncyText>
                        </Marquee>
                    </div>
                    <Link href="https://kittenburst.com" className="textlink">
                        <img className="self-center" src="/assets/images/kb/HapiDetermined.png" width={400} height={400}></img>
                    </Link>
                    <p className="mt-1">check out this cat</p>
                    <p>:3</p>
                    <br />
                    <Link className="textlink" href="/elsewhere"> go back</Link>
                </div>
            </main>
        </div>
    )
}
