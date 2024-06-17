import React from "react";
import axios from "axios";
import CurrentAccountDetail from "../components/CurrentAccountDetail";
import TableTransactions from "../components/TableTransactions";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TransactionRow from "../components/TransactionRow";

function AccountDetails() {
  //aca rescato el path del id
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Simular una llamada asíncrona con setTimeout
    setTimeout(() => {
      getAccounts(); // Llamada a la función que obtiene los datos
    }, 2000); // Simular un tiempo de carga de 2 segundos
  }, []);

  const [loading, setLoading] = useState(true);

  const [account, setAccount] = useState({
    id: "",
    numberAccount: "",
    balance: 0,
    transactions: {},
  });

  //usar ruta del reducer tal cual es
  const token = useSelector((store) => store.authReducer.user.token);
  //  console.log(token);

  async function getAccounts() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/clients/current/accounts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let data = response.data;

      // console.log(data);

      setAccount(data.find((ac) => ac.id == id));

      console.log(account);

      //setear en falso el cargar
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <CurrentAccountDetail
        numberAccount={account.numberAccount}
        balance={account.balance}
      />
      <TableTransactions>
        {loading ? (
          <tr>
            <div
              class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
 aspect-square w-8 flex justify-center items-center text-yellow-700"
            ></div>
          </tr>
        ) : account.transactions ? (
          account.transactions.map((tran) => (
            <TransactionRow
              key={tran.id}
              date={tran.date}
              type={tran.type}
              amount={tran.amount}
              description={tran.description}
              id={tran.id}
            />
          ))
        ) : (
          <tr>No transactions in this account</tr>
        )}
      </TableTransactions>
    </div>
  );
}

export default AccountDetails;
