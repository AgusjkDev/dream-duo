import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, NEXT_PUBLIC_BASE_URL } from "@/lib/constants";

import "@/styles/globals.css";

export function generateMetadata(): Metadata {
    return {
        title: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        keywords: SITE_CONFIG.keywords,
        applicationName: SITE_CONFIG.name,
        publisher: SITE_CONFIG.name,
        creator: SITE_CONFIG.author,
        authors: { name: SITE_CONFIG.author },
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
        openGraph: {
            title: SITE_CONFIG.name,
            description: SITE_CONFIG.description,
            url: NEXT_PUBLIC_BASE_URL,
            siteName: SITE_CONFIG.name,
            locale: "en_US",
            type: "website",
            images: {
                url: `${NEXT_PUBLIC_BASE_URL}/og.jpg`,
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
            <body className={cn(GeistSans.variable, GeistMono.variable)}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
