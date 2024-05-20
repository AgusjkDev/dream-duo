"use client";

import { ThemeProvider } from "next-themes";

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
        </ThemeProvider>
    );
}
