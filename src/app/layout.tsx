import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
const inter = Inter({ subsets: ["latin"] })

//👇 Import our second font
import { Open_Sans, Roboto_Mono } from "next/font/google"

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	//👇 Add variable to our object
	variable: "--font-opensans",
})

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
})

export const metadata = {
	title: "iamasink",
	description: "lillie's site",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#7f0086" />
				<meta name="darkreader-lock" />
			</head>
			<body className={inter.className}>{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
