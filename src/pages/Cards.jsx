
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { NavLink as LinkRR} from "react-router-dom";

function Cards() {
  //Va a venir por prop directamente el usuario
  
    const [data, setData] = useState([]);

    async function getData() {
      try {
        let response = await axios.get("http://localhost:8080/api/clients/1");
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getData();
    }, []);

    return (
      <div className=" p-3 flex flex-col">
        <h1 className="p-3 font-bold text-center text-4xl text-sky-950 ">
          MY CARDS
        </h1>
        <div className="p-2">
          <h2 className="p-2 font-bold text-left text-2xl text-[#A5BDDC] text-teal-500 ">
            DEBIT CARDS
          </h2>
          <div className="flex justify-center">
            <Card type="DEBIT" color="GOLD" />
          </div>
        </div>

        <div className="p-2">
          <h2 className=" p-2 font-bold text-left text-2xl  text-[#A5BDDC] text-teal-500 ">
            CREDIT CARDS
          </h2>
          <div className="flex flex-wrap justify-around gap-2">
            <Card type="CREDIT" color="SILVER" />
            <Card type="CREDIT" color="TITANIUM" />
            <Card type="CREDIT" color="GOLD" />
          </div>
          <div className="flex flex-wrap justify-center p-6">
            <p className="  font-semibold text-center w-full ">Do you need another?</p>
            <button className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <LinkRR className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to="/cards/apply">Apply Now!</LinkRR>
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
