import React from "react";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Footer from "@/layout/footer";

// Import your background image
import backgroundImage from "@/assets/bids.jpg"; // Adjust the path as necessary

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
    },
  ];

  return (
    <>
      <main className="w-full h-fit flex flex-col min-h-screen bg-[#f8f9fa] mx-0">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen bg-[#1B4242] text-white w-full px-0 mb-20">
          {/* Contenu du texte */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <h1 className="text-[3rem] font-bold mb-6 text-center leading-snug transition duration-300">
              Enchères Transparentes : Révélez le Gagnant en Vous
            </h1>

            <p className="text-[1.15rem] leading-[1.5] text-center mb-12 max-w-3xl mx-auto shadow-text">
              Participez à une expérience d'enchères unique où chaque offre est
              guidée par la transparence et l'intégrité. Rejoignez-nous pour
              transformer vos ambitions en succès!
            </p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <Link to="/auctions">
                <button className="bg-[#5C8374] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#1B4242] border-2 border-[#5C8374] transition ease-in-out duration-300">
                  Start Bidding
                </button>
              </Link>
              <Link to="/auctions">
                <button className="bg-transparent border-2 border-[#5C8374] text-[#5C8374] py-3 px-8 rounded-full font-bold text-lg hover:bg-[#5C8374] hover:text-white transition ease-in-out duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <FeaturedAuctions />
        <UpcomingAuctions />
        <Leaderboard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
