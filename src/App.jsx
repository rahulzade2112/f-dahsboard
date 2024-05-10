import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        {/* {token == null && <Login state={setToken} />} */}

        {/* {token != null && ( */}
        <div>
          <div className="appcontainer">
            <div >
              <Header />
               </div>
              <div >
                <Nav />
              </div>
           
            <div className="maincontainer">
              <div className="contentcontainer">
                <Routes>
                  <Route index element={<Dashboard />}></Route>
                  {/* <Route */}
                  {/* path="/account" */}
                  {/* element={<Account /*state={data} */}
                  {/* // ></Route> */}
                <Route
                    path="/products"
                    element={<Productpage /* state={data}*/></Productpage>}
                >
                  </Route>
                  {/* <Route path="//" element={<AddProduct />}></Route> */}
                </Routes>
              </div>
            </div>
          </div>
        </div>
        {/* )} */} 
        {/* <Signin /> */}
      </BrowserRouter>

      {/* <Dashboard /> */}

      {/* <Productpage /> */}
      {/* <AddProduct />
        <ProductShipping />
        <YearDataChart />
        <Composedchart />
        <Signup />
        <PieC />
       
        <Productlinechart /> */}
    </>
  );
}

export default App;
