export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex">
            <div className="fixed bottom-0 w-full border-t bg-background py-3.5 md:static md:bottom-auto md:max-w-64 md:border-t-0 md:border-r md:py-0">
                <span>Navigation Menu</span>
            </div>

            <div className="md:scrollbar mb-[53px] w-full md:mb-0 md:h-screen md:overflow-y-auto">
                <main className="mx-auto w-[92.5%]">{children}</main>
            </div>
        </div>
    );
}
