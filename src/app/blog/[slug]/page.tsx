import Header from '@/components/Header'
import MarkdownText from '@/components/MarkdownText'
import OuterPage from '@/components/OuterPage'
import { getMarkdownContent, getAllMarkdownSlugs } from '@/lib/markdown'
import { Metadata } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// statically generate pages at build time
export async function generateStaticParams() {
    const slugs = getAllMarkdownSlugs()
    return slugs.map((slug) => ({ slug }))  // Dynamically generates paths
}

// Set metadata for posts, e.g., title
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params
    return { title: `Blog - ${params.slug.replace('-', ' ')}` }  // Customize title based on slug
}


// Page component for rendering the Markdown content
export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params


    return (
        <OuterPage>
            <div className='flex justify-center'>
                <div className='border-rose-800 border-2 rounded-2xl bg-slate-800 ' style={{ width: "75%" }}>
                    <div className='pt-4 '>
                        <Link className="px-10 m-0 text-rose-600" href="/blog">← Go Back</Link>
                        <MarkdownText slug={`${params.slug}`}></MarkdownText>
                    </div>
                </div>
            </div>
        </OuterPage>
    )
}

// ensure this isn't tried to be generated when running, if the url doesnt exist then it will redirect to 404 instead of error :D
export const dynamic = 'force-static'
export const dynamicParams = false