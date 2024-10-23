import React, { useEffect } from "react";

const About = () => {
  const valeurs = [
    {
      id: 1,
      title: "Intégrité",
      description:
        "Nous privilégions l'honnêteté et la transparence dans toutes nos transactions, garantissant une expérience d'enchères équitable et éthique pour tous.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "Nous améliorons continuellement notre plateforme avec des technologies et fonctionnalités de pointe pour offrir aux utilisateurs un processus d'enchères fluide et efficace.",
    },
    {
      id: 3,
      title: "Communauté",
      description:
        "Nous favorisons une communauté dynamique d'acheteurs et de vendeurs partageant une passion pour la découverte et l'offre d'objets exceptionnels.",
    },
    {
      id: 4,
      title: "Orientation client",
      description:
        "Nous nous engageons à offrir un support client exceptionnel et des ressources pour aider les utilisateurs à naviguer facilement dans le processus d'enchères.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 py-10">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-[#333333] text-4xl font-bold mt-20 mb-6">
          À propos de nous
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Bienvenue sur ChicBid, la destination ultime pour les enchères en
          ligne et l'excitation des enchères. Fondée en 2024, nous nous
          engageons à fournir une plateforme dynamique et conviviale pour que
          les acheteurs et les vendeurs se connectent, explorent et effectuent
          des transactions dans un environnement sécurisé et fluide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-[#1B4242] text-2xl font-semibold mb-2">
            Notre Mission
          </h3>
          <p className="text-lg text-gray-700">
            Chez ChicBid, notre mission est de révolutionner la manière dont les
            gens achètent et vendent des objets en ligne. Nous nous efforçons de
            créer un marché engageant et digne de confiance qui permet aux
            individus et aux entreprises de découvrir des produits uniques, de
            prendre des décisions éclairées et de profiter du frisson des
            enchères compétitives.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-[#1B4242] text-2xl font-semibold mb-2">
            Nos Valeurs
          </h3>
          <ul className="list-inside">
            {valeurs.map((element) => (
              <li className="text-lg text-gray-700 mb-2" key={element.id}>
                <span className="font-bold">{element.title}</span> :{" "}
                {element.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-[#1B4242] text-2xl font-semibold mb-2">
            Notre Histoire
          </h3>
          <p className="text-lg text-gray-700">
            Fondée par Lahroub Asmae, ChicBid est née de la passion de connecter
            les gens à des objets uniques et précieux. Forts de plusieurs années
            d'expérience dans le secteur des enchères, notre équipe s'engage à
            créer une plateforme offrant une expérience d'enchères inégalée aux
            utilisateurs du monde entier.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 md:col-span-2 lg:col-span-1">
          <h3 className="text-[#1B4242] text-2xl font-semibold mb-2">
            Rejoignez-nous
          </h3>
          <p className="text-lg text-gray-700">
            Que vous cherchiez à acheter, à vendre ou simplement à explorer,
            ChicBid vous invite à rejoindre notre communauté grandissante
            d'amateurs d'enchères. Découvrez de nouvelles opportunités, dénichez
            des trésors cachés, et vivez l'excitation de remporter votre
            prochaine grande trouvaille.
          </p>
        </div>
      </div>

      <p className="text-[#1B4242] text-lg font-bold mt-10 text-center px-4">
        Merci d'avoir choisi ChicBid. Nous avons hâte de faire partie de votre
        parcours d'enchères !
      </p>
    </section>
  );
};

export default About;
