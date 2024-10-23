import { register } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [mobileMoneyAccountNumber, setMobileMoneyAccountNumber] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("profileImage", profileImage);
    if (role === "Auctioneer") {
      formData.append("bankAccountName", bankAccountName);
      formData.append("bankAccountNumber", bankAccountNumber);
      formData.append("bankName", bankName);
      formData.append("mobileMoneyAccountNumber", mobileMoneyAccountNumber);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, loading, isAuthenticated]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center px-5 py-20 lg:pl-[120px] mt-10">
        <div className="bg-white w-full h-auto px-4 flex flex-col gap-4 items-center py-4 justify-center rounded-md shadow-md">
          <form
            className="flex flex-col gap-5 w-full mt-9"
            onSubmit={handleRegister}
          >
            <p className="font-semibold text-xl md:text-2xl text-[#5C8374]">
              Détails personnels
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">Téléphone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">Adresse</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">Rôle</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                >
                  <option value="">Sélectionner le rôle</option>
                  <option value="Auctioneer">Auctioneer</option>
                  <option value="Bidder">Bidder</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-600">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-1 gap-2">
              <label className="text-[16px] text-stone-600">
                Image de profil
              </label>
              <div className="flex items-center gap-3">
                <img
                  src={
                    profileImagePreview
                      ? profileImagePreview
                      : "/imageHolder.jpg"
                  }
                  alt="Aperçu de l'image de profil"
                  className="w-14 h-14 rounded-full border-2 border-[#5C8374]"
                />
                <input
                  type="file"
                  onChange={imageHandler}
                  className="border-b-[2px] border-b-[#5C8374]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-semibold text-xl md:text-2xl flex flex-col text-[#5C8374]">
                Détails du mode de paiement
                <span className="text-[12px] text-stone-500">
                  Remplissez les détails de paiement uniquement si vous vous
                  inscrivez en tant qu'enchérisseur
                </span>
              </label>
              <div className="flex flex-col gap-2">
                <label className="text-[16px] text-stone-600">
                  Détails bancaires
                </label>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300 sm:flex-1"
                    disabled={role === "Bidder"}
                  >
                    <option value="">Sélectionnez votre banque</option>
                    <option value="Attijariwafa Bank">Attijariwafa Bank</option>
                    <option value="BMCE Bank">BMCE Bank</option>
                    <option value="Banque Populaire">Banque Populaire</option>
                    <option value="Société Générale">Société Générale</option>
                  </select>
                  <input
                    type="text"
                    value={bankAccountNumber}
                    placeholder="IBAN"
                    onChange={(e) => setBankAccountNumber(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300 sm:flex-1"
                    disabled={role === "Bidder"}
                  />
                  <input
                    type="text"
                    value={bankAccountName}
                    placeholder="Nom du titulaire"
                    onChange={(e) => setBankAccountName(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300 sm:flex-1"
                    disabled={role === "Bidder"}
                  />
                </div>
                <label className="text-[16px] text-stone-600">
                  Compte de Mobile Money
                </label>
                <input
                  type="text"
                  value={mobileMoneyAccountNumber}
                  placeholder="Numéro de compte"
                  onChange={(e) => setMobileMoneyAccountNumber(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[2px] border-b-[#5C8374] focus:outline-none transition duration-300"
                  disabled={role === "Bidder"}
                />
              </div>
            </div>
            <button
              className="bg-[#5C8374] text-white text-center px-4 py-2 rounded-full mb-2 hover:bg-[#1B4242] transition-colors duration-200 w-40 ml-11 items-center justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? "Chargement..." : "S'inscrire"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
