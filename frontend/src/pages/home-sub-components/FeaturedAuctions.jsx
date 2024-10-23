import Card from "@/custom-components/Card";
import React from "react";
import { useSelector } from "react-redux";

const FeaturedAuctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  return (
    <>
      <section className="flex flex-col items-center mt-7 mb-16">
        <h3 className="text-[rgb(17,17,17)] text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Enchères à la Une
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {allAuctions.slice(0, 8).map((element) => (
            <Card
              key={element._id}
              title={element.title}
              imgSrc={element.image?.url}
              startTime={element.startTime}
              endTime={element.endTime}
              startingBid={element.startingBid}
              id={element._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedAuctions;
