import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { NavLink as LinkRR } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Cards() {
  //Va a venir por prop directamente el usuario

  useEffect(() => {
    setTimeout(() => {
      
      getCards();

    }, 2000);
  }, []);

  const [loading, setLoading] = useState(true);

  const [cards, setCards] = useState({
    id: "",
    type: "",
    cardholder: 0,
    color: "",
    number: "",
    cvv: 0,
    fromDate: "",
    thruDate: "",
  });

  const token = useSelector((store) => store.authReducer.user.token);

  async function getCards() {
    try {
      let response = await axios.get(
        "http://localhost:8080/api/clients/current/cards",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let data = response.data;
      console.log(data);
      setCards(data);
      console.log(cards)

      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" p-3 flex flex-col justify-center">
      <h1 className="p-3 font-bold text-center text-4xl text-sky-950 ">
        MY CARDS
      </h1>
      <div className="p-5">

        <h2 className="p-2 font-bold text-left text-2xl text-[#A5BDDC] text-teal-500 ">
          DEBIT CARDS
        </h2>
        <div className="flex flex-wrap justify-around gap-2">

          {loading? 
          (<div class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
            aspect-square w-8 flex justify-center items-center text-yellow-700"></div>)
          :(
            cards ? (
              cards.map((card) => card.type =='DEBIT' &&
              (               
                     <Card key={card.id}  type={card.type} cardholder={card.cardHolder} color={card.color} cvv={card.cvv}
                      number={card.number} fromDate={card.fromDate} thruDate={card.thruDate} />)
              )
            ) 
            : 
            (
              <p>You dont have this type of card associated</p>
            )

          )
          }

        </div>
      </div>

      <div className="p-2">
        <h2 className=" p-2 font-bold text-left text-2xl  text-[#A5BDDC] text-teal-500 ">
          CREDIT CARDS
        </h2>
        <div className="flex flex-wrap justify-around gap-2">
           {loading? 
          (<div class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
            aspect-square w-8 flex justify-center items-center text-yellow-700"></div>)
          :(
            cards ? (
              cards.map((card) => card.type =='CREDIT' &&
              (               
                     <Card key={card.id}  type={card.type} cardholder={card.cardHolder} color={card.color} cvv={card.cvv}
                      number={card.number} fromDate={card.fromDate} thruDate={card.thruDate} />)
              )
            ) 
            : 
            (
              <p>You dont have this type of card associated</p>
            )

          )
          }
        </div>

        <div className="flex flex-wrap justify-center p-6">
          <p className="  font-semibold text-center w-full ">
            Do you need another?
          </p>
          <button className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <LinkRR
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/cards/apply"
            >
              Apply Now!
            </LinkRR>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
