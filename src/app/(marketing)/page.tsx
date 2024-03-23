import Hero from "./_components/hero";
import Features from "./_components/features";
import Testimonials from "./_components/testimonials";
import Footer from "./_components/footer";
import ThemeSwitch from "@/components/theme-switch";

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

            <div className="fixed right-8 bottom-8 lg:right-4 lg:bottom-4">
                <ThemeSwitch />
            </div>
        </>
    );
}
