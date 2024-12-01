import Link from "next/link"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"
import SlateBackground from "@/components/SlateBackground"



export default async function Home() {
    const allPosts = getSortedPostsData()

    return (
        <OuterPage>
            <div className='flex justify-center'>
                <SlateBackground>
                    <div className=''>
                        <h1 className=" text-4xl">Blog</h1>
                        <p className="">if something is really broken, visit the <Link className="text-rose-800 underline" href="https://q.iamas.ink/">old blog</Link>.</p>
                        <div className="py-4 -mx-2 min-[800px]:-mx-10"> {/* Negative margin to offset padding */}
                            <hr className="border-rose-800" />
                        </div>
                        <ul className="">
                            {allPosts.map(({ slug, title, date }) => (
                                // each link:
                                <li className="my-1" key={slug}>
                                    <Link href={`/blog/${slug}`}>
                                        <h2><span className="font-mono">{date.toISOString().split("T")[0]}</span> - {title}</h2>
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