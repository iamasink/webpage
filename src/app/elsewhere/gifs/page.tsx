import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import BouncyText from "@/components/BouncyText"


export default function Home() {
    return (
        <div>
            <title>elsewhere..</title>
            <main className="flex min-h-screen flex-col items-center pt-24">
                <div className="mx-7 py-3 pt-5 centered-main w-1/2">
                    <BouncyText>heres some gifs :)</BouncyText>
                    <br />
                    <Link className="textlink" href="/elsewhere"> go back</Link>
                    <br />
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s1.gif" width={138 * 2} height={101 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s2.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>

                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s3.gif" width={92 * 2} height={50 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s4.gif" width={139 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s5.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s6.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>

                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s7.gif" width={92 * 2} height={50 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                            <div>
                                <img className="m-1" src="/assets/images/mindwave/spr_popup_s8.gif" width={92 * 2} height={154 * 2} style={{ imageRendering: "pixelated" }}></img>

                            </div>
                        </div> */}


                    <h3>gifs from <a className="textlink" href="https://holohammer.com/mindwave/">mindwave</a> &lt;3</h3>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s1.gif" width={138 * 2} height={101 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s2.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s3.gif" width={92 * 2} height={50 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s4.gif" width={139 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s5.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s6.gif" width={92 * 2} height={102 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s7.gif" width={92 * 2} height={50 * 2} style={{ imageRendering: "pixelated" }}></img>
                    <img className="m-1" src="/assets/images/mindwave/spr_popup_s8.gif" width={92 * 2} height={154 * 2} style={{ imageRendering: "pixelated" }}></img>

                    <p>meow</p>
                </div>
            </main >
        </div >
    )
}
