import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { placeBid } from "@/store/slices/bidSlice";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const handleBid = () => {
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <section className="w-full h-fit px-5 pt-20 flex flex-col mt-3 lg:px-10">
      {/* Breadcrumb */}
      <div className="text-sm flex gap-2 items-center mb-6">
        <Link
          to="/"
          className="font-semibold text-gray-700 hover:text-[#F4A261] transition-colors"
        >
          Home
        </Link>
        <FaGreaterThan className="text-gray-400" />
        <Link
          to="/auctions"
          className="font-semibold text-gray-700 hover:text-[#F4A261] transition-colors"
        >
          Auctions
        </Link>
        <FaGreaterThan className="text-gray-400" />
        <p className="text-gray-600">{auctionDetail.title}</p>
      </div>

      {/* Main Content */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Auction Details */}
          <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
            <div className="flex gap-6 flex-col lg:flex-row">
              <div className="bg-white lg:w-40 lg:h-40 flex justify-center items-center p-5 border">
                <img
                  src={auctionDetail.image?.url}
                  alt={auctionDetail.title}
                  className="object-cover max-h-full max-w-full"
                />
              </div>
              <div className="flex flex-col justify-around">
                <h3 className="text-[#111] text-2xl font-semibold mb-3">
                  {auctionDetail.title}
                </h3>
                <p className="text-lg font-medium">
                  Condition:{" "}
                  <span className="text-[#F4A261]">
                    {auctionDetail.condition}
                  </span>
                </p>
                <p className="text-lg font-medium">
                  Minimum Bid:{" "}
                  <span className="text-[#F4A261]">
                    Rs.{auctionDetail.startingBid}
                  </span>
                </p>
              </div>
            </div>

            {/* Auction Description */}
            <div className="mt-6">
              <h4 className="text-xl font-bold mb-3">
                Auction Item Description
              </h4>
              <hr className="my-2 border-t border-gray-300" />
              <ul className="space-y-2 list-disc pl-6">
                {auctionDetail.description &&
                  auctionDetail.description.split(". ").map((desc, index) => (
                    <li key={index} className="text-gray-700 text-lg">
                      {desc}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Bids Section */}
          <div className="flex-1">
            <header className="bg-stone-200 py-4 text-2xl font-semibold px-4 rounded-t-lg">
              BIDS
            </header>
            <div className="bg-white px-4 py-4 shadow-md rounded-b-lg min-h-[300px]">
              {auctionBidders &&
              new Date(auctionDetail.startTime) < Date.now() &&
              new Date(auctionDetail.endTime) > Date.now() ? (
                auctionBidders.length > 0 ? (
                  auctionBidders.map((bidder, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b last:border-b-0"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={bidder.profileImage}
                          alt={bidder.userName}
                          className="w-12 h-12 rounded-full"
                        />
                        <p className="text-lg font-semibold">
                          {bidder.userName}
                        </p>
                      </div>
                      <p
                        className={`text-lg font-semibold ${
                          index === 0
                            ? "text-green-600"
                            : index === 1
                            ? "text-blue-600"
                            : index === 2
                            ? "text-yellow-600"
                            : "text-gray-600"
                        }`}
                      >
                        {index === 0
                          ? "1st"
                          : index === 1
                          ? "2nd"
                          : index === 2
                          ? "3rd"
                          : `${index + 1}th`}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No bids for this auction
                  </p>
                )
              ) : Date.now() < new Date(auctionDetail.startTime) ? (
                <img
                  src="/notStarted.png"
                  alt="not-started"
                  className="w-full max-h-[400px] object-contain"
                />
              ) : (
                <img
                  src="/auctionEnded.png"
                  alt="ended"
                  className="w-full max-h-[400px] object-contain"
                />
              )}
            </div>

            {/* Bid Input */}
            <div className="bg-[#F4A261] py-4 text-lg font-semibold text-white flex items-center justify-between px-4 mt-6 rounded-lg">
              {Date.now() >= new Date(auctionDetail.startTime) &&
              Date.now() <= new Date(auctionDetail.endTime) ? (
                <>
                  <div className="flex gap-4 items-center">
                    <p>Place Bid</p>
                    <input
                      type="number"
                      className="w-24 p-2 text-black rounded-md focus:outline-none"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-black p-4 rounded-full transition hover:bg-gray-800"
                    onClick={handleBid}
                  >
                    <RiAuctionFill className="text-white text-xl" />
                  </button>
                </>
              ) : new Date(auctionDetail.startTime) > Date.now() ? (
                <p className="text-white">Auction has not started yet!</p>
              ) : (
                <p className="text-white">Auction has ended!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuctionItem;
