import React, { Component } from "react";
import CardProducts from "./cardProducts";
import datas from "../../data";
import data from "./dataProducts";

class productsScreen extends Component {
  state = {
    datas,
  };

  category = [];

  filteredProducts;

  splice = (array, value) => {
    const index = array.indexOf(value);
    this.category.splice(index, 1);
  };

  changeProductCategories = (target) => {
    let products;

    if (this.category.includes(target)) {
      this.splice(this.category, target);
    } else {
      this.category.push(target);
    }
    products = this.findItems(this.category, "categories");
    this.setState({ datas: { products } });
  };

  filtersForProducts = (filter, value) => {
    this.findItems = (filter, value);
  };

  findItems = (filters, value) => {
    // filterToString = filter.toString();
    // console.log(filterToString.class);
    console.log(this.category);
    if (this.category.length > 0) {
      filters.map((e) => {
        this.filteredProducts = this.state.datas.products.filter(
          (x) => x[value] == e
        );
      });
    } else {
      this.filteredProducts = datas.products;
    }

    return this.filteredProducts;
  };

  render() {
    console.log(this.state);
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
            onClick={(e) => this.changeProductCategories(e.target.innerText)}
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
              <select
                type="select"
                onChange={(e) =>
                  this.filtersForProducts("Size", e.target.value)
                }
              >
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <select
                type="select"
                onChange={(e) =>
                  this.filtersForProducts("Brand", e.target.value)
                }
              >
                <option>Adidas</option>
                <option>Nike</option>
                <option>Vans</option>
                <option>Veja</option>
                <option>Converse</option>
              </select>
              <select
                type="select"
                onChange={(e) =>
                  this.filtersForProducts("Price", e.target.value)
                }
              >
                <option>20 €</option>
                <option>40 €</option>
                <option>60 €</option>
                <option>80 €</option>
                <option>100 €</option>
                <option>150 €</option>
              </select>
              <select
                type="select"
                onChange={(e) =>
                  this.filtersForProducts("color", e.target.value)
                }
              >
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
            {this.state.datas.products.map((product) => (
              <CardProducts product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default productsScreen;
