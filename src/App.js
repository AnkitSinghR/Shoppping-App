import "./App.css";
import React, { createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./services/reducers/index";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Header from "./components/Header";

export const product = createContext();
const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
}

export default App;
