import React from "react";
import CardApply from "../components/CardApply";

function CardApplication() {
  
  function getAccount () {
    let click= confirm("Do you want to create another account?")
    if (click){
      console.log("yes")
      setTimeout(() => {
       window.location.pathname = "/home"
      }, 4000);
    }
}

  return (
    <div className="flex flex-col">
    
      <div>
        <CardApply />
      </div>
    </div>
  );
}

export default CardApplication;
