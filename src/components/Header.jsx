import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <header className=" w-2/6 pl-4 bg-cyan-950 opacity-95 flex flex-col justify-center items-center ">
          <img
            src="/assets/images/argentum_logo.png"
            className="h-[300px] object-contain p-2"
            alt="logo"
          />

          <Nav/>

          <div className="h-[100px] flex justify-center items-center rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout rounded-sm"
              width="70"
              height="70"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#E2E8F0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="#9298A5" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </div>
        </header>
  )
}

export default Header