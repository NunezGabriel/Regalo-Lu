"use client";

import Link from "next/link";

const Aloja = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        className="w-fit h-full object-cover"
        autoPlay
        loop
        controls
        playsInline
      >
        <source src="/aloja.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <button
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded font-bold"
        onClick={() => (window.location.href = "/")}
      >
        Atrás
      </button>
    </div>
  );
};

export default Aloja;
