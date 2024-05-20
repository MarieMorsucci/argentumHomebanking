import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = () => {
  //   const [number, SetNumber] = useState("");
  //   const [name, SetName] = useState("");
  //   const [date, SetDate] = useState("");
  //   const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");

  return (
    <>
      <div id="PaymentForm">
        <Cards
          cvc={"256"}
          expiry={"28/02/2025"}
          focused={"name"}
          name={"Marie"}
          number={"4901116245"}
        />
      </div>
    </>
  );
};
export default CreditCard;
