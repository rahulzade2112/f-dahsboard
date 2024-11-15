import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Productpage from "./Components/Productpage/Productpage";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductShipping from "./Components/ProductShipping/ProductShipping";
import Header from "./Components/Common/Header/Header";
import Nav from "./Components/Common/nav/Nav";
import Account from "./Components/Account/Account";

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
            <div>
              <Header />
            </div>
            <div>
              <Nav />
            </div>

            <div className="maincontainer">
              <div className="contentcontainer">
                <Routes>
                  <Route index element={<Dashboard />}></Route>
                  <Route path="/account" element={<Account/>}></Route>

                  <Route
                    path="/products"
                    element={<Productpage /* state={data}*/></Productpage>}
                  ></Route>
                  <Route path="/addproduct" element={<AddProduct />}></Route>
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
