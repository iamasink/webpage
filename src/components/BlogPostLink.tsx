import Link from "next/link"

type Props = {
    title: String
    date: string
    slug: string
}

export function HeroPost({
    title,
    date,
    slug,
}: Props) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        <Link href={`/posts/${slug}`} className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        {/* <DateFormatter dateString={date} /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
