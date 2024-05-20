import {
    PerfectMatch,
    RealtimeConnections,
    SecureEnvironment,
    type SvgType,
} from "@/components/svgs";

import SectionLayout from "./section-layout";

const FEATURES: { key: string; svg: SvgType; title: string; description: string }[] = [
    {
        key: "find-your-perfect-match",
        svg: PerfectMatch,
        title: "Find your perfect match",
        description:
            "Discover peope of value with our advanced matchmaking algorithms. Whether you're looking for love, friendship, or companionship.",
    },
    {
        key: "realtime-meaningful-connections",
        svg: RealtimeConnections,
        title: "Realtime meaningful connections",
        description:
            "Connect with others who share your passions. Our app facilitates real-time matchmaking based on mutual preferences, ensuring meaningful connections from the start.",
    },
    {
        key: "safe-and-secure-environment",
        svg: SecureEnvironment,
        title: "Safe and secure environment",
        description:
            "Your privacy is our top priority. Our app employs state-of-the-art security measures to ensure a safe and enjoyable experience for all users.",
    },
];

export default function Features() {
    return (
        <SectionLayout id="features" title="Embrace your love journey">
            <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-16">
                {FEATURES.map(({ key, svg: Svg, title, description }) => (
                    <article
                        key={key}
                        className="max-w-xs rounded-xl border shadow-[inset_0_1px_1px_0] shadow-primary/[0.33]"
                    >
                        <div className="grid h-full w-full grid-rows-[2fr,1fr,2fr] place-items-center p-6">
                            <Svg className="max-h-[107px]" />

                            <h3 className="font-bold capitalize">{title}</h3>

                            <p className="h-full place-self-start text-xs font-light leading-5 text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </SectionLayout>
    );
}
