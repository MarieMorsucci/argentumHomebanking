import React, { useEffect, useState } from "react";

function Card({ type, cardholder, color, cvv, number, fromDate, thruDate }) {
  const [colorin, setColorin] = useState("");

  useEffect(() => {
    switch (color) {
      case "SILVER":
        setColorin("from-slate-600 to-slate-400 ");
        break;

      case "GOLDEN":
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
        className={`card relative p-1 min-h-[100px] min-w-[200px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r ${colorin}`}
      >
        <div className="text-right">
          <h2 className="font-bold text-lg">{type}</h2>
        </div>
        <p className="text-2xl  font-medium">{number}</p>
        <div className="flex justify-between gap-5">
          <p className="text-lg font-medium">{cardholder}</p>
          <div>
            <div className="flex-1 flex flex-col justify-end">
              <p className="self-end">From Date</p>
              <p className="self-end">{fromDate}</p>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <p className="self-end">Thru Date</p>
              <p className="self-end">{thruDate}</p>
            </div>
            <p className="text-2xl  font-medium">{cvv}</p>
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
