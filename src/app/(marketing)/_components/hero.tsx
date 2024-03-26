import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroBackground, DownArrow } from "@/components/svgs";

export default function Hero() {
    return (
        <main className="relative grid h-dvh w-full place-items-center py-6 lg:snap-center">
            <HeroBackground className="-z-[1] -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 h-dvh w-[92.5%] max-w-screen-sm animate-pulse fill-none stroke-[4px] stroke-primary drop-shadow-primary-lg 2xl:max-w-screen-lg" />

            <div className="row-span-2 flex flex-col items-center gap-y-3">
                <h1 className="text-center text-primary text-title drop-shadow-primary-lg">
                    Dream Duo
                </h1>

                <Link
                    href="/signup"
                    className={cn(buttonVariants({ variant: "shine", size: "lg" }))}
                >
                    Join now
                </Link>
            </div>

            <a
                aria-label="See more"
                href="#features"
                className="absolute bottom-4 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
                <DownArrow
                    className="aspect-square w-8 animate-bounce stroke-2 stroke-primary md:w-10"
                    strokeLinecap="round"
                />
            </a>
        </main>
    );
}
