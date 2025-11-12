import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <>
      <section className="mt-16 bg-neutral text-white py-10 relative z-20 overflow-hidden rounded-t-3xl">
        {/* shadow image */}
        <img
          className="absolute -z-10 opacity-10 md:top-0 right-1/12 top-2/12"
          src="https://i.postimg.cc/ZRmsTT9R/banner-car.png"
          alt=""
        />

        <MyContainer className={"flex flex-col md:flex-row gap-5 "}>
          {/* logo and desc */}
          <div className="space-y-6 flex-1">
            {/* logo */}
            <Logo/>
            {/* footer desc */}
            <p>
              Rent smarter, travel better. We offer clean, well-maintained cars,
              flexible rental options, and friendly support — so you can enjoy
              the road without worries. From quick city rides to long trips,
              we’ve got your wheels ready.
            </p>

            {/* contact */}
            <div>
              <a href="tel:01886548554" className="flex gap-2 items-center">
                <IoCall />
                <p>+880 1886-5485-54</p>
              </a>
              <a
                href="mailto:carrental@support.com"
                className="flex gap-2 items-center"
              >
                <IoMdMail />
                <p>carrental@support.com</p>
              </a>
            </div>
          </div>

          {/* for desktop device */}
          <div className="lg:flex-1"></div>

          {/* navigate */}
          <div className="flex-1 space-y-6">
            <p className="text-xl">Company</p>
            <ul className="text-gray-300 space-y-0.5">
              <li>
                <Link>Terms & Condition</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
            </ul>

            {/* social icon */}
            <div className="flex gap-4 items-center text-2xl">
              <a href="#" target="_blank">
                <FaXTwitter />
              </a>
              <a href="#" target="_blank">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
              <a href="#" target="_blank">
                <FaFacebook />
              </a>
            </div>

            <button onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }} className="my_btn_outline">
              <MdDoubleArrow className="-rotate-90" /> BACK TO TOP
            </button>
          </div>
        </MyContainer>
      </section>
      <div className="p-1 my_bg text-center text-white">
        <p className="text-sm">Copyright © 2025 Car Rental. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
