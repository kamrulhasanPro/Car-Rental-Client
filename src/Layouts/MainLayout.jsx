import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import PageWrapper from "../Components/PageWrapper/PageWrapper";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Components/Spinner/Spinner";

const MainLayout = () => {
  const {loader} = useAuth()
  if(loader){
    return <div className="flex items-center justify-center h-screen">
      <Spinner/>
    </div>
  }
  return (
    <div>
      <ScrollToTop/>
        <nav className="sticky top-0 w-full z-[9999]">
          <Navbar />
        </nav>
      
      <main className="min-h-[calc(100vh-65px-427px)] mx-auto">
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
