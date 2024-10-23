import {
  clearAllSuperAdminSliceErrors,
  getAllPaymentProofs,
  getAllUsers,
  getMonthlyRevenue,
} from "@/store/slices/superAdminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuctionItemDelete from "./sub-components/AuctionItemDelete";
import BiddersAuctioneersGraph from "./sub-components/BiddersAuctioneersGraph";
import PaymentGraph from "./sub-components/PaymentGraph";
import PaymentProofs from "./sub-components/PaymentProofs";
import Spinner from "@/custom-components/Spinner";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.superAdmin);

  useEffect(() => {
    dispatch(getMonthlyRevenue());
    dispatch(getAllUsers());
    dispatch(getAllPaymentProofs());
    dispatch(clearAllSuperAdminSliceErrors());
  }, [dispatch]);

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (user.role !== "Super Admin" || !isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated, user.role, navigateTo]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full px-5 pt-20 lg:pl-[320px] flex flex-col gap-12">
          {/* Dashboard Heading */}
          <h1 className="text-[#5C8374] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Dashboard
          </h1>

          <div className="flex flex-col gap-12">
            {/* Monthly Revenue Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-[#111] text-2xl font-semibold mb-4">
                Monthly Total Payments Received
              </h3>
              <PaymentGraph />
            </section>

            {/* Users Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-[#111] text-2xl font-semibold mb-4">
                Users Overview
              </h3>
              <BiddersAuctioneersGraph />
            </section>

            {/* Payment Proofs Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-[#111] text-2xl font-semibold mb-4">
                Payment Proofs
              </h3>
              <PaymentProofs />
            </section>

            {/* Auction Item Delete Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-[#111] text-2xl font-semibold mb-4">
                Manage Auction Items
              </h3>
              <AuctionItemDelete />
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
