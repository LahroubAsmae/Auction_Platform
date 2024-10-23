import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const startDifference = new Date(startTime) - now;
    const endDifference = new Date(endTime) - now;
    let timeLeft = {};

    if (startDifference > 0) {
      timeLeft = {
        type: "Commence dans :",
        days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((startDifference / 1000 / 60) % 60),
        seconds: Math.floor((startDifference / 1000) % 60),
      };
    } else if (endDifference > 0) {
      timeLeft = {
        type: "Se termine dans :",
        days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((endDifference / 1000 / 60) % 60),
        seconds: Math.floor((endDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
    const pad = (num) => String(num).padStart(2, "0");
    return `(${days} jours) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <Link
      to={`/auction/item/${id}`}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-80 h-auto flex flex-col m-4 transition-transform transform hover:scale-105" // Adjusted width and added hover effect
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg" // Adjusted image height and added rounded corners
      />
      <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        {startingBid && (
          <p className="text-xl font-bold text-[#5C8374] mb-2">
            Enchère de départ : ${startingBid}
          </p>
        )}
        <p className="text-gray-600">
          {timeLeft.type}
          {Object.keys(timeLeft).length > 1 ? (
            <span className="font-bold text-[#fdba88] ml-1">
              {formatTimeLeft(timeLeft)}
            </span>
          ) : (
            <span className="font-bold text-[#fdba88] ml-1">
              Temps écoulé !
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default Card;
