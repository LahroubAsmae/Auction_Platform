import { useEffect } from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const etapes = [
    {
      icon: <FaUser />,
      title: "Inscription Utilisateur",
      description:
        "Les utilisateurs doivent s'inscrire ou se connecter pour effectuer des opérations telles que la publication d'enchères, les enchères sur des articles, l'accès au tableau de bord et l'envoi de preuve de paiement.",
    },
    {
      icon: <FaGavel />,
      title: "Sélection de Rôle",
      description:
        'Les utilisateurs peuvent s’inscrire soit en tant qu’"Enchérisseur" soit en tant que "Vendeur aux enchères". Les enchérisseurs peuvent enchérir sur des articles, tandis que les vendeurs peuvent publier des articles.',
    },
    {
      icon: <FaEnvelope />,
      title: "Notification de l'Enchère Gagnante",
      description:
        "Après avoir remporté un article, l'enchérisseur le plus élevé recevra un e-mail avec les informations sur le mode de paiement du vendeur, y compris les virements bancaires, Easypaisa et PayPal.",
    },
    {
      icon: <FaDollarSign />,
      title: "Paiement de la Commission",
      description:
        "Si l'enchérisseur paie, le vendeur doit verser 5% de ce paiement à la plateforme. En cas de non-paiement, il sera impossible de publier de nouveaux articles, et une notification légale sera envoyée.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Preuve de Paiement",
      description:
        "La plateforme reçoit une capture d'écran de la preuve de paiement ainsi que le montant total envoyé. Une fois approuvée par l'administrateur, la commission impayée du vendeur sera ajustée en conséquence.",
    },
    {
      icon: <FaRedo />,
      title: "Republication des Articles",
      description:
        "Si l'enchérisseur ne paie pas, le vendeur peut republier l'article sans frais supplémentaires.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full h-fit px-5 pt-20 lg:pl-[60px] flex flex-col min-h-screen py-4 justify-center items-center text-center">
      <h1 className="text-[#333333] text-2xl font-bold mt-6 mb-4 min-[480px]:text-3xl md:text-4xl xl:text-5xl">
        Découvrez Comment Fonctionne ChicBid
      </h1>
      <div className="flex flex-col gap-6 my-5">
        {etapes.map((element, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 lg:p-5 flex flex-col gap-3 group hover:bg-[#5C8374] transition-all duration-300" // Teinte vert clair pour hover
          >
            <div className="bg-black text-white p-2 text-lg rounded-full w-fit mx-auto group-hover:bg-[#5C8374] transition-all duration-300">
              {element.icon}
            </div>
            <h3 className="text-[#333333] text-lg font-semibold min-[480px]:text-lg md:text-xl lg:text-2xl">
              {element.title}
            </h3>
            <p className="text-sm text-gray-700 group-hover:text-black transition-all duration-300">
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
