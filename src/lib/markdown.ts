import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkHtml from 'remark-html'
import remarkWikiLink from "remark-wiki-link"
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'

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
        const processedContent = await unified()
            .use(remarkParse) // Parse Markdown to syntax tree
            .use(remarkBreaks) // Support hard line breaks
            .use(remarkGfm) // GitHub Flavored Markdown
            .use(remarkFrontmatter) // Parse frontmatter
            .use(remarkWikiLink, {
                aliasDivider: '|',
                hrefTemplate: (permalink: string) => permalink,
            }) // WikiLink support
            //
            .use(remarkRehype) // Convert Markdown to HTML-compatible AST
            .use(rehypePrettyCode, {
                theme: "github-dark-dimmed",
                defaultLang: "plaintext",
                // transformers: [
                //     transformerCopyButton({
                //         visibility: 'hover',
                //         feedbackDuration: 3_000,
                //     }),
                // ],
            })
            .use(rehypeStringify) // Serialize HTML
            .process(contentWithLineBreaks)
        return processedContent.toString()
            .replace(`<h2 class="sr-only" id="footnote-label">Footnotes</h2>`, `<hr/>`)
    } catch (error) {
        console.error('Error reading file:', error)
        return null
    }
}


export function getAllMarkdownSlugs() {
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md')).filter(file => !file.includes("draft")).map((filename) => filename.replace(/\.md$/, ''))
}
