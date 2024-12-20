import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0d1b38] text-white text-sm py-6">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Get the Latest From Dimers</h2>
        <p className="text-gray-400 text-sm mb-4">
          Free picks, parlays and sportsbook offers sent to your inbox.
        </p>
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

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Proudly Part Of */}
        <div className="text-center md:text-left">
          <p className="font-bold text-gray-300 mb-4">PROUDLY PART OF</p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <img
              src="https://via.placeholder.com/100x30?text=CIPHER"
              alt="Cipher Logo"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/100x30?text=DIMERS"
              alt="Dimers Logo"
              className="h-6"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <ul className="space-y-2">
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
                Live Scores
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <p className="font-bold text-gray-300 mb-4">FOLLOW US</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:opacity-80">
              <img
                src="https://via.placeholder.com/30?text=T"
                alt="Twitter"
                className="h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://via.placeholder.com/30?text=F"
                alt="Facebook"
                className="h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://via.placeholder.com/30?text=I"
                alt="Instagram"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-gray-400">
        <p className="mb-2">
          Disclaimer: All of the information on this site is for entertainment
          purposes only. We do NOT accept bets of any kind.
        </p>
        <p>
          Copyright © 2024 Dimers. All Rights Reserved. Proudly part of Cipher
          Sports Technology Group.
        </p>
      </div>

      {/* Footer Logos */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-6 mt-6">
        <img
          src="https://via.placeholder.com/50x30?text=21+"
          alt="Legal Logo 1"
          className="h-6"
        />
        <img
          src="https://via.placeholder.com/50x30?text=GAMBLER"
          alt="Legal Logo 2"
          className="h-6"
        />
        <img
          src="https://via.placeholder.com/50x30?text=NCPG"
          alt="Legal Logo 3"
          className="h-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
