import Link from "next/link"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"



export default async function Home() {
    const allPosts = getSortedPostsData()

    return (
        <OuterPage>
            <div className='flex justify-center'>
                <div className='border-rose-800 border-2 rounded-2xl bg-slate-800 ' style={{ width: "75%" }}>
                    <div className=''>
                        <h1 className="py-4 px-10  m-0 text-4xl">Blog</h1>
                        <p className="py-4 px-10">if something is really broken, visit the <Link className="text-rose-800 underline" href="https://q.iamas.ink/">old blog</Link>.</p>
                        <hr className=" border-rose-800" />

                        <ul className="px-10 py-4">
                            {allPosts.map(({ slug, title, date }) => (
                                // each link:
                                <li className="my-1" key={slug}>
                                    <Link href={`/blog/${slug}`}>
                                        <h2>{title}</h2>
                                    </Link>
                                    <p>{ }</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </OuterPage >
    )
}