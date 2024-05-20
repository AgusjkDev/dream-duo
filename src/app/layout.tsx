import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Providers from "@/components/providers";
import { siteConfig } from "@/config";

import "@/styles/globals.css";

export function generateMetadata(): Metadata {
    return {
        title: siteConfig.name,
        description: siteConfig.description,
        keywords: siteConfig.keywords,
        applicationName: siteConfig.name,
        publisher: siteConfig.name,
        creator: siteConfig.author,
        authors: { name: siteConfig.author },
        generator: "Next.js",
        referrer: "origin",
        manifest: "/manifest.webmanifest",
        icons: [
            { rel: "apple-touch-icon", sizes: "57x57", url: "/imgs/favicons/favicon-57x57.png" },
            { rel: "apple-touch-icon", sizes: "60x60", url: "/imgs/favicons/favicon-60x60.png" },
            { rel: "apple-touch-icon", sizes: "72x72", url: "/imgs/favicons/favicon-72x72.png" },
            { rel: "apple-touch-icon", sizes: "76x76", url: "/imgs/favicons/favicon-76x76.png" },
            {
                rel: "apple-touch-icon",
                sizes: "114x114",
                url: "/imgs/favicons/favicon-114x114.png",
            },
            {
                rel: "apple-touch-icon",
                sizes: "120x120",
                url: "/imgs/favicons/favicon-120x120.png",
            },
            {
                rel: "apple-touch-icon",
                sizes: "144x144",
                url: "/imgs/favicons/favicon-144x144.png",
            },
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                url: "/imgs/favicons/favicon-152x152.png",
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                url: "/imgs/favicons/favicon-180x180.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "512x512",
                url: "/imgs/favicons/favicon-512x512.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                url: "/imgs/favicons/favicon-192x192.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                url: "/imgs/favicons/favicon-96x96.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/imgs/favicons/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                url: "/imgs/favicons/favicon-16x16.png",
            },
            {
                rel: "icon",
                type: "image/x-icon",
                sizes: "16x16",
                url: "/imgs/favicons/favicon.ico",
            },
        ],
        metadataBase: new URL(siteConfig.baseUrl!),
        openGraph: {
            title: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.baseUrl,
            siteName: siteConfig.name,
            locale: "en_US",
            type: "website",
            images: {
                url: `${siteConfig.baseUrl}/imgs/og.png`,
                width: 3840,
                height: 2010,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        formatDetection: { email: false, address: false, telephone: false },
    };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={GeistSans.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
