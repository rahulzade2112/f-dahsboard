import { useState } from 'react'

import './App.css'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import Header from './Components/Header/Header'
import Nav from './Components/nav/Nav'
import YearDataChart from './Components/YearDataChart/MonthlyDataChart'
import Productlinechart from './Components/ProductLineChart/Productlinechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  {/* <Header/> */}
<Nav/>
<YearDataChart/>

{/* <Signup/>
  <Signin/>   */}
  <Productlinechart/>

</div>
    
    </>
  )
}

export default App
