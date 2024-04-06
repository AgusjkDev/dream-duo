"use client";

import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/toaster";

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
    return (
        <ThemeProvider
            enableSystem
            disableTransitionOnChange
            attribute="class"
            defaultTheme="system"
        >
            {children}

            <Toaster />
        </ThemeProvider>
    );
}
