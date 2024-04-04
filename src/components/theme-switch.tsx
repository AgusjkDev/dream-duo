"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Moon, Sun } from "@/components/svgs";
import { useMounted } from "@/hooks/use-mounted";

export default function ThemeSwitch() {
    const mounted = useMounted();
    const { resolvedTheme, setTheme } = useTheme();

    function handleTheme() {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    }

    if (!mounted) {
        return <Skeleton className="aspect-square w-9" />;
    }

    return (
        <Button aria-label="Switch theme" variant="outline" size="icon" onClick={handleTheme}>
            {resolvedTheme === "light" ? (
                <Moon className="aspect-square w-5 fill-foreground" />
            ) : (
                <Sun className="aspect-square w-5 fill-foreground" />
            )}
        </Button>
    );
}
