import React from 'react'
import PricingFeature from './PricingFeature'

function PricingCard({ data }) {
  const { title, price, description, features } = data
  return (
    <div className='border-2 border-amber-300 rounded-lg p-5'>
      <div>
        <h1>{title}</h1>
        <h4>{price}</h4>
      </div>
      <div className='bg-amber-400 p-4 rounded-2xl mt-7'>
        <p>{description}</p>
        {
            features.map((feature, index) => (
  <PricingFeature key={index} feature={feature} />
))
        }

      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  )
}

export default PricingCard