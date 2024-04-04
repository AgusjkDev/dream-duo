import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";

interface TitleAnchorProps
    extends Omit<React.ComponentPropsWithoutRef<"a"> & LinkProps, "children" | "href"> {}

export default function TitleAnchor({ className, ...props }: Readonly<TitleAnchorProps>) {
    return (
        <Link
            href="/app"
            className={cn(
                "rounded-md text-center text-xl font-bold drop-shadow-primary-md transition-colors selection:text-primary hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                className,
            )}
            {...props}
        >
            Dream Duo
        </Link>
    );
}
