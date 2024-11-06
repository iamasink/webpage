import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content', 'blog')

// Function to get content for a specific slug
export async function getMarkdownContent(slug: string) {
    try {
        const filePath = path.join(contentDirectory, `${slug}.md`)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const processedContent = await remark().use(html).process(fileContent)
        return processedContent.toString()  // returns HTML
    } catch {
        return null
    }
}

// Function to get all slugs (for dynamic routing)
export function getAllMarkdownSlugs() {
    return fs.readdirSync(contentDirectory).map((filename) => filename.replace(/\.md$/, ''))
}
