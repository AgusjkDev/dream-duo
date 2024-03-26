"use client";

import { useSearchParams } from "next/navigation";
import Link, { type LinkProps } from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AuthAlternateLinkProps = React.ComponentPropsWithoutRef<"a"> & LinkProps;

export default function AuthAlternateLink({
    href,
    className,
    ...props
}: Readonly<AuthAlternateLinkProps>) {
    const searchParams = useSearchParams();

    const next = searchParams.get("next");

    return (
        <Link
            href={next ? `${href}?next=${encodeURIComponent(next)}` : href}
            className={cn(
                buttonVariants({ variant: "link", size: "inherit" }),
                "text-xs underline underline-offset-2",
                className,
            )}
            {...props}
        />
    );
}
