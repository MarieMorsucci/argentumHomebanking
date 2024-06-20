import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { NavLink as LinkRR } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

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
     // console.log(data);
      setCards(data);
     // console.log(cards);

      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something failed`,
        footer: "",
      });
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="">
        <img
          src="/assets/images/im1.jpg"
          alt="image_bank"
          className="h-40 w-full object-cover"
        />
        <h2 className="p-2 font-bold text-center text-2xl text-sky-950 ">
          DEBIT CARDS
        </h2>
        <div className="flex flex-wrap justify-around p-4 gap-6 bg-slate-900 opacity-70">
          {loading ? (
            <div
              class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
            aspect-square w-8 flex justify-center items-center text-yellow-700"
            ></div>
          ) : cards ? (
            cards.map(
              (card) =>
                card.type == "DEBIT" && (
                  <Card
                    key={card.id}
                    type={card.type}
                    cardholder={card.cardHolder}
                    color={card.color}
                    cvv={card.cvv}
                    number={card.number}
                    fromDate={card.fromDate}
                    thruDate={card.thruDate}
                  />
                )
            )
          ) : (
            <p>You dont have this type of card associated</p>
          )}
        </div>
      </div>

      <div className="">
        <h2 className="p-2 font-bold text-center text-2xl text-sky-950  ">
          CREDIT CARDS
        </h2>
        <div className="flex flex-wrap justify-around p-4 gap-6 bg-slate-900 opacity-70">
          {loading ? (
            <div
              class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
            aspect-square w-8 flex justify-center items-center text-yellow-700"
            ></div>
          ) : cards ? (
            cards.map(
              (card) =>
                card.type == "CREDIT" && (
                  <Card
                    key={card.id}
                    type={card.type}
                    cardholder={card.cardHolder}
                    color={card.color}
                    cvv={card.cvv}
                    number={card.number}
                    fromDate={card.fromDate}
                    thruDate={card.thruDate}
                  />
                )
            )
          ) : (
            <p>You dont have this type of card associated</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center p-6">
          <p className="  font-semibold text-center w-full ">
            Do you need another?
          </p>
          <button className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
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
