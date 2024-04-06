import ThemeSwitch from "@/components/theme-switch";

import Features from "./_components/features";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Testimonials from "./_components/testimonials";

export default function Index() {
    return (
        <>
            <Hero />

            <div className="mx-auto w-full bg-background py-16">
                <div className="mx-auto w-[92.5%]">
                    <Features />

                    <Testimonials />

                    <Footer />
                </div>
            </div>

            <div className="fixed bottom-8 right-8 lg:bottom-4 lg:right-4">
                <ThemeSwitch />
            </div>
        </>
    );
}
