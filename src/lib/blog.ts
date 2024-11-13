import { Post } from "@/interfaces/post"
import fs from "fs"
import matter from "gray-matter"
import path, { join } from "path"

const postsDirectory = join(process.cwd(), "content/blog")

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return { ...data, slug: realSlug, content } as Post
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith(".md")).filter(file => !file.includes("draft"))
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')

        // read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // parse the post metadata section
        const matterResult = matter(fileContents)
        const matterData = matterResult.data

        // combine data and slug
        return {
            slug,
            ...matterData,
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => ((b as any).date - (a as any).date)) as Post[]
}