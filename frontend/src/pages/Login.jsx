import { login } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated]);

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-10 flex flex-col gap-8">
        <h1 className="text-[#1B4242] text-4xl font-bold text-center mb-4">
          Connexion
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-lg py-3 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition duration-300"
              required
              placeholder="Entrez votre email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-lg py-3 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C8374] transition duration-300"
              required
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button
            className="bg-[#5C8374] font-semibold hover:bg-[#1B4242] transition-all duration-300 text-xl py-2 rounded-md text-white"
            type="submit"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Pas encore de compte?{" "}
          <a
            href="/sign-up"
            className="text-[#5C8374] font-semibold hover:underline"
          >
            Inscrivez-vous
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
