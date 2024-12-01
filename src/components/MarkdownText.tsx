// import { getMarkdownContent } from "@/lib/markdown"

import { getPostBySlug } from "@/lib/blog"
import { getMarkdownContent } from "@/lib/markdown"
import { notFound } from "next/navigation"


interface MarkdownTextProps {
    slug: string
}

const MarkdownText: React.FC<MarkdownTextProps> = async ({
    slug,
}) => {
    const content = await getMarkdownContent(slug)
    const post = getPostBySlug(slug)
    const date = post.date
    const title = post.title
    const a = post.description

    // If no content is found, throw a 404 error
    if (!content) {
        notFound()  // This will trigger the default 404 page
    }

    return (
        <div>
            <h1 className="  text-4xl">{title}</h1>
            <h2 className="  text-2xl">{date.toISOString().split("T")[0]}</h2>
            <h3 className=" "> {a}            </h3>
            <div className="pt-4 -mx-2 min-[800px]:-mx-10"> {/* Negative margin to offset padding */}
                <hr className="border-rose-800" />
            </div>
            <article className=" font-normal " dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default MarkdownText
