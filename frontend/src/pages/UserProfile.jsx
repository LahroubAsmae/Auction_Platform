import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="w-full h-screen px-5 pt-20 flex justify-center items-start">
        {loading ? (
          <Spinner />
        ) : (
          <div className="bg-white w-full max-w-4xl mx-auto h-auto px-4 py-6 flex flex-col gap-4 items-center rounded-md">
            <img
              src={user.profileImage?.url}
              alt="Profil"
              className="w-36 h-36 rounded-full"
            />

            <div className="mb-6 w-full">
              <h3 className="text-xl font-semibold mb-4">Détails personnels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    defaultValue={user.userName}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    defaultValue={user.email}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="number"
                    defaultValue={user.phone}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Adresse
                  </label>
                  <input
                    type="text"
                    defaultValue={user.address}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rôle
                  </label>
                  <input
                    type="text"
                    defaultValue={user.role}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Inscrit le
                  </label>
                  <input
                    type="text"
                    defaultValue={user.createdAt?.substring(0, 10)}
                    className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled
                  />
                </div>
              </div>
            </div>

            {user.role === "Auctioneer" && (
              <div className="mb-6 w-full">
                <h3 className="text-xl font-semibold mb-4">
                  Détails de paiement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nom de la banque
                    </label>
                    <input
                      type="text"
                      defaultValue={user.paymentMethods.bankTransfer.bankName}
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Compte bancaire (IBAN)
                    </label>
                    <input
                      type="text"
                      defaultValue={
                        user.paymentMethods.bankTransfer.bankAccountNumber
                      }
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nom sur le compte bancaire
                    </label>
                    <input
                      type="text"
                      defaultValue={
                        user.paymentMethods.bankTransfer.bankAccountName
                      }
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Numéro de compte Easypaisa
                    </label>
                    <input
                      type="text"
                      defaultValue={
                        user.paymentMethods.easypaisa.easypaisaAccountNumber
                      }
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Paypal
                    </label>
                    <input
                      type="text"
                      defaultValue={user.paymentMethods.paypal.paypalEmail}
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6 w-full">
              <h3 className="text-xl font-semibold mb-4">
                Autres détails utilisateur
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.role === "Auctioneer" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Commissions impayées
                    </label>
                    <input
                      type="text"
                      defaultValue={user.unpaidCommission}
                      className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                      disabled
                    />
                  </div>
                )}
                {user.role === "Bidder" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Enchères gagnées
                      </label>
                      <input
                        type="text"
                        defaultValue={user.auctionsWon}
                        className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Argent dépensé
                      </label>
                      <input
                        type="text"
                        defaultValue={user.moneySpent}
                        className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                        disabled
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default UserProfile;
