import React from 'react'
import Link from './Link'
import { links } from '../utils/links'

function Nav() {
  return (
    <nav className=" h-4/5 w-full flex flex-col justify-center p-2 gap-5">
   
      {links.map(el => <Link key={el.name} href={el.href} name={el.name} />)}
   

  </nav>
  )
} 

export default Nav