import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.user);

  return (
    <section className="my-10 lg:px-5">
      <div className="flex flex-col items-center mt-8 mb-10">
        <h3 className="text-[#111] text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Classement des 10 Meilleurs
        </h3>
        <h3 className="text-[#5C8374] text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Enchérisseurs
        </h3>
      </div>

      <div className="overflow-hidden">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200 mx-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-gray-600">
                Photo de Profil
              </th>
              <th className="py-4 px-6 text-left text-gray-600">
                Nom d'utilisateur
              </th>
              <th className="py-4 px-6 text-left text-gray-600">
                Dépenses d'Enchères
              </th>
              <th className="py-4 px-6 text-left text-gray-600">
                Enchères Gagnées
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {leaderboard.slice(0, 10).map((element, index) => (
              <tr
                key={element._id}
                className="border-b border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <td className="flex gap-2 items-center py-4 px-6">
                  <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
                    {index + 1}
                  </span>
                  <img
                    src={element.profileImage?.url}
                    alt={element.username}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </td>
                <td className="py-4 px-6">{element.userName}</td>
                <td className="py-4 px-6">{element.moneySpent}</td>
                <td className="py-4 px-6">{element.auctionsWon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        to={"/leaderboard"}
        className="mt-6 border-2 border-stone-200 bg-white font-bold text-lg py-2 w-full max-w-md mx-auto flex justify-center rounded-md hover:border-stone-500 hover:bg-stone-100 transition-all duration-300"
      >
        Accéder au Classement
      </Link>
    </section>
  );
};

export default Leaderboard;
