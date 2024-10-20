import React, { useEffect } from "react";
import { ImWhatsapp } from "react-icons/im";
import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
    

    return (
        <>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <div className="fixed bottom-8 right-4 z-1000" style={{ bottom: "18px", zIndex: "1500",background:"green",borderRadius:"50%" }}>
                <NavLink
                    to="https://wa.me/+919510595121" // Replace with your WhatsApp link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex bottom-9 items-center justify-center w-12 h-12 !bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    <ImWhatsapp size={28} />
                </NavLink>
            </div>

        </>
    );
}
