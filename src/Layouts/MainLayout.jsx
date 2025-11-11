import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import PageWrapper from "../Components/PageWrapper/PageWrapper";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <nav className="sticky top-0 w-full z-[9999]">
          <Navbar />
        </nav>
      
      <main>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
