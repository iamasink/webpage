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

    console.log(allPosts)

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
        // <div>
        //     <ul>
        //         {allPosts.map((post) => (
        //             <li key={post.slug}>{post.slug}</li>
        //         ))}
        //     </ul>
        // </div>

    )
}