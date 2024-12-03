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
import rehypeVideo from 'rehype-video'
import { formatSlug } from './blog'
// import { getImageSize } from 'next/dist/server/image-optimizer'
import { promisify } from 'util'
import { imageSize } from 'image-size'




const contentDirectory = path.join(process.cwd(), 'content', 'blog')
const attachmentsDirectory = path.join(process.cwd(), 'content', 'blog', 'Attachments')

export async function getMarkdownContent(slug: string): Promise<string | null> {
    try {
        const filePath = path.join(contentDirectory, `${slug}.md`)
        if (!fs.existsSync(filePath)) {
            return null // Return null if the file doesn't exist
        }
        const fileContent = await fs.promises.readFile(filePath, 'utf8')

        // Replace image paths with the correct URL
        const updatedContent = fileContent.replace(/!\[\[(Attachments\/)?([^\]]+)\]\]/g, (match, p1, p2) => {
            console.log(`updating image ${match} - ${p1} - ${p2}`)
            const imagePath = path.join(attachmentsDirectory, p2)

            // If the image file exists, return the correct public URL
            if (!fs.existsSync(imagePath)) {
                console.log(`image ${imagePath} doesnt exist`)
                return match
            }
            if (imagePath.endsWith(".mp4")) {
                return `[Video. Click to view](/Attachments/${encodeURIComponent(p2)})`
            }
            return `![${p2}](/Attachments/${encodeURIComponent(p2)})`
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
            .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML-compatible AST
            .use(rehypePrettyCode, {
                theme: "github-dark-dimmed",
                defaultLang: "plaintext",
                transformers: [
                    transformerCopyButton({
                        visibility: 'hover',
                        feedbackDuration: 3_000,
                    }),
                ],
            })
            .use(rehypeVideo)
            .use(rehypeStringify, {
                allowDangerousHtml: true
            }) // Serialize HTML
            .process(contentWithLineBreaks)
        let newcontent = processedContent.toString()

        newcontent = newcontent
            .replace(`<h2 class="sr-only" id="footnote-label">Footnotes</h2>`, `<hr/><br/><h2 class="sr-only" id="footnote-label">Footnotes</h2>`)

        // process image tags for dimensions
        const imageTags = newcontent.match(/<img([^>]+)>/g) || []
        for (const tag of imageTags) {
            // console.log(`updating image ${tag}`)
            const srcMatch = tag.match(/src="([^"]+)"/)
            if (srcMatch && (!/width=/.test(tag) || !/height=/.test(tag))) {
                const src = decodeURIComponent(srcMatch[1])
                const { width, height } = await getImageDimensions(path.join(contentDirectory, src))
                const updatedTag = tag.replace(/<img([^>]+)>/, `<Image $1 width="${width}" height="${height}" />`)
                newcontent = newcontent.replace(tag, updatedTag)
            }
        }

        // console.log(newcontent)
        return newcontent

    } catch (error) {
        console.error('Error reading file:', error)
        return null
    }
}

async function getImageDimensions(imagePath: string): Promise<{ width: number, height: number }> {
    console.log(`getting dimensions for ${imagePath}`)

    // if (!fs.existsSync(imagePath)) return { width: 0, height: 0 }
    const res = await imageSize(imagePath)
    console.log(`image size ${imagePath} is ${res.width ? res.width : 0} x ${res.height ? res.height : 0}`)
    return { width: res.width || 0, height: res.height || 0 }
}


export function getAllMarkdownSlugs() {
    // return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md')).filter(file => !file.includes("draft")).map((filename) => filename.replace(/\.md$/, ''))
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md')).filter(file => !file.includes("draft")).map((filename) => formatSlug(filename))
}
