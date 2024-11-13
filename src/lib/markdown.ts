import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkHtml from 'remark-html'
import remarkWikilinks from "remark-wiki-link"

const contentDirectory = path.join(process.cwd(), 'content', 'blog')
const attachmentsDirectory = path.join(process.cwd(), 'content', 'blog', 'Attachments')

export async function getMarkdownContent(slug: string): Promise<string | null> {
    try {
        const filePath = path.join(contentDirectory, `${slug}.md`)
        if (!fs.existsSync(filePath)) {
            return null // Return null if the file doesn't exist
        }
        const fileContent = fs.readFileSync(filePath, 'utf8')

        // Replace image paths with the correct URL
        const updatedContent = fileContent.replace(/!\[\[([^\]]+)\]\]/g, (match, p1) => {
            const imagePath = path.join(attachmentsDirectory, p1)

            // If the image file exists, return the correct public URL
            if (fs.existsSync(imagePath)) {
                return `![${p1}](/Attachments/${encodeURIComponent(p1)})`
            }
            return match
        })

        // fix linebraks
        const contentWithLineBreaks = updatedContent
            .split('\n')
            .map(line => line + '')
            .join('\n') // Rejoin the lines with newlines

        // console.log(updatedContent)

        // Process the Markdown content to HTML
        const processedContent = await remark()
            .use(remarkBreaks)
            .use(remarkGfm)
            .use(remarkFrontmatter)
            .use(remarkWikilinks)
            .use(remarkHtml, { sanitize: false })
            .process(contentWithLineBreaks)
        return processedContent.toString()
    } catch (error) {
        console.error('Error reading file:', error)
        return null
    }
}


export function getAllMarkdownSlugs() {
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md')).filter(file => !file.includes("draft")).map((filename) => filename.replace(/\.md$/, ''))
}
