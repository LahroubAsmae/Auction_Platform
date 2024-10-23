import React from "react";
import { RiAuctionFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UpcomingAuctions = () => {
  const { allAuctions } = useSelector((state) => state.auction);

  const today = new Date();
  const todayString = today.toDateString();

  const auctionsStartingToday = allAuctions.filter((item) => {
    const auctionDate = new Date(item.startTime);
    return auctionDate.toDateString() === todayString;
  });

  return (
    <>
      <section className="my-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Enchères du jour
        </h3>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Featured Auction Section */}
          <div className="bg-gray-900 text-center p-6 rounded-xl shadow-lg text-white lg:col-span-1">
            <span className="inline-block bg-[#5C8374] p-4 rounded-full text-white">
              <RiAuctionFill size={40} />
            </span>
            <h3 className="mt-4 text-xl font-bold">Enchères du jour</h3>
            <p className="text-[#5C8374] mt-2">Ne manquez pas !</p>
          </div>

          {/* Auctions List */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {auctionsStartingToday.slice(0, 6).map((auction) => (
              <Link
                to={`/auction/item/${auction._id}`}
                key={auction._id}
                className="group bg-white p-6 rounded-lg shadow hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={auction.image?.url}
                    alt={auction.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-800 font-bold text-lg group-hover:text-[#5C8374]">
                      {auction.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Starting Time:{" "}
                      {new Date(auction.startTime).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-700 font-semibold">Starting Bid:</p>
                  <p className="text-[#5C8374] font-bold">
                    Rs. {auction.startingBid}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingAuctions;
