import React from "react";
import icon1 from "../../assets/Footericon/icon1.png";
import icon2 from "../../assets/Footericon/icon2.png";
import logo from "../../assets/Footericon/logoicon.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0d1b38] text-white text-sm py-6">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex  justify-around">
          <div className="flex flex-col ">
            <h2 className="text-4xl text-start font-bold mb-2">
              Get the Latest From Dimers
            </h2>
            <p className="text-start text-gray-400 text-lg font-semibold mb-4">
              Free picks, parlays and sportsbook offers sent to your inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded-md font-medium">
              LET'S GO
            </button>
          </form>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          You can unsubscribe at any time. By signing up you agree to our{" "}
          <a href="#" className="text-blue-500 underline hover:no-underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <hr className="border-gray-600 mt-8 mb-6" />
      <div className="flex justify-evenly items-center">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={logo} alt="" />
        <div>
          {/* Social Links */}
          <div className="text-center md:text-left">
            <p className="font-bold text-gray-300 mb-4">FOLLOW US</p>
            <div className="flex justify-center md:justify-start gap-4">
              <p className="text-xl hover:text-blue-400">
                <FaSquareXTwitter></FaSquareXTwitter>
              </p>
              <p className="text-xl hover:text-blue-400">
                <FaFacebook></FaFacebook>
              </p>
              <p className="text-xl hover:text-blue-400">
                <FaLinkedin></FaLinkedin>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="space-y-2 flex items-center text-xl justify-evenly">
          <li>
            <a href="#" className="hover:underline text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Terms Of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Sitemap
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Whiiter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Editorier girlines
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-300">
              Sport book review
            </a>
          </li>
        </ul>
      </div>
      {/* Disclaimer Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-gray-400">
        <p className="mb-2 text-md">
          Disclaimer: All of the information on this site is for entertainment
          purposes only. We do NOT accept bets of any kind. The information we
          provide is accurate and trustworthy to help you make better decisions.
          When you click or tap on a link on Dimers that leads to a third-party
          website that we have a commercial arrangement with (such as an online
          sportsbook), we may earn referral fees. Dimers does not endorse or
          encourage illegal or irresponsible gambling in any form. Before
          placing any wagers with any betting site, you must check the online
          gambling regulations in your jurisdiction or state, as they do vary.
          If you or someone you know has a gambling problem, crisis counseling
          and referral services can be accessed by calling 1-800-GAMBLER.
          Copyright © 2024 Dimers. All Rights Reserved. Proudly part of Cipher
          Sports Technology Group, 902A Broadway, Floors 6 & 7, New York, NY
          10010, United States of America.
        </p>
        <p>
          Copyright © 2024 Dimers. All Rights Reserved. Proudly part of Cipher
          Sports Technology Group.
        </p>
      </div>
      {/* Footer Logos */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-6 mt-6">
        <img
          src="https://cdn.vectorstock.com/i/500p/18/87/law-firm-logo-design-simple-concept-premium-part-1-vector-47331887.jpg"
          alt="Legal Logo 1"
          className="h-28"
        />
        <img
          src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/law-office-logo-1.jpeg"
          alt="Legal Logo 2"
          className="h-28"
        />
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQH0ls0wSRN3cw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727656159753?e=2147483647&v=beta&t=V39AZ_FhoCZU5wpTxCH3TQFJAApw2RuiJNKoR3H3Tms"
          alt="Legal Logo 3"
          className="h-28"
        />
      </div>
    </footer>
  );
}

export default Footer;
