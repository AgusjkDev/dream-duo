import Link, { type LinkProps } from "next/link";

import { Separator } from "@/components/ui/separator";

const NAVIGATION = [
    {
        key: "legal",
        title: "Legal",
        anchors: [
            { key: "disclaimers", href: "#", children: "Disclaimers" },
            { key: "cookies", href: "#", children: "Cookie Policy" },
            { key: "privacy", href: "#", children: "Privacy Policy" },
            { key: "tos", href: "#", children: "Terms of Service" },
        ],
    },
    {
        key: "user-assistance",
        title: "User Assistance",
        anchors: [
            { key: "safety-tips", href: "#", children: "Safety Tips" },
            { key: "guidelines", href: "#", children: "Community Guidelines" },
            { key: "faqs", href: "#", children: "FAQs" },
            { key: "support", href: "#", children: "Feedback & Support" },
        ],
    },
    {
        key: "social",
        title: "Social",
        anchors: [
            { key: "instagram", href: "#", children: "Instagram" },
            { key: "tiktok", href: "#", children: "TikTok" },
            { key: "youtube", href: "#", children: "YouTube" },
            { key: "x", href: "#", children: "X (Formerly Twitter)" },
        ],
    },
] satisfies {
    key: string;
    title: string;
    anchors: ({ key: string; children: React.ReactNode } & LinkProps)[];
}[];

const PARAGRAPHS = [
    {
        key: "privacy-and-security",
        content:
            "At Dream Duo, your privacy is paramount. We want to assure you that we never request access to your account credentials or sensitive personal information. Upholding the highest ethical standards, we're committed to preserving the confidentiality of your data.",
    },
    {
        key: "commitment-and-encouragement",
        content:
            "Your trust means everything to us. We're dedicated to upholding integrity and professionalism. If you have any concerns, please reach out. We're here to support you every step of the way, ensuring your experience with Dream Duo is exceptional. Thank you for choosing us as your preferred dating app.",
    },
] satisfies { key: string; content: string }[];

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-y-8 lg:snap-center">
            <section className="flex w-full flex-wrap gap-12">
                {NAVIGATION.map(({ key, title, anchors }) => (
                    <article key={key} className="flex flex-col gap-y-2">
                        <h4 className="font-medium">{title}</h4>

                        <nav className="flex flex-col items-start gap-y-1 lg:gap-y-0.5">
                            {anchors.map(({ key, ...props }) => (
                                <Link
                                    key={key}
                                    className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
                                    {...props}
                                />
                            ))}
                        </nav>
                    </article>
                ))}
            </section>

            <Separator />

            <section className="flex w-full flex-col gap-y-8">
                {PARAGRAPHS.map(({ key, content }) => (
                    <p
                        key={key}
                        className="max-w-prose text-pretty text-muted-foreground text-sm leading-5 md:max-w-prose-lg"
                    >
                        {content}
                    </p>
                ))}
            </section>

            <span className="w-full text-center text-muted-foreground text-xs md:text-right">
                Brought to you by the Dream Duo team&#46;
            </span>
        </footer>
    );
}
