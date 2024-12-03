import { Post } from "@/interfaces/post"
import fs, { existsSync } from "fs"
import matter from "gray-matter"
import path, { join } from "path"

const postsDirectory = join(process.cwd(), "content/blog")

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "")
    // const realSlug = formatSlug(slug)
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    if (existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)
        // console.log(data)

        return { ...data, slug: realSlug, content } as Post
    } else {
        return null
    }
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is Post => post !== null) // type guard filter
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}


export function formatSlug(slug: string) {
    return slug.replace(/\.md$/, '')
    // return slug.replace(/\.md$/, '').replace(/(^\d{4}-\d{2}-\d{2})(-\d{1,2})?_\s*(.*)/g, (match, p1, p2, p3) => {
    //     return `${p1}_${p3}`
    // })
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith(".md")).filter(file => !file.includes("draft"))
    const allPostsData = fileNames.map((fileName) => {
        const slug = formatSlug(fileName)

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