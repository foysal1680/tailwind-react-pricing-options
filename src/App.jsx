

import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBar from './component/NavBar/NavBar'
import PricingOptions from './component/PricingOptions/PricingOptions'
import ResultChat from './component/ResultChart/ResultChat'

const PricingOptionsData =fetch("pricing.json")
    .then(res => res.json())

function App() {


  return (
    <>
    <h1>Welcome to Vite</h1>
      <NavBar></NavBar>

      {/* <DaisyNav></DaisyNav> */}
      <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
        <PricingOptions PricingOptionsData ={PricingOptionsData} ></PricingOptions>
      </Suspense>
      <ResultChat></ResultChat>
    </>
  )
}

export default App
