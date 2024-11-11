import Link from "next/link"
import OuterPage from "@/components/OuterPage"
import { getSortedPostsData } from "@/lib/blog"



export default async function Home() {
    const allPosts = getSortedPostsData()
    // const allPosts = [
    //     {
    //         slug: '2024-04-24-title',
    //         title: 'title',
    //         draft: false,
    //         aliases: ['aaaaa'],
    //         tags: [],
    //         description: 'abcdef',
    //         date: Date.parse("2024-04-24")
    //     }
    // ]

    // console.log(allPosts)

    return (
        // <OuterPage>
        //     <div className='flex justify-center '>
        //         <div className='border-rose-800 border-2 rounded-2xl bg-slate-800' style={{ minWidth: "1000px", maxWidth: "1000px" }}>


        //             <ul>
        //                 {allPosts.map(({ slug, title, date }) => (
        //                     // each link:
        //                     <li key={slug}>
        //                         <Link href={`/blog/${slug}`}>
        //                             <h2>{title}</h2>
        //                         </Link>
        //                         <p>{ }</p>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>
        // </OuterPage>
        <OuterPage>
            <div className='flex justify-center'>
                <div className='border-rose-800 border-2 rounded-2xl bg-slate-800 ' style={{ width: "75%" }}>
                    <div className=''>
                        <h1 className="py-4 px-10  m-0 text-4xl">Blog</h1>
                        <hr className=" border-rose-800" />

                        <ul className="px-10">
                            {allPosts.map(({ slug, title, date }) => (
                                // each link:
                                <li key={slug}>
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