import Navbar from "../components/navigation/navbar";
import ProductList from "../components/product/productList";
import FooterSection from "../FooterSection";
import Banner from "../components/product/banner";

export default function Product() {
    return (
        <>
            <Navbar/>
            <Banner />
            <br />
            <br />
            <ProductList/>
            <br />
            <br />
            <FooterSection />
        </>
    )
}
