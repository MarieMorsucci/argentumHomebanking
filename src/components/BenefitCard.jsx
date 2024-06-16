import React from 'react'

function BenefitCard({ benefit }) {
  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h2 className="text-2xl font-bold mb-2">{benefit.title}</h2>
      <p>{benefit.description}</p>
    </div>
  )
}

export default BenefitCard