import React, { Component } from "react";
import CardProducts from "./cardProducts";
import datas from "../../data";
import data from "./dataProducts";

class productsScreen extends Component {
  state = {
    data,
  };

  category = [];

  filteredProducts;

  splice = (array, value) => {
    const index = array.indexOf(value);
    this.category.splice(index, 1);
  };

  changeState = (target) => {
    let products;

    if (this.category.includes(target)) {
      this.splice(this.category, target);
    } else {
      this.category.push(target);
    }
    products = this.findItems(datas, this.category);
    this.setState({ data: { products } });
  };

  findItems = (datas, filters) => {
    // filterToString = filter.toString();
    // console.log(filterToString.class);
    if (filters.length > 0) {
      filters.forEach((e) => {
        this.filteredProducts = datas.products.filter((x) => x.categories == e);
      });
    } else {
      this.filteredProducts = datas.products;
    }

    return this.filteredProducts;
  };

  render() {
    return (
      <div>
        <section class="filterbar">
          <form>
            <div class="Searchbar">
              <input type="text" value="What are you looking for ?" />
              <i class="fas fa-search"></i>
            </div>
          </form>
          <ul
            class="filters"
            onClick={(e) => this.changeState(e.target.innerText)}
          >
            <li>Robe</li>
            <li>Jupe</li>
            <li>Tee-shirt</li>
            <li>Sweatshirt</li>
            <li>Pants</li>
            <li>Jean</li>
            <li>Vest</li>
            <li>overalls</li>
          </ul>

          <div class="under-filters">
            <form class="under-filters-form">
              <select type="select" value="Size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <select type="select" value="Brand">
                <option>Adidas</option>
                <option>Nike</option>
                <option>Vans</option>
                <option>Veja</option>
                <option>Converse</option>
              </select>
              <select type="select" value="Price">
                <option>20 €</option>
                <option>40 €</option>
                <option>60 €</option>
                <option>80 €</option>
                <option>100 €</option>
                <option>150 €</option>
              </select>
              <select type="select" value="color">
                <option>Blue</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>Orange</option>
                <option>Green</option>
                <option>Black</option>
              </select>
            </form>
          </div>
        </section>
        <div class="main-products-screen">
          <div class="products-display">
            {this.state.data.products.map((product) => (
              <CardProducts product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default productsScreen;
