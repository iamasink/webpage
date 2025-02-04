import Link from "next/link"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"
import SlateBackground from "@/components/SlateBackground"
import type { Metadata } from 'next'
import generateRssFeed from "@/lib/rss"


export const metadata: Metadata = {
    title: 'iamasink - blog',
    description: "all posts on sink's blog",

}


export default async function Home() {
    const allPosts = getSortedPostsData()
    await generateRssFeed(allPosts)


    return (
        <OuterPage>
            <div className='flex justify-center'>
                <SlateBackground>
                    <div className=''>
                        <h1 className=" text-4xl">Blog</h1>
                        {/* <p className="">if something is really broken, visit the <Link className="text-rose-800 underline" href="https://q.iamas.ink/">old blog</Link>.</p> */}
                        <div className="py-4 -mx-2 min-[800px]:-mx-10"> {/* Negative margin to offset padding */}
                            <hr className="border-rose-800" />
                        </div>
                        <ul className="">
                            {allPosts.map(({ slug, title, date, description
                            }) => (
                                // each link:
                                <li className="my-2" key={slug}>
                                    <Link href={`/blog/${slug}`}>
                                        <h2><span className="font-mono">{date.toISOString().split("T")[0]}</span> - {title}</h2>
                                        <p className="ml-[6.5rem] text-gray-100 font-thin">{description}</p>
                                    </Link>
                                    <p>{ }</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </SlateBackground>
            </div>
        </OuterPage>
    )
}

// ensure this isn't tried to be generated dynamically.
export const dynamic = 'force-static'

/*
https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
    true (default): Dynamic segments not included in generateStaticParams are generated on demand.
    false: Dynamic segments not included in generateStaticParams will return a 404.
*/
export const dynamicParams = true