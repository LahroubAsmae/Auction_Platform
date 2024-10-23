import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePaymentProof,
  getSinglePaymentProofDetail,
  updatePaymentProof,
} from "@/store/slices/superAdminSlice";

const PaymentProofs = () => {
  const { paymentProofs, singlePaymentProof } = useSelector(
    (state) => state.superAdmin
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deletePaymentProof(id));
  const handleFetchDetails = (id) => dispatch(getSinglePaymentProofDetail(id));

  useEffect(() => {
    if (singlePaymentProof && Object.keys(singlePaymentProof).length > 0) {
      setOpenDrawer(true);
    }
  }, [singlePaymentProof]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white mt-5">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 py-2">User ID</th>
              <th className="w-1/3 py-2">Status</th>
              <th className="w-1/3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {paymentProofs.length > 0 ? (
              paymentProofs.map((element) => (
                <tr key={element._id}>
                  <td className="py-2 px-4 text-center">{element.userId}</td>
                  <td className="py-2 px-4 text-center">{element.status}</td>
                  <td className="flex items-center py-4 justify-center gap-3">
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300"
                      onClick={() => handleFetchDetails(element._id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-all duration-300"
                      onClick={() => handleDelete(element._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-xl text-sky-600 py-3">
                <td colSpan="3">No payment proofs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
    </>
  );
};

const Drawer = ({ setOpenDrawer, openDrawer }) => {
  const { singlePaymentProof, loading } = useSelector(
    (state) => state.superAdmin
  );
  const [amount, setAmount] = useState(singlePaymentProof.amount || "");
  const [status, setStatus] = useState(singlePaymentProof.status || "");

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updatePaymentProof(singlePaymentProof._id, status, amount));
  };

  return (
    <section
      className={`fixed ${
        openDrawer && singlePaymentProof.userId ? "bottom-0" : "-bottom-full"
      } left-0 w-full transition-all duration-300 h-full bg-[#00000087] flex items-end`}
    >
      <div className="bg-white w-full py-8 px-5 sm:max-w-[640px] sm:m-auto h-[80vh] sm:h-[90vh] overflow-y-auto  mt-5 sm:mt-10">
        <h3 className="text-[#D6482B] text-3xl font-semibold text-center mb-1">
          Update Payment Proof
        </h3>
        <p className="text-stone-600">
          You can update payment status and amount.
        </p>
        <form className="flex flex-col gap-5 my-5">
          <InputField
            label="User ID"
            value={singlePaymentProof.userId || ""}
            disabled
          />
          <InputField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <SelectField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={["Pending", "Approved", "Rejected", "Settled"]}
          />
          <TextAreaField
            label="Comment"
            value={singlePaymentProof.comment || ""}
            disabled
          />
          <ActionButton
            link={singlePaymentProof.proof?.url || ""}
            label="Payment Proof (SS)"
            type="link"
          />
          <ActionButton
            label={loading ? "Updating Payment Proof" : "Update Payment Proof"}
            type="submit"
            onClick={handleUpdate}
          />
          <ActionButton
            label="Cancel"
            onClick={() => setOpenDrawer(false)}
            type="cancel"
          />
        </form>
      </div>
    </section>
  );
};

const InputField = ({ label, value, onChange, disabled, type = "text" }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[16px] text-stone-600">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[16px] text-stone-600">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ label, value, disabled }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[16px] text-stone-600">{label}</label>
    <textarea
      rows={5}
      value={value}
      disabled={disabled}
      className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none text-stone-600"
    />
  </div>
);

const ActionButton = ({ label, onClick, link, type }) => {
  const classNames =
    type === "link"
      ? "bg-[#D6482B] hover:bg-[#b8381e]"
      : type === "submit"
      ? "bg-blue-500 hover:bg-blue-700"
      : "bg-yellow-500 hover:bg-yellow-700";

  return link ? (
    <Link
      to={link}
      className={`${classNames} flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300`}
      target="_blank"
    >
      {label}
    </Link>
  ) : (
    <button
      type="button"
      className={`${classNames} flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PaymentProofs;
