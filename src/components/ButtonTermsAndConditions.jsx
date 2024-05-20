import React from "react";

function ButtonTermsAndConditions() {
  return (
    <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
      Accept Terms and Conditions
      <div className="relative inline-block">
        <input
          className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          type="checkbox"
        ></input>
        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-graborder-gray-200"></span>
      </div>
    </label>
  );
}

export default ButtonTermsAndConditions;
