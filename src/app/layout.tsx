import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, BASE_URL } from "@/lib/constants";

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
        openGraph: {
            title: SITE_CONFIG.name,
            description: SITE_CONFIG.description,
            url: BASE_URL,
            siteName: SITE_CONFIG.name,
            locale: "en_US",
            type: "website",
            images: {
                url: `${BASE_URL}/og.jpg`,
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
