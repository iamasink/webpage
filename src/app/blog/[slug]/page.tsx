import MarkdownText from '@/components/MarkdownText'
import OuterPage from '@/components/OuterPage'
import SlateBackground from '@/components/SlateBackground'
import { getPostBySlug } from '@/lib/blog'
import { getMarkdownContent, getAllMarkdownSlugs } from '@/lib/markdown'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

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

    if (!data) return {}
    // fetch title from the frontmatter
    const title = data.title
    const description = data.description ? data.description : "Lily's blog page: " + title
    let pagekeywords = ['iamasink', 'blog', 'blog post']
    pagekeywords = pagekeywords.concat(data.tags)

    return {
        title: `${title}`, description: `${description}`,
        referrer: 'origin-when-cross-origin',
        keywords: pagekeywords,
        authors: [{ name: "Lily" }],
        creator: 'iamasink',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        openGraph: {
            title: `${title}`,
            description: `${description}`,
            url: `https://iamasink.com/blog/${slug}`,
            siteName: 'iamasink',
            type: 'article',
        },
        twitter: {
            card: 'summary',
            title: `${title}`,
            description: `${description}`,
            creator: 'iamasink',
        },
    }
}

// Page component for rendering the Markdown content
export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params
    const slug = params.slug

    // Fetch all slugs only if needed
    const allSlugs = getAllMarkdownSlugs()

    // Check if the current slug matches any existing slug directly
    const existingPost = getPostBySlug(slug)

    // If there's an existing post for the slug, render it directly
    if (existingPost) {
        return (
            <OuterPage>
                <div className='flex justify-center break-words'>
                    <SlateBackground>
                        <div>
                            <Link className="m-0 text-rose-600" href="/blog">← Go Back</Link>
                            <div>
                                <MarkdownText slug={slug}></MarkdownText>
                            </div>
                        </div>
                    </SlateBackground>
                </div>
            </OuterPage>
        )
    }

    // If no direct match exists, attempt to find a similar slug

    const formattedslug = sanitize(slug)
    console.log(formattedslug)
    const matchingSlugs = allSlugs.filter(s => s.endsWith(`_${formattedslug}`))
    console.log(matchingSlugs)

    if (matchingSlugs.length) {
        console.log(matchingSlugs)
        // redirect to the oldest if there are multiple
        const redirectSlug = matchingSlugs[matchingSlugs.length - 1]
        redirect(`/blog/${redirectSlug}`)
    }


    // If no match is found, return a 404 page
    notFound()
}

// ensure this isn't tried to be generated dynamically.
export const dynamic = 'force-static'

/*
https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
    true (default): Dynamic segments not included in generateStaticParams are generated on demand.
    false: Dynamic segments not included in generateStaticParams will return a 404.
*/
export const dynamicParams = true


const sanitize = (filename: string) => {
    return filename
        .toLowerCase()
        // i love regex
        .replace(/\-\-\-/g, "-")
        .replace(/\-and\-/g, "and")
        .replace(/\%20/g, " ")
        .replace(/^\d{4}[- ]\d{2}[- ]\d{2}([- ]\d{1,2})?([-_]|\s\-\s| )\s*/, '') // remove dates
        .replace(/\s\-\s/g, "-")    // replace hyphens surrounded with spaces correctly
        .replace(/\s+/g, "-")       // replace spaces with hyphens
        .replace(/\&/g, "and")      // replace &
        .replace(/@/g, "at")        // replace @
        .replace(/#/g, "no ")       // replace #
        .replace(/\+/g, "plus")     // replace +
        .replace(/%/g, "percent")   // replace %
        .replace(/["<>|?*]/g, "")   // remove bad characters
        .replace(/[\/\\:]/g, "-")   // replace / \  : with hyphens
        .replace(/[^\w-]/g, "")     // remove non-alphanumeric characters except hyphens
}
