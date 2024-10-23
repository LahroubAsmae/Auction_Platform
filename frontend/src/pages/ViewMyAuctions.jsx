import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardTwo from "@/custom-components/CardTwo";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";

const ViewMyAuctions = () => {
  // Selectors
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  // Fetching auctions and checking user authentication
  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    } else {
      dispatch(getMyAuctionItems());
    }
  }, [dispatch, isAuthenticated, user.role, navigateTo]);

  return (
    <div className="my-20">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-3">
        My Auctions
      </h3>

      {loading ? (
        <Spinner />
      ) : (
        <div
          className={`flex flex-wrap gap-6 ${
            myAuctions.length > 2 && "flex-grow"
          }`}
        >
          {myAuctions.length > 0 ? (
            myAuctions.map((element) => (
              <CardTwo
                key={element._id} // Move key prop to CardTwo for clarity
                title={element.title}
                startingBid={element.startingBid}
                endTime={element.endTime}
                startTime={element.startTime}
                imgSrc={element.image?.url}
                id={element._id}
              />
            ))
          ) : (
            <h3 className="text-[#666] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl mt-5">
              You have not posted any auctions.
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewMyAuctions;
