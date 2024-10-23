import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-start">
        {/* À propos de nous Section */}
        <div className="flex flex-col space-y-2 w-full md:w-1/3 mb-4 md:mb-0 ml-4 mr-10">
          <h4 className="text-lg font-semibold">À propos de nous</h4>
          <Link
            to="/about"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            <p>
              ChicBid est une plateforme d'enchères en ligne offrant des
              expériences uniques pour acheter et vendre des articles variés.
            </p>
          </Link>
        </div>

        {/* Comment la plateforme fonctionne Section */}
        <div className="flex flex-col space-y-2 w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Comment ça marche</h4>
          <Link
            to="/how-it-works-info"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            <p>
              Découvrez comment enchérir sur vos articles préférés et participez
              à des enchères en temps réel.
            </p>
          </Link>
        </div>

        {/* Contactez-nous Section */}
        <div className="flex flex-col space-y-2 w-full md:w-1/3 ml-5">
          <h4 className="text-lg font-semibold">Contactez-nous</h4>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Formulaire de contact
          </Link>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-200"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ChicBids, LAHROUB Asmae
        </p>
      </div>
    </footer>
  );
};

export default Footer;
