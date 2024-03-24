"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
    return (
        <NextThemeProvider
            enableSystem
            disableTransitionOnChange
            attribute="class"
            defaultTheme="system"
        >
            {children}
        </NextThemeProvider>
    );
}
