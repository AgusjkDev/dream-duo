import Link, { type LinkProps } from "next/link";

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
import TitleAnchor from "./title-anchor";

const NAVIGATION = [
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
] satisfies ({
    key: string;
    svg: SvgType;
    children: React.ReactNode;
    href: string;
} & React.ComponentPropsWithoutRef<"a"> &
    LinkProps)[];

interface NavbarProps {
    onNavigationClick?: () => void;
}

export default function Navbar({ onNavigationClick }: Readonly<NavbarProps>) {
    return (
        <div className="flex h-full flex-col gap-y-5 pt-5">
            <TitleAnchor
                className="text-2xl md:text-xl"
                {...(onNavigationClick && { onClick: onNavigationClick })}
            />

            <nav className="flex h-full flex-col">
                {NAVIGATION.map(({ key, svg: Svg, children, href, ...props }) => (
                    <Link
                        key={key}
                        href={`/app${href}`}
                        className="group flex w-full gap-x-2.5 p-3.5 transition-colors md:last:mt-auto hover:bg-muted"
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
