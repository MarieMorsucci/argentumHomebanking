import React from 'react'
import Link from './Link'
import { links } from '../utils/links'

function Nav() {
  return (
    <nav className=" w-full flex flex-col md:w-10/12  gap-5">
   
      {links.map(el => <Link key={el.name} href={el.href} name={el.name} />)}
   

  </nav>
  )
} 

export default Nav