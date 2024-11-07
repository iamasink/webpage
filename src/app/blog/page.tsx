import Image from "next/image"

import Head from "next/head"
import Link from "next/link"
import Header from "@/components/Header"
import { getAllMarkdownSlugs } from "@/lib/markdown"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"
import { Post } from "@/interfaces/post"

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