import MarkdownText from '@/components/MarkdownText'
import OuterPage from '@/components/OuterPage'
import SlateBackground from '@/components/SlateBackground'
import { getPostBySlug } from '@/lib/blog'
import { getMarkdownContent, getAllMarkdownSlugs } from '@/lib/markdown'
import { Metadata } from 'next'
import Link from 'next/link'

// statically generate pages at build time
export async function generateStaticParams() {
    const slugs = getAllMarkdownSlugs()
    return slugs.map((slug) => ({ slug }))  // Dynamically generates paths
}

// Set metadata for posts, e.g., title
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params
    const slug = params.slug

    const data = getPostBySlug(slug)

    // fetch title from the frontmatter
    const title = data.title

    return { title: `Blog - ${title}` }  // Customize title 
}


// Page component for rendering the Markdown content
export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params
    return (
        <OuterPage>
            <div className='flex justify-center'>
                <SlateBackground>
                    <div className='mt-4 mx-10' >
                        <Link className="m-0 text-rose-600" href="/blog">← Go Back</Link>
                        <div className=''>
                            <MarkdownText slug={`${params.slug}`}></MarkdownText>
                        </div>
                    </div>
                </SlateBackground>
            </div>
        </OuterPage>
    )
}

// ensure this isn't tried to be generated when running, if the url doesnt exist then it will redirect to 404 instead of error :D
export const dynamic = 'force-static'
export const dynamicParams = false