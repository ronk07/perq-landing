import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/default";
import Features from "@/components/sections/features/default";
import Items from "@/components/sections/items/default";
import Stats from "@/components/sections/stats/default";
import Pricing from "@/components/sections/pricing/default";
import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero 
                mockup={
                    <Image
                        src="/herodashboard.png"
                        alt="Perq Dashboard"
                        width={1248}
                        height={765}
                        className="w-full h-auto"
                        priority
                    />
                }
            />
            <Stats />
            <Features />
            <Items />

            <Pricing />
            <Logos />
            <CTA />
            <Footer />
        </>
    );
}
