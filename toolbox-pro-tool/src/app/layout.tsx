import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ToolBox Pro - Free Digital Tools for Content Creators",
	description:
		"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
	keywords:
		"digital tools, content creation, keyword suggestion, word count, online tools",
	robots: "index, follow",
	authors: [{ name: "ToolBox Pro" }],
	creator: "ToolBox Pro",
	publisher: "ToolBox Pro",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://toolboxpro.com",
		siteName: "ToolBox Pro",
		description:
			"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
		title: "ToolBox Pro - Free Digital Tools for Content Creators",
	},
	twitter: {
		card: "summary_large_image",
		title: "ToolBox Pro - Free Digital Tools for Content Creators",
		description:
			"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
		creator: "@toolboxpro",
	},
	verification: {
		google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Google Search Console */}
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SEARCH_CONSOLE_CODE'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=YOUR_ANALYTICS_ID'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'YOUR_ANALYTICS_ID');
					`,
					}}
				/>
				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_ID'
					crossOrigin='anonymous'></script>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
