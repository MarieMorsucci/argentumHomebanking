import React from "react";

function Main({children}) {
  return (
    <main className="bg-slate-200 min-h-[90vh] w-full ">
      {children}
    </main>
  );
}

export default Main;
