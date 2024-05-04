import { useState } from "react";

import "./App.css";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Header from "./Components/Header/Header";
import Nav from "./Components/nav/Nav";
import YearDataChart from "./Components/YearDataChart/MonthlyDataChart";
import Productlinechart from "./Components/ProductLineChart/Productlinechart";
import Composedchart from "./Components/ComposedChart/ComposedChart";
import PieC from "./Components/PieChart/PieChart";
import Dashboard from "./Components/Dashboard/Dashboard";
import Productpage from "./Components/Productpage/Productpage";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductShipping from "./Components/ProductShipping/ProductShipping";

function App() {
  const [count, setCount] = useState(0);

  return (

  //   <Route exact path="/">
  // {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>
    <>
      <div>
        <Header />
        <Nav />   
             {/* <Dashboard /> */}

        <Productpage />
        {/* <AddProduct />
        <ProductShipping />
        <YearDataChart />
        <Composedchart />
        <Signup />
        <PieC />
        <Signin />
        <Productlinechart /> */}
      </div>
    </>
  );
}

export default App;
