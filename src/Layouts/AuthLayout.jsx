import React from "react";
import { Outlet } from "react-router";
import PageWrapper from "../Components/PageWrapper/PageWrapper";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const AuthLayout = () => {
  return (
    <>
      <div>
        <ScrollToTop />
        <nav className="sticky top-0 w-full z-[9999]">
          <Navbar />
        </nav>

        <main>
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AuthLayout;
