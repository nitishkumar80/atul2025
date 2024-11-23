import React from "react";
import logo from "../../../assets/logo/logo2.png";
import facebook from "../../../assets/social/facebook.png";
import instagram from "../../../assets/social/instagram.png";
import whatsapp from "../../../assets/social/whatsapp.png";
import linkedin from "../../../assets/social/linkedin.png";
import youtube from "../../../assets/social/youtube.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeadset,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer flex flex-wrap py-14 px-5 md:px-10 bg-gray-800 dark:bg-gray-900 text-base-content">
        <aside className="flex-1 mb-8 md:mb-0">
          <img loading="lazy" className="w-24 md:w-36 lg:w-44" src={logo} alt="Logo" />
          <p className="mt-3 text-center md:text-left text-sm font-semibold text-slate-300 dark:text-white">
            Future of sports training
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-5 py-4">
            {[facebook, instagram, whatsapp, linkedin, youtube].map((icon, index) => (
              <Link to="#" key={index}>
                <img className="w-8" src={icon} alt="Social Icon" />
              </Link>
            ))}
          </div>
        </aside>
        <nav className="flex-1 mb-8 md:mb-0">
          <header className="font-bold text-xl mb-3 text-white text-center md:text-left">
            Contact Us
          </header>
          <div className="flex flex-col items-center md:items-start space-y-3 text-base text-white">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Daladali Chowk
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +91 92052 90015
            </p>
            <p className="flex items-center gap-2">
              <FaHeadset />
              +91 92052 90015
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              support@arskreedashala.com
            </p>
          </div>
        </nav>
        <nav className="flex-1 mb-8 md:mb-0">
          <header className="font-bold text-xl mb-3 text-white text-center md:text-left">
            Quick Links
          </header>
          <div className="flex flex-col items-center md:items-start space-y-3 text-base text-white">
            {["Home", "About Us", "Programmes", "Instructors"].map((link, index) => (
              <Link key={index} className="link link-hover hover:text-amber-500">
                {link}
              </Link>
            ))}
          </div>
        </nav>
        <form className="flex-1">
          <header className="font-bold text-xl mb-3 text-white text-center md:text-left">
            Newsletter
          </header>
          <fieldset className="form-control w-full md:w-80 mx-auto md:mx-0">
            <label className="label">
              <span className="text-base text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="arskreedashala.com"
                className="input input-bordered w-full bg-white"
              />
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white absolute top-0 right-0 rounded-l-none border-2 border-amber-500 hover:border-amber-600">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="footer-center p-6 bg-gray-800 dark:bg-gray-900 text-slate-300 border-t border-slate-500 text-sm">
        <p className="text-center">Copyright © {year} - All rights reserved</p>
        <div className="flex flex-wrap justify-center space-x-2 mt-3">
          {[
            "Privacy Policy",
            "Terms of Use",
            "Disclaimer",
            "Shipping & Delivery Policy",
            "Refund & Cancellation Policy",
          ].map((item, index) => (
            <React.Fragment key={index}>
              <Link className="link link-hover text-slate-300 hover:text-white">{item}</Link>
              {index < 4 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
