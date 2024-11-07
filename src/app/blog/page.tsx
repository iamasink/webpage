import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import { getAllMarkdownSlugs } from "@/lib/markdown"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"
import { Post } from "@/interfaces/post"

/*
old index text:
hi! welcome!! whats up!?
im not really one for writing, but apparently i have stuff to say after one too many twitter threads ( senseless ramblings), one of which i copied here at "[[The current state of YouTube subtitles]]"

this took me 4 attempts to setup and i dont even know what i wanna do with it
read more about the static site generator this uses, and some other thoughts i have about this place: [[Quartz]]

*/
export default async function Home() {
    const allPosts = await getSortedPostsData()

    return (
        <OuterPage>
            <div>
                <div>
                    {allPosts.map(({ slug, title, date }) => (
                        <div key={slug}>
                            <Link href={`/blog/${slug}`}>
                                <h2>{title}</h2>
                            </Link>
                            <p>{ }</p>
                        </div>
                    ))}
                </div>
            </div>
        </OuterPage>
    )
}