import ThemeSwitch from "@/components/theme-switch";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="grid min-h-screen place-items-center py-8">
            <main className="w-[92.5%] max-w-md 2xl:max-w-xl lg:max-w-lg">{children}</main>

            <div className="fixed right-8 bottom-8 lg:right-4 lg:bottom-4">
                <ThemeSwitch />
            </div>
        </div>
    );
}
