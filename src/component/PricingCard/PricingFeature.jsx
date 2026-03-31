import { CircleCheckBig } from 'lucide-react'
import React from 'react'

function PricingFeature({feature}) {
    
    // console.log(feature)
    
  return (
  <p className='flex'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature.name}</p>

  
  )
}

export default PricingFeature