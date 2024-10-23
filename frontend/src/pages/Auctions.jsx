import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <Spinner />
        </div>
      ) : (
        <article className="w-full h-auto px-5 pt-20  flex flex-col bg-gray-50">
          <section className="my-8 ">
            {/* Page Title */}
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-3">
              Auctions
            </h2>

            {/* Auctions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allAuctions.map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                  className="transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden bg-white"
                />
              ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;
