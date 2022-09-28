/* This example requires Tailwind CSS v2.0+ */
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";

export default function Example() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
                <Route
                    path="/product"
                    element={
                        <Product />
                    }
                />
                <Route
                    path="/product-detail"
                    element={
                        <ProductDetail />
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <Signin />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <SignUp />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
