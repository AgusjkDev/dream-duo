import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageNotFound } from "@/components/svgs";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="mx-auto flex h-screen w-[92.5%] max-w-md flex-col items-center justify-center gap-y-8">
            <PageNotFound className="w-full" />

            <h1 className="text-2xl font-black md:text-3xl">Page Not Found</h1>

            <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "")}>
                Home
            </Link>
        </main>
    );
}
