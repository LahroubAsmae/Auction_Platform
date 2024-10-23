import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaUserCircle,
  FaFileInvoiceDollar,
  FaEye,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showActions, setShowActions] = useState(false); // State for actions dropdown

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setShow(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#5C8374]">
                Chic<span className="text-black">Bids</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-8 lg:items-center">
            <Link
              to="/auctions"
              className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
            >
              <RiAuctionFill className="mr-1" /> Enchères
            </Link>
            <div
              className="relative flex items-center text-gray-700 hover:text-[#5C8374] cursor-pointer transition-colors duration-200"
              onMouseEnter={() => setShowActions(true)}
            >
              {isAuthenticated && user && user.role === "Auctioneer" && (
                <>
                  <span className="flex items-center">Actions</span>
                  {showActions && (
                    <ul
                      className="absolute mt-40 w-48 bg-white shadow-lg rounded-md z-50"
                      onMouseLeave={() => setShowActions(false)}
                    >
                      <>
                        <li>
                          <Link
                            to="/create-auction"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#5C8374] transition-colors duration-200"
                          >
                            <IoIosCreate className="mr-2" /> Créer une enchère
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/view-my-auctions"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#5C8374] transition-colors duration-200"
                          >
                            <FaEye className="mr-2" /> Voir mes enchères
                          </Link>
                        </li>
                      </>
                    </ul>
                  )}
                </>
              )}
            </div>
            <Link
              to="/leaderboard"
              className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
            >
              <MdLeaderboard className="mr-1" /> Classement
            </Link>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <Link
                to="/submit-commission"
                className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <FaFileInvoiceDollar className="mr-1" /> Soumettre la commission
              </Link>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <MdDashboard className="mr-1" /> Tableau de bord
              </Link>
            )}
          </div>

          {/* User Authentication Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#5C8374] text-white px-4 py-2 rounded-full hover:bg-[#1B4242] transition-colors duration-200"
                >
                  S'inscrire
                </Link>
                <Link
                  to="/login"
                  className="bg-[#5C8374] text-white px-4 py-2 rounded-full hover:bg-[#1B4242] transition-colors duration-200"
                >
                  Connexion
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/me"
                  className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
                >
                  <FaUserCircle className="mr-1" /> Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#5C8374] text-white px-4 py-2 rounded-full hover:bg-[#1B4242] transition-colors duration-200"
                >
                  Déconnexion
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-2xl text-white bg-[#5C8374] p-2 rounded-md hover:bg-[#1B4242] transition-colors duration-200"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile SideDrawer */}
      <div
        className={`fixed top-0 left-0 w-full sm:w-72 bg-[#f6f4f0] h-full z-50 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Link to="/" onClick={() => setShow(false)}>
            <h1 className="text-2xl font-bold text-[#5C8374]">
              Prime<span className="text-black">Bid</span>
            </h1>
          </Link>
          <button onClick={() => setShow(false)}>
            <IoMdCloseCircleOutline className="text-3xl text-gray-700" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                to="/auctions"
                onClick={() => setShow(false)}
                className="flex items-center text-xl font-semibold text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <RiAuctionFill className="mr-2" /> Enchères
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                onClick={() => setShow(false)}
                className="flex items-center text-xl font-semibold text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <MdLeaderboard className="mr-2" /> Classement
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works-info"
                onClick={() => setShow(false)}
                className="flex items-center text-xl font-semibold text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <SiGooglesearchconsole className="mr-2" /> Comment ça fonctionne
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setShow(false)}
                className="flex items-center text-xl font-semibold text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <BsFillInfoSquareFill className="mr-2" /> À propos de nous
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile User Authentication Buttons */}
        <div className="flex flex-col p-4">
          {!isAuthenticated ? (
            <>
              <Link
                to="/sign-up"
                onClick={() => setShow(false)}
                className="bg-[#5C8374] text-white text-center px-4 py-2 rounded-full mb-2 hover:bg-[#1B4242] transition-colors duration-200"
              >
                S'inscrire
              </Link>
              <Link
                to="/login"
                onClick={() => setShow(false)}
                className="bg-[#5C8374] text-white text-center px-4 py-2 rounded-full hover:bg-[#1B4242] transition-colors duration-200"
              >
                Connexion
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/me"
                onClick={() => setShow(false)}
                className="flex items-center text-gray-700 hover:text-[#5C8374] transition-colors duration-200"
              >
                <FaUserCircle className="mr-1" /> Profil
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#5C8374] text-white text-center px-4 py-2 rounded-full hover:bg-[#1B4242] transition-colors duration-200"
              >
                Déconnexion
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
