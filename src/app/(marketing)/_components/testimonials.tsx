"use client";

import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuoteRight } from "@/components/svgs";
import SectionLayout from "./section-layout";

const TESTIMONIALS = [
    {
        key: "alice-john",
        title: "Alice & John",
        description: [
            "Joining the online dating world seemed daunting at first, but then I stumbled upon John's profile. From our first conversation, I knew there was something special about him.",
            "Our connection grew stronger with every chat and date. Now, I can't imagine my life without him.",
        ],
    },
    {
        key: "sakura-diego",
        title: "Sakura & Diego",
        description: [
            "When I real-time matched with Diego, I was intrigued by his infectious smile. Our shared love for exploring new places and trying new things brought us closer together.",
            "Little did I know, he would become my greatest adventure.",
        ],
    },
    {
        key: "mohammed-olivia",
        title: "Mohammed & Olivia",
        description: [
            "Mohammed and I may come from different backgrounds, but love knows no boundaries. Our online connection blossomed into something beautiful, filled with understanding, respect, and laughter.",
            "Olivia's kindness and warmth captured my heart from the very beginning. Now, I'm grateful every day for the chance encounter that brought us together.",
        ],
    },
    {
        key: "lucas-anya",
        title: "Lucas & Anya",
        description: [
            "With Dream Duo life has its own plans, and the distance became our biggest obstacle. Despite the miles between us, we held onto hope, cherishing every moment we could share.",
            "We've built a relationship based on trust, communication, and endless support, proving that distance is just a temporary barrier.",
        ],
    },
    {
        key: "camila-emma",
        title: "Camila & Emma",
        description: [
            "With Dream Duo, on our first date, I felt like I had known Camila forever. She has this way of making even the simplest moments feel extraordinary.",
            "Together, we've embraced each other's quirks and built a relationship based on love, acceptance, and mutual respect. I'm grateful every day for the chance to share my life with someone as amazing as Emma.",
        ],
    },
    {
        key: "nina-rafael",
        title: "Nina & Rafael",
        description: [
            "Looking for love like ours? Rafael and I found each other on Dream Duo. If you're seeking understanding and support, don't lose hope. With the right platform and perseverance, you can find your match too.",
            "We encourage you to join Dream Duo, you would never know if your soulmate might just be a click away.",
        ],
    },
    {
        key: "mia-henrik",
        title: "Mia & Henrik",
        description: [
            "Finding love on Dream Duo was a game-changer for me. Henrik brought a ray of sunshine into my life with his infectious positivity and genuine kindness.",
            "Our journey is proof that the right connection can transform your life. So if you're searching for that spark, you might just be in the place to find it.",
        ],
    },
] satisfies { key: string; title: string; description: string | string[] }[];

export default function Testimonials() {
    return (
        <SectionLayout title="Insights from our community">
            <Carousel
                className="w-[72.5%] max-w-xs xl:w-full xl:max-w-[1088px]"
                plugins={[Autoplay({ delay: 3000 })]}
            >
                <CarouselPrevious />

                <CarouselContent className="-ml-8 xl:-ml-16">
                    {TESTIMONIALS.map(({ key, title, description }) => (
                        <CarouselItem key={key} className="pl-8 xl:basis-1/3 xl:pl-16">
                            <Card className="aspect-square h-full w-full">
                                <CardHeader className="relative">
                                    <CardTitle className="flex items-center justify-between">
                                        <span>{title}</span>

                                        <QuoteRight className="aspect-square w-[18px] fill-muted-foreground" />
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex flex-col gap-y-2.5">
                                    {(Array.isArray(description) ? description : [description]).map(
                                        (paragraph, index) => (
                                            <p
                                                // biome-ignore lint/suspicious/noArrayIndexKey: Using the testimonial key and the paragraph index is enough.
                                                key={`${key}-${index}`}
                                                className="text-balance text-muted-foreground text-sm leading-5"
                                            >
                                                {paragraph}
                                            </p>
                                        ),
                                    )}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselNext />
            </Carousel>
        </SectionLayout>
    );
}
