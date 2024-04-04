interface PageLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function PageLayout({ title, description, children }: Readonly<PageLayoutProps>) {
    return (
        <div className="flex flex-col gap-y-12 py-6 md:gap-y-16 md:py-8">
            <header className="flex flex-col gap-y-2 md:gap-y-1">
                <h1 className="text-2xl font-semibold">{title}</h1>

                <p className="max-w-prose text-balance text-sm text-muted-foreground md:max-w-prose-lg">
                    {description}
                </p>
            </header>

            {children}
        </div>
    );
}
