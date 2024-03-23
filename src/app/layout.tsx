import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Dream Duo",
    description: "Dream Duo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(GeistSans.variable, GeistMono.variable)}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
