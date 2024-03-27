import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";

interface TitleAnchorProps
    extends Omit<React.ComponentPropsWithoutRef<"a"> & LinkProps, "children" | "href"> {}

export default function TitleAnchor({ className, ...props }: Readonly<TitleAnchorProps>) {
    return (
        <Link href="/app" className="group" {...props}>
            <h2
                className={cn(
                    "text-center font-bold text-xl drop-shadow-primary-md transition-colors group-hover:text-primary",
                    className,
                )}
            >
                Dream Duo
            </h2>
        </Link>
    );
}
