import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

const Footer = () => {
  return (
    <section className="mt-16 bg-neutral text-white">
      <MyContainer className={'flex'}>
        <div className="space-y-6 flex-1">
          {/* logo */}
          <div className="flex items-end justify-start gap-2">
            <figure className="w-10 h-10 overflow-hidden">
              <img src="./Logo.png" alt="" />
            </figure>
            <Link to={"/"} className="text-xl font-semibold hidden sm:inline">
              <span className="text-primary">Car</span> Rental
            </Link>
          </div>
          {/* footer desc */}
          <p>
            Rent smarter, travel better. We offer clean, well-maintained cars,
            flexible rental options, and friendly support — so you can enjoy the
            road without worries. From quick city rides to long trips, we’ve got
            your wheels ready.
          </p>

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

          <button className="my_btn_outline"><MdDoubleArrow className="-rotate-90"/> BACK TO TOP</button>
        </div>

        {/* navigate */}
        <div className="flex-1">

        </div>
      </MyContainer>
    </section>
  );
};

export default Footer;
