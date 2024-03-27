import Link, { type LinkProps } from "next/link";

import TitleAnchor from "@/components/title-anchor";
import {
    Home,
    User,
    Search,
    Chats,
    Bell,
    History,
    Settings,
    type SvgType,
} from "@/components/svgs";
import { cn } from "@/lib/utils";

const NAVIGATION: ({
    key: string;
    svg: SvgType;
    children: React.ReactNode;
    href: string;
} & React.ComponentPropsWithoutRef<"a"> &
    LinkProps)[] = [
    {
        key: "home",
        svg: Home,
        children: "Home",
        href: "",
    },
    {
        key: "profile",
        svg: User,
        children: "Profile",
        href: "/profile",
    },
    {
        key: "discover",
        svg: Search,
        children: "Discover",
        href: "/discover",
        className:
            "relative after:content-['Premium'] after:absolute after:top-1/2 after:right-4 after:rounded-md after:px-2 after:py-1 after:text-[10px] after:font-semibold after:bg-primary after:-translate-y-1/2 after:leading-none",
    },
    {
        key: "chats",
        svg: Chats,
        children: "Chats",
        href: "/chats",
    },
    {
        key: "notifications",
        svg: Bell,
        children: "Notifications",
        href: "/notifications",
    },
    {
        key: "history",
        svg: History,
        children: "History",
        href: "/history",
    },
    {
        key: "settings",
        svg: Settings,
        children: "Settings",
        href: "/settings",
    },
];

interface NavbarProps {
    onNavigationClick?: () => void;
}

export default function Navbar({ onNavigationClick }: Readonly<NavbarProps>) {
    return (
        <div className="flex h-full flex-col gap-y-5 pt-5">
            <TitleAnchor
                className="mx-auto text-2xl md:text-xl"
                {...(onNavigationClick && { onClick: onNavigationClick })}
            />

            <nav className="flex h-full flex-col">
                {NAVIGATION.map(({ key, svg: Svg, children, href, className, ...props }) => (
                    <Link
                        key={key}
                        href={`/app${href}`}
                        className={cn(
                            "group flex w-full gap-x-2.5 p-3.5 transition-colors md:last:mt-auto focus-visible:bg-muted hover:bg-muted focus-visible:outline-none",
                            className,
                        )}
                        {...(onNavigationClick && { onClick: onNavigationClick })}
                        {...props}
                    >
                        <Svg className="aspect-square w-5 fill-foreground" />

                        <span className="text-sm">{children}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
