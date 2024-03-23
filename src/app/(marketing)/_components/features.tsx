import Image from "next/image";

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
        <section
            id="features"
            className="flex min-h-dvh flex-wrap items-center justify-center gap-8 bg-background px-8 py-16 lg:gap-16"
        >
            {FEATURES.map(({ key, imageSrc, title, description }) => (
                <article
                    key={key}
                    className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl border p-[1px] backdrop-blur-3xl"
                >
                    <span
                        aria-hidden="true"
                        className="-inset-full absolute animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--background))_0%,hsl(var(--primary)/0.5)_50%,hsl(var(--background))_100%)]"
                    />
                    <div className="grid h-full w-full grid-rows-3 place-items-center rounded-xl bg-background p-6 py-8 backdrop-blur-3xl">
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
                </article>
            ))}
        </section>
    );
}
