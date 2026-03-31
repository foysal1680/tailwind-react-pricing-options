import React,{use}from 'react'
import PricingCard from '../PricingCard/PricingCard'

function PricingOptions({PricingOptionsData }) {
    const pricingData=use(PricingOptionsData)
    // console.log(pricingData)
  return (
    <div> 
        <h2>Get Our membership</h2>
       <div className='grid md:grid-cols-3 gap-4'>
         {
            pricingData.map(data => <PricingCard key={data.id} data={data}></PricingCard>)
        }
       </div>
      
    </div>
  )
}

export default PricingOptions