import { createAuction } from "@/store/slices/auctionSlice";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const CreateAuction = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const auctionCategories = [
    "Électronique",
    "Meubles",
    "Art & Antiquités",
    "Bijoux & Montres",
    "Automobiles",
    "Immobilier",
    "Objets de Collection",
    "Mode & Accessoires",
    "Souvenirs Sportifs",
    "Livres & Manuscrits",
  ];

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
    };
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auction);

  const handleCreateAuction = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("condition", condition);
    formData.append("startingBid", startingBid);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    dispatch(createAuction(formData));
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
  }, [isAuthenticated, user, navigateTo]);

  return (
    <div className="w-full min-h-screen mt-20 bg-[#f9fafb] flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-4xl px-8 py-10 rounded-lg shadow-lg">
        <form className="flex flex-col gap-8" onSubmit={handleCreateAuction}>
          {/* Détails de la Vente */}
          <div>
            <p className="font-semibold text-2xl text-[#5C8374] mb-4">
              Détails de la Vente
            </p>

            {/* Titre et Catégorie */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">Titre</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors"
                  placeholder="Entrez le titre de l'enchère"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors"
                >
                  <option value="">Sélectionner une catégorie</option>
                  {auctionCategories.map((element) => (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* État et Mise de départ */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">État</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  required
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors"
                >
                  <option value="">Sélectionner l'état</option>
                  <option value="Neuf">Neuf</option>
                  <option value="Usagé">Usagé</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">
                  Mise de départ (dh)
                </label>
                <input
                  type="number"
                  value={startingBid}
                  onChange={(e) => setStartingBid(e.target.value)}
                  required
                  min="0"
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors"
                  placeholder="Entrez la mise de départ"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-[#5C8374] mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors resize-none"
                rows={6}
                placeholder="Décrivez les détails de l'article"
              />
            </div>

            {/* Heure de début et de fin */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">Heure de début</label>
                <DatePicker
                  selected={startTime}
                  onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  required
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors w-full"
                  placeholderText="Sélectionnez la date et l'heure de début"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[#5C8374] mb-2">Heure de fin</label>
                <DatePicker
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  required
                  className="text-[#333] py-3 px-4 bg-transparent border border-[#5C8374] rounded-md focus:outline-none focus:border-[#466857] transition-colors w-full"
                  placeholderText="Sélectionnez la date et l'heure de fin"
                  minDate={startTime}
                />
              </div>
            </div>
          </div>

          {/* Image de l'article */}
          <div>
            <p className="font-semibold text-2xl text-[#5C8374] mb-4">
              Image de l'article
            </p>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[#5C8374] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt={title}
                      className="w-44 h-auto mb-4"
                    />
                  ) : (
                    <>
                      <svg
                        className="w-12 h-12 mb-4 text-[#5C8374]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-lg text-[#5C8374]">
                        <span className="font-semibold">
                          Cliquez pour télécharger
                        </span>{" "}
                        ou glissez-déposez
                      </p>
                      <p className="text-sm text-[#5C8374]">
                        PNG, JPG, JPEG (MAX. 5Mo)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={imageHandler}
                  required={!imagePreview}
                />
              </label>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5C8374] text-white py-3 px-6 rounded-md hover:bg-[#466857] transition-colors duration-200 text-lg font-semibold"
              disabled={loading}
            >
              {loading ? "Publication en cours..." : "Publier la Vente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuction;
