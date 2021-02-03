import React from 'react';
import Footer from "./partial/Footer";
import Header from "./partial/Header";

const Layout = ({Content}) => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
    
}

export default Layout;