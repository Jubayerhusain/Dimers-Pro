import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const DropNav = () => {
  return (
    <div className="bg-transparent  ">
      <div className="flex w-full xl:w-10/12 mx-auto justify-between px-5 py-2">
        <div className="flex space-x-3 items-center">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" font-bold m-1">
              <div className="flex items-center">
                {" "}
                Sports{" "}
                <p className="text-2xl">
                  <RiArrowDownSLine></RiArrowDownSLine>
                </p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-900 font-semibold text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li className="hover:bg-blue-500 rounded-md group relative z-50">
                <a className="flex justify-between items-center">
                  NFL
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine />
                  </p>
                </a>
                {/* Submenu */}
                <ul className="absolute z-20 left-full top-0 hidden group-hover:block bg-slate-900 font-semibold text-gray-300 rounded-box w-40 p-2 shadow">
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Prediction</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Best Bets</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Best Props</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>picks</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>parlays</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Live Bets</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Future</a>
                  </li>
                </ul>
              </li>

              <li className="hover:bg-blue-500 rounded-md group relative">
                <a className="flex justify-between items-center">
                  NBA{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
                {/* Submenu */}
                <ul className="absolute left-full top-0 hidden group-hover:block bg-slate-900 font-semibold text-gray-300 rounded-box w-40 p-2 shadow">
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Super</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Odds</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>News</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>picks</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>parlays</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Live Bets</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Future</a>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  NHL{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
                {/* Submenu */}
                <ul className="absolute left-full top-0 hidden group-hover:block bg-slate-900 font-semibold text-gray-300 rounded-box w-40 p-2 shadow">
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>parlays</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Future</a>
                  </li>
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>Best Props</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>picks</a>
                  </li>{" "}
                  <li className="hover:bg-blue-500 rounded-md">
                    <a>parlays</a>
                  </li>{" "}
                </ul>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a>
                  MLS{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Collage Football{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Collage Basketball{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Tannis{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Golf{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Premier League{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  La Liga{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a className="flex justify-between items-center">
                  Liga MX{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a>
                  Others{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
              <li className="hover:bg-blue-500 rounded-md group">
                <a>
                  Sports{" "}
                  <p className="text-xl font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                    <RiArrowRightSLine></RiArrowRightSLine>
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="text-lg font-bold m-1">
                <div className="flex items-center">
                  {" "}
                  Best Bets{" "}
                  <p className="text-2xl">
                    <RiArrowDownSLine></RiArrowDownSLine>
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-900 text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Super</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Odds</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>News</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>picks</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>parlays</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Live Bets</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Future</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="text-lg font-bold m-1">
                <div className="flex items-center">
                  {" "}
                  Best Props{" "}
                  <p className="text-2xl">
                    <RiArrowDownSLine></RiArrowDownSLine>
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-900 text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="hover:bg-blue-500 rounded-md">
                  <a>News</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>picks</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>parlays</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Live Bets</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Future</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="text-lg font-bold m-1">
                <div className="flex items-center">
                  {" "}
                  Parlay Picker{" "}
                  <p className="text-2xl">
                    <RiArrowDownSLine></RiArrowDownSLine>
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-900 text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="hover:bg-blue-500 rounded-md">
                  <a>News</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>picks</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>parlays</a>
                </li>{" "}
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Live Bets</a>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="text-lg font-bold m-1">
                <div className="flex items-center">
                  {" "}
                  Betting & More{" "}
                  <p className="text-2xl">
                    <RiArrowDownSLine></RiArrowDownSLine>
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-900 text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="text-lg font-bold m-1">
                <div className="flex items-center">
                  {" "}
                  Dimers Pro{" "}
                  <p className="text-2xl">
                    <RiArrowDownSLine></RiArrowDownSLine>
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-slate-900 text-gray-300 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Pricing</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Get 3 Month Free</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>How to Use</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>FAQ</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Become an Affiliate</a>
                </li>
                <li className="hover:bg-blue-500 rounded-md">
                  <a>Suggest a Feature</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Buttons */}
          <button className="">
            <span className="text-4xl">
              <MdOutlineNotificationsActive></MdOutlineNotificationsActive>
            </span>
          </button>
          <button className="btn btn-outline">Log In</button>
          <button className="btn btn-primary">Join For Free</button>
        </div>
      </div>
    </div>
  );
};

export default DropNav;
