import Header from '@/components/Header'
import MarkdownText from '@/components/MarkdownText'
import OuterPage from '@/components/OuterPage'
import { getMarkdownContent, getAllMarkdownSlugs } from '@/lib/markdown'
import { Metadata } from 'next'
import Head from 'next/head'
import { notFound } from 'next/navigation'

// statically generate pages at build time
export async function generateStaticParams() {
    const slugs = getAllMarkdownSlugs()
    return slugs.map((slug) => ({ slug }))  // Dynamically generates paths
}

// Set metadata for posts, e.g., title
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return { title: `Blog - ${params.slug.replace('-', ' ')}` }  // Customize title based on slug
}

// Page component for rendering the Markdown content
export default async function BlogPostPage({ params }: { params: { slug: string } }) {


    return (
        <OuterPage>
            <MarkdownText text={`${params.slug}`}></MarkdownText>
        </OuterPage>
    )
}