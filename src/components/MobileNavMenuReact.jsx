import React, { useState } from "react";
import { LIRMI_URL, MENU_ITEMS, REGLAMENTO_URL } from "../config/menuItems";
import { getLinkUrlFirstSegment } from "../utils";

const MobileNavMenuReact = ({ pathName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between px-2 py-3 border border-slate-50 rounded-md">
        <a href="/">
          <img width={35} height={35} src="/logo.png" alt="logo lnsf" />
        </a>
        <button
          className="relative flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ease-in-out origin-center ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ease-in-out origin-center ${
              open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          ></span>
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 mt-2 px-2">
          {MENU_ITEMS.map((item) => {
            const firstSegment = getLinkUrlFirstSegment(item.link);
            return (
              <a
                key={item.link}
                className={
                  firstSegment !== null && pathName === firstSegment
                    ? "text-lnsf-blue font-bold cursor-pointer"
                    : "cursor-pointer hover:text-lnsf-blue"
                }
                href={item.link}
              >
                {item.title}
              </a>
            );
          })}
          <a
            className="px-4 py-2 rounded bg-lnsf-blue text-white hover:bg-lnsf-yellow hover:text-lnsf-blue transition-all hover:font-bold w-max"
            href={LIRMI_URL}
          >
            Estudiantes
          </a>
          <a
            className="px-4 py-2 rounded bg-lnsf-blue text-white hover:bg-lnsf-yellow hover:text-lnsf-blue transition-all hover:font-bold w-max"
            href={REGLAMENTO_URL}
          >
            Reglamento
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenuReact;
