import React from "react";
import { NavLink as LinkRR } from "react-router-dom";

function Link({ name, href}) {
  return (
    <div className="flex w-full text-white bg-gradient-to-r from-gray-400 via-gray-600 to-sky-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">
      <LinkRR  to={href} className={`w-full text-white rounded  p-2 text-center 
      ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } 
      `}>
        {name}
      </LinkRR>
    </div>
  );
}

export default Link;
