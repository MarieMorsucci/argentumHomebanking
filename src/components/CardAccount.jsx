import React from 'react'

function CardAccount({numberAccount, amount, dateCreation}) {
  return (
    <div className="w-[400px] h-[180px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex justify-center text-white bg-gradient-to-r from-teal-600 via-teal-700 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">
          <div>
            <div className="flex p-1 gap-2 justify-center text-white">
              <h2>Number Account: </h2>
              <p>{numberAccount}</p>
            </div>
            <div className="flex p-1 gap-2 justify-center  text-white">
              <p className="text-3xl">$ {amount}</p>
            </div>
            <div className="flex p-1 gap-2 justify-center  text-white">
              <h2>Creation Date: </h2>
              <p>{dateCreation}</p>
            </div>
            <div className='pt-4'>
                <button type="button" className="text-gray-900 pt-2 bg-gradient-to-r from-sky-900 via-lime-500 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-[35px]">Detalles</button>
            </div>
          </div>
        </div>
  )
}

export default CardAccount