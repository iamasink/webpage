// import { getMarkdownContent } from "@/lib/markdown"

import { getMarkdownContent } from "@/lib/markdown"
import { notFound } from "next/navigation"


interface MarkdownTextProps {
    text: string
}

const MarkdownText: React.FC<MarkdownTextProps> = async ({
    text,
}) => {
    const content = await getMarkdownContent(text)


    // If no content is found, throw a 404 error
    if (!content) {
        notFound()  // This will trigger the default 404 page
    }

    return (
        <article className="px-10 m-0 flex-auto max-w-fit" dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default MarkdownText
