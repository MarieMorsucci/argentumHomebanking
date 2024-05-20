import React, { useEffect, useState } from "react";
import CardAccount from "../components/CardAccount";
import axios from "axios";
import { NavLink as LinkRR } from "react-router-dom";

//Va a venir por prop directamente el usuario
function Home() {
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
 }, [])


  return (
    
    <div className="h-full flex flex-col">
 
      <div  className="w-full h-1/6 p-6">
        
        <h1 className="font-bold text-center text-4xl text-[#A5BDDC] text-sky-950 ">
          BIENVENIDO A ARGENTUM BANK !!
        </h1>
      </div>
      <div className="h-4/5 flex flex-wrap gap-5 p-2 justify-around">
        <CardAccount
          numberAccount={"VIN-001"}
          amount={250000}
          dateCreation={"25/04/2014"}
        />
        <CardAccount
          numberAccount={"VIN-002"}
          amount={350000}
          dateCreation={"27/07/2021"}
        />
        
      </div>
      <div className="flex flex-wrap justify-center p-6">
        <p className="  font-semibold text-center w-full ">
          Do you need another account?
        </p>
        <button className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <LinkRR className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to="#">Get Another Account</LinkRR>
        </button>
      </div>
 
    </div>
  );
}

export default Home;
