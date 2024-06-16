import React from "react";
import { NavLink as LinkRR } from "react-router-dom";

function Link({ name, href}) {
  return (
    <div className="flex w-11/12 text-white bg-gradient-to-r from-gray-400 via-gray-600 to-sky-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">
      <LinkRR  to={href} className="w-full text-white rounded  p-2 text-center "  style={({ isActive }) => {return { fontWeight: isActive ? "bold 15px" : "", color: isActive ? "white" : ""}}}>
        {name}
      </LinkRR>
    </div>
  );
}

export default Link;
