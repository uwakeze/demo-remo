import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tvetcollege.co.za - SA Update Portal",
  description:
    "Your SA Updates Portal",
  keywords:
    "Educational News, Scholarships News, Jobs and other updates",
  robots: "index, follow",
  authors: [{ name: "Admin" }],
  creator: "Admin",
  publisher: "Admin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tvetcollege.co.za",
    siteName: "tvetcollege.co.za",
    description:
      "Your SA Updates Portal",
    title: "tvetcollege.co.za - SA Update portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "tvetcollege.co.za - Your SA Updates Portal",
    description:
      "Your SA Updates Portal",
    creator: "@tvetcollege.co.za",
  },
  verification: {
    // Correct: Only the code, not the full meta tag
    google: "8JjDao-XULuWNyQ_Mac1p4_1MIX8TWYfB-G8EueCsO8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="8JjDao-XULuWNyQ_Mac1p4_1MIX8TWYfB-G8EueCsO8"
        />

        {/* Google Analytics (replace with your real GA4 ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7HXR3PVB65"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7HXR3PVB65');
            `,
          }}
        />

        {/*  Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-2183255852183516"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
