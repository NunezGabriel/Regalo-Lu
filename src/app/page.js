"use client";

import { useState } from "react";
import ParticlesComponent from "@/components/ParticleBg";
import Link from "next/link";

export default function Home() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="grid relative">
      {/* Pantalla completa con el video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            className="w-fit h-full object-cover"
            autoPlay
            loop
            controls
            playsInline
          >
            <source src="/happyB.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <button
            className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded font-bold"
            onClick={() => setShowVideo(false)}
          >
            Has Click Aqui
          </button>
        </div>
      )}

      {/* Contenido de la página */}
      {!showVideo && (
        <>
          <ParticlesComponent id="particles" />
          <section className="text-center mt-16 text-5xl flex flex-col gap-4">
            <h1 className="font-light">Happy</h1>
            <h1 className="font-bold">Birthday</h1>
            <h1 className="font-bold rainbow-text">Luu!</h1>
          </section>

          <section className="text-center mx-auto max-w-96 px-10 mt-16 text-xl flex flex-col gap-4">
            <p className="font-light">
              Un feliz cumpleaños a una futura gran developer. Eres una gran
              amiga y compañera de trabajo, realmente aprecio tu amistad y
              admiro muchas cosas de ti. Gracias por devolverme esa cultura de
              pedalear y ojalá lo pases muy bonito el dia de hoy (psdata: Ojalá
              no nos toque hacer nunca un trabajo en Java 🤢)
            </p>
          </section>

          <Link
            href={"/aloja"}
            className="border border-white text-white font-bold py-2 px-4 rounded mt-16 mx-auto mb-6"
          >
            Click Saludo Especial
          </Link>
        </>
      )}
    </div>
  );
}
