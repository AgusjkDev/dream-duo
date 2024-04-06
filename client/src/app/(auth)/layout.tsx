import ThemeSwitch from "@/components/theme-switch";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="grid min-h-screen place-items-center py-8">
            <main className="w-[92.5%] max-w-md lg:max-w-lg 2xl:max-w-xl">{children}</main>

            <div className="fixed bottom-8 right-8 lg:bottom-4 lg:right-4">
                <ThemeSwitch />
            </div>
        </div>
    );
}
