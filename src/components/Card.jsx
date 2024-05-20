import React, { useEffect, useState } from "react";

function Card({ color, type }) {
  const [colorin, setColorin] = useState("");

  useEffect(() => {
    switch (color) {
      case "SILVER":
        setColorin("from-slate-600 to-slate-400 ");
        break;

      case "GOLD":
        setColorin("from-yellow-700 to-yellow-400");
        break;

      case "TITANIUM":
        setColorin("from-black to-gray-800");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="p-3">
      <div
        className={`card relative p-1 h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r ${colorin}`}
      >
        <div className="text-right">
          <h2 className="font-bold text-lg">{type}</h2>
        </div>
        <p className="text-2xl  font-medium">5430 4900 3232 9755</p>
        <div className="flex justify-between gap-5">
          <p className="text-lg font-medium">NOMBRE APELLIDO</p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="self-end">Valid Date</p>
            <p className="self-end">2/14/2024</p>
          </div>
          <div className="self-center">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="/public/assets/images/argentum_logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
