import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);

  return (
    <section className="w-full h-fit pt-20 flex flex-col items-center justify-center px-5">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="text-center mb-8">
            <h1
              className="text-[#76ABAE] text-4xl font-extrabold tracking-wide mb-2 
                         min-[480px]:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl
                         leading-tight drop-shadow-md mt-8"
            >
              Bidders <span className="text-gray-800">Leaderboard</span>
            </h1>
            <p className="text-gray-600 text-lg mt-3 md:text-xl">
              The top bidders of the month
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="overflow-x-auto max-w-6xl w-full">
              <table className="w-full bg-white border my-5 border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-6 text-left font-semibold text-gray-600">
                      Profile Pic
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-600">
                      Username
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-600">
                      Bid Expenditure
                    </th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-600">
                      Auctions Won
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {leaderboard.slice(0, 100).map((element, index) => (
                    <tr
                      key={element._id}
                      className="border-b border-gray-300 hover:bg-gray-50"
                    >
                      <td className="flex gap-4 items-center py-3 px-6">
                        <span className="text-gray-400 font-semibold text-lg w-7 hidden sm:block">
                          {index + 1}
                        </span>
                        <img
                          src={element.profileImage?.url}
                          alt={element.username}
                          className="h-12 w-12 object-cover rounded-full"
                        />
                      </td>
                      <td className="py-3 px-6">{element.userName}</td>
                      <td className="py-3 px-6">{element.moneySpent}</td>
                      <td className="py-3 px-6">{element.auctionsWon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Leaderboard;
