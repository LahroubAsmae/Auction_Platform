import { postCommissionProof } from "@/store/slices/commissionSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitCommission = () => {
  const [proof, setProof] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const proofHandler = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.commission);
  const handlePaymentProof = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
  };

  return (
    <>
      <section className="w-full h-screen px-5 pt-20 flex flex-col justify-center items-center">
        <div className="bg-white w-full max-w-2xl h-auto px-4 flex flex-col gap-4 items-center py-6 justify-center rounded-md shadow-md">
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handlePaymentProof}
          >
            <h3 className="text-[#5C8374] text-2xl md:text-3xl font-semibold mb-4 text-center">
              Télécharger la preuve de paiement
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Montant</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">
                Preuve de paiement (capture d'écran)
              </label>
              <input
                type="file"
                onChange={proofHandler}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Commentaire</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={7}
                className="text-[16px] py-2 bg-transparent border-[1px] rounded-md px-1 border-stone-500 focus:outline-none"
              />
            </div>
            <button
              className="bg-[#5C8374] mx-auto font-semibold hover:bg-[#1B4242] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
              type="submit"
            >
              {loading
                ? "Téléchargement en cours..."
                : "Télécharger la preuve de paiement"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SubmitCommission;
