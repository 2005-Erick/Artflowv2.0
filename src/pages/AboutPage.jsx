// src/pages/AboutPage.jsx

import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="bg-[#f4f4f9] bg-[radial-gradient(circle_at_top_left,rgba(0,245,218,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,210,35,0.15),transparent_35%)]">
      <main className="container mx-auto max-w-3xl px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
          Onde a Criatividade Encontra o Mundo
        </h1>
        <p className="text-lg text-gray-500 mb-12 text-center">
          Conheça a história e a missão por trás do ArtFlow.
        </p>

        <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong>ArtFlow</strong> nasceu de uma ideia simples, mas poderosa:
            criar um espaço digital onde a arte, em todas as suas formas,
            pudesse ser não apenas vista, mas sentida, compartilhada e
            celebrada. Em um mundo cada vez mais conectado, acreditamos que a
            criatividade é a linguagem universal que nos une, e que todo artista
            merece uma plataforma para construir seu portfólio e alcançar uma
            audiência global.
          </p>
          <p>
            Seja você um ilustrador que dá vida a mundos fantásticos, um
            fotógrafo que captura a beleza efêmera do cotidiano, um músico que
            compõe a trilha sonora de nossas vidas ou um artista 3D que molda a
            própria imaginação, o ArtFlow é o seu palco. Nossa missão é derrubar
            as barreiras entre o criador e o público, oferecendo uma plataforma
            intuitiva, elegante e poderosa para que seu talento brilhe.
          </p>
          <p>
            Aqui, cada pixel, cada nota musical e cada polígono conta uma
            história. Mais do que uma simples galeria, somos uma comunidade
            vibrante de criadores e entusiastas, um ecossistema onde a
            inspiração flui livremente.
          </p>
          <p className="font-semibold text-gray-800 pt-4">
            Junte-se a nós. Mostre ao mundo o que você pode criar.
          </p>
        </section>

        <div className="text-center mt-16">
          <Link
            to="/auth"
            className="bg-[#13bfc5] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#15dae0] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          >
            Comece a Criar seu Portfólio
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
