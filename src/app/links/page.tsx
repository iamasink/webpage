import React from "react"
import Link from "next/link"
import redirects from "@/../redirects2.json"

function formatPath(path: string) {
  return path
    .replace("https://", "")
    .split("/")
    .filter((segment) => !segment.startsWith(":") && segment !== "")
    .join("/")
    .replace(/^/, "/")
}

function formatURL(path: string) {
	return path
		.replace("https://", "")
		.split("/")
		.filter((segment) => !segment.startsWith(":") && segment !== "")
		.join("/")
		.replace(/^/, "/")
}

export default function Home() {
  const seen = new Set<string>()
  const uniqueRedirects = redirects.filter(({ destination }) => {
    const pretty = formatPath(destination)
    if (seen.has(pretty)) return false
    seen.add(pretty)
    return true
  })

  const listedLinks = uniqueRedirects.filter(({ listed }) => listed)

  return (
    <div>
      <title>elsewhere..</title>
      <main className="flex min-h-screen flex-col items-center pt-24">
        <div className="mx-7 py-3 pt-5 centered-main">
          <h1 className="text-3xl font-bold mb-5">links</h1>
          <ul className="space-y-2">
            {listedLinks.map(({ source, destination, name }) => (
              <li key={source}>
                <Link href={`https://${formatURL(destination)}`} className="textlink">
                  {name || destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

// ensure this isn't tried to be generated dynamically.
export const dynamic = 'force-static'
