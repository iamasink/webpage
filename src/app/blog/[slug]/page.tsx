import { getMarkdownContent, getAllMarkdownSlugs } from '@/lib/markdown'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Generate static params at build time (fetch all slugs from content folder)
export async function generateStaticParams() {
    const slugs = getAllMarkdownSlugs()
    return slugs.map((slug) => ({ slug }))  // Dynamically generates paths
}

// Optional: Set metadata for each post, e.g., title
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return { title: `Blog - ${params.slug.replace('-', ' ')}` }  // Customize title based on slug
}

// Page component for rendering the Markdown content
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    // Fetch the content for the slug
    const content = await getMarkdownContent(params.slug)

    // If no content is found, throw a 404 error
    if (!content) {
        notFound()  // This will trigger the default 404 page
    }

    return (
        <main>
            <article dangerouslySetInnerHTML={{ __html: content }} />
        </main>
    )
}