import React from "react";

export const Footer = () => {
  return (
    <footer className="w-4/5 m-auto flex justify-between mt-10 border-t-2 border-gray-400 items-center h-20 pl-10 pr-20">
      <p>Hecho por Franco</p>
      <a
        href="https://github.com/FrancoOrtiz/"
        target="blank"
        className="w-1/4 py-2 shadow-button text-center text-xl rounded-xl bg-gray-300 font-bold border-black border-2"
      >
        Link a mi repo
      </a>
    </footer>
  );
};
