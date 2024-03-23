import Image from "next/image";

import AnimatedGradientBorderCard from "@/components/animated-gradient-border-card";
import SectionLayout from "./section-layout";

const FEATURES = [
    {
        key: "find-your-perfect-match",
        imageSrc: "perfect-match.svg",
        title: "Find your perfect match",
        description:
            "Discover peope of value with our advanced matchmaking algorithms. Whether you're looking for love, friendship, or companionship.",
    },
    {
        key: "realtime-meaningful-connections",
        imageSrc: "realtime-connections.svg",
        title: "Realtime meaningful connections",
        description:
            "Connect with others who share your passions. Our app facilitates real-time matchmaking based on mutual preferences, ensuring meaningful connections from the start.",
    },
    {
        key: "safe-and-secure-environment",
        imageSrc: "secure-environment.svg",
        title: "Safe and secure environment",
        description:
            "Your privacy is our top priority. Our app employs state-of-the-art security measures to ensure a safe and enjoyable experience for all users.",
    },
] satisfies { key: string; imageSrc: string; title: string; description: string }[];

export default function Features() {
    return (
        <SectionLayout id="features" title="Embrace your love journey">
            <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-16">
                {FEATURES.map(({ key, imageSrc, title, description }) => (
                    <AnimatedGradientBorderCard
                        key={key}
                        as="article"
                        variant="primary"
                        className="max-w-xs"
                    >
                        <div className="grid h-full w-full grid-rows-3 place-items-center px-6 py-8">
                            <Image
                                alt={`Illustration for ${title}`}
                                src={`/imgs/features/${imageSrc}`}
                                width={150}
                                height={150}
                                quality={100}
                            />

                            <h3 className="font-bold capitalize">{title}</h3>

                            <p className="font-light text-muted-foreground text-xs leading-5">
                                {description}
                            </p>
                        </div>
                    </AnimatedGradientBorderCard>
                ))}
            </div>
        </SectionLayout>
    );
}
