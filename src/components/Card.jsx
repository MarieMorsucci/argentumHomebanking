import React, { useEffect, useState } from "react";

function Card({ type, cardholder, color, cvv, number, fromDate, thruDate }) {
  const [colorin, setColorin] = useState("");
  const [isToggled, setIsToggled] = useState(true);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

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
    <div className={`card p-3 md:h-[250px] md:w-[400px]   
          px-4 py-2 text-white rounded-3xl  
          bg-gradient-to-r ${colorin}`}>
      <div
        className="flex flex-col justify-around gap-2"
      >
          <h2 className="font-bold md:text-lg">{type}</h2>
          <p className="md:text-2xl  font-medium">{number}</p>
        <div className="flex flex-col justify-between gap-5">
          
          <div className="flex flex-wrap p-2 gap-2">
            <div className="flex-1 flex flex-wrap gap-2 justify-center">
              <p className="text-sm self-end w-full text-center font-bold">From Date</p>
              <p className="text-sm self-end w-full text-center font-bold">{fromDate}</p>
            </div>
            <div className="flex-1 flex flex-col  p-2 gap-2 justify-center">
              <p className="text-sm self-end w-full text-center font-bold">Thru Date</p>
              <p className="text-sm self-end w-full text-center font-bold">{thruDate}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className=" text-white hover:text-white border  hover:bg-slate-700 focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-red-200 dark:focus:ring-red-200"
          >
            `{isToggled ? "Show cvv" : cvv}`
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
