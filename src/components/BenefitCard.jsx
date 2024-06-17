import React from 'react'

function BenefitCard({ benefit }) {
  return (
    <div className="w-4/5 h-44 md:h-60 md:w-3/12 bg-slate-400 bg-opacity-90 p-2 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h2 className="md:text-2xl font-bold mb-2">{benefit.title}</h2>
      <p>{benefit.description}</p>
    </div>
  )
}

export default BenefitCard