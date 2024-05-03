import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//👇 Import our second font
import { Open_Sans, Roboto_Mono } from "next/font/google";

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	//👇 Add variable to our object
	variable: "--font-opensans",
});

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});

export const metadata = {
	title: "iamasink",
	description: "iamasink homepage",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
