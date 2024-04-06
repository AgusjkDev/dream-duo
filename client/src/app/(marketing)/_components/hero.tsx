import { DownArrow, HeroBackground } from "@/components/svgs";

import CallToAction from "./call-to-action";

export default function Hero() {
    return (
        <main className="relative grid h-dvh w-full place-items-center py-6 lg:snap-center">
            <HeroBackground className="fixed left-1/2 top-1/2 -z-[1] h-dvh w-[92.5%] max-w-screen-sm -translate-x-1/2 -translate-y-1/2 animate-pulse fill-none stroke-primary stroke-[4px] drop-shadow-primary-lg 2xl:max-w-screen-lg" />

            <div className="row-span-2 flex flex-col items-center gap-y-3">
                <h1 className="text-center text-title text-primary drop-shadow-primary-lg selection:text-primary">
                    Dream Duo
                </h1>

                <CallToAction />
            </div>

            <a
                aria-label="See more"
                href="#features"
                className="absolute bottom-4 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
                <DownArrow
                    className="aspect-square w-8 animate-bounce stroke-primary stroke-2 md:w-10"
                    strokeLinecap="round"
                />
            </a>
        </main>
    );
}
