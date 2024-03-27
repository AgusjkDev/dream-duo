import TitleAnchor from "@/components/title-anchor";
import ThemeSwitch from "@/components/theme-switch";
import MobileSheet from "./_components/mobile-sheet";
import Navbar from "./_components/navbar";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex">
            <aside className="fixed bottom-0 w-full border-t bg-background py-2.5 md:static md:bottom-auto md:max-w-64 md:border-t-0 md:border-r md:py-0">
                <div className="flex items-center justify-evenly md:hidden">
                    <MobileSheet />

                    <TitleAnchor />

                    <ThemeSwitch />
                </div>

                <div className="hidden h-full md:block">
                    <Navbar />
                </div>
            </aside>

            <div className="md:scrollbar mb-[57px] w-full md:mb-0 md:h-screen md:overflow-y-auto">
                <main className="mx-auto w-[92.5%]">{children}</main>
            </div>
        </div>
    );
}
