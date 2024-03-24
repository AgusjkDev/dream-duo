import { cn } from "@/lib/utils";

interface SectionLayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    title: string;
}

export default function SectionLayout({
    className,
    children,
    title,
    ...props
}: Readonly<SectionLayoutProps>) {
    return (
        <section
            className={cn(
                "flex min-h-dvh flex-col items-center justify-center gap-y-16 lg:snap-center",
                className,
            )}
            {...props}
        >
            <h2 className="text-center text-primary text-subtitle drop-shadow-primary-md">
                {title}
            </h2>

            {children}
        </section>
    );
}
