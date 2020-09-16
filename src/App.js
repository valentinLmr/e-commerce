import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Component/homeScreen";
import ProductsScreen from "./Component/productsScreen";
import "./App.css";

function App() {
  const OpensideBar = () =>
    document.querySelector(".sidebar").classList.add("open");
  const RemovesideBar = () =>
    document.querySelector(".sidebar").classList.remove("open");

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={OpensideBar}> Amazonia</button>
          </div>

          <div className="header-links">
            <Link to="/products"> Vêtement</Link>
            <Link to="products/"> Histoire</Link>
            <Link to="/products"> Contact</Link>
            <Link to="/products"> Panier</Link>
          </div>
        </header>
        <aside class="sidebar">
          <h3>Shopping Categories</h3>
          <button class="sidebar-close-button" onClick={RemovesideBar}>
            x
          </button>
          <ul>
            <li>
              <Link to="/">Pants</Link>
            </li>

            <li>
              <Link to="/">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <Route path="/products" component={ProductsScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </main>
        <footer className="footer">
          <p>Thanks for passing By</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
