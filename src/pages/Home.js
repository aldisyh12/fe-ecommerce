/* This example requires Tailwind CSS v2.0+ */
import HeroSection from "../HeroSection";
import CtaSection from "../CtaSection";
import FeatureSection from "../FeatureSection";
import ProductSection from "../ProductSection";
import CollectionSection from "../CollectionSection";
import FooterSection from "../FooterSection";
import Navbar from "../components/navigation/navbar";



export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection/>
            <CtaSection/>
            <FeatureSection/>
            <ProductSection/>
            <CollectionSection />
            <FooterSection />
        </>
    )
}
