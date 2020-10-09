import React, { Component } from "react";
import CardProducts from "./cardProducts";
import datas from "../../data";

class productsScreen extends Component {
  state = {
    arrayProducts: datas.products,
  };

  filters = {
    categories: [],
    size: null,
    brand: null,
    color: null,
    price: null,
    data: null,
  };

  splice = (array, value) => {
    const index = array.indexOf(value);
    array.splice(index, 1);
  };

  reducermethod = (array) => {
    return array.reduce((total, next) => total + next);
  };

  updateFilters = (filter, value) => {
    switch (filter) {
      case "categories":
        if (
          this.filters[filter].includes(value) &&
          this.filters[filter].length == 1
        ) {
          this.splice(this.filters[filter], value);
          this.filters.data = datas.products;
        } else if (
          this.filters[filter].includes(value) &&
          this.filters[filter].length > 1
        ) {
          this.splice(this.filters[filter], value);
        } else {
          this.filters.categories.push(value);
        }
        break;

      case "size":
        this.filters[filter] = value.toLowerCase();
        break;

      case "brand":
        this.filters[filter] = value;
        break;
      case "color":
        this.filters[filter] = value;
        break;
      case "price":
        this.filters[filter] = value;

        break;
    }
    this.findProducts();
  };
  
  checkQuantities = (products) => {
    let arrayOfQuantity = [];
    let sum;

    if (this.filters.size) {
      products.map((product) => {
        product.colors.map((color) => {
          arrayOfQuantity.push(this.checkQuantity(color));
        });
        sum = this.reducermethod(arrayOfQuantity);
        arrayOfQuantity = [];
        if (sum == 0) {
          this.splice(products, product);
        }
        this.setState({ arrayProducts: products });
      });
    } else {
      this.setState({ arrayProducts: products });
    }
  };

  checkQuantity = (element) => {
    let result;
    let color;
    if (!this.filters.color) {
      result = element.sizes.find(
        (product) => product.size == this.filters.size
      );
    } else {
      color = element.filter((product) => product.color == this.filters.color);
    }
    return result.quantity;
  };

  resetState = () => {
    let products;
    products = [...datas.products];
    this.setState({ arrayProducts: products });
  };

  findProducts = () => {
    let arrayofproduct = [];
    let initialState = [...datas.products];

    if (
      this.filters.categories.length > 0 &&
      this.filters.price &&
      this.filters.brand
    ) {
      this.filters.categories.map((categorie) =>
        arrayofproduct.push(
          this.filterMethod(initialState, "categories", categorie)
        )
      );
      arrayofproduct = [].concat(...arrayofproduct);
      arrayofproduct = arrayofproduct.filter((product) => {
        return (
          product.price <= this.filters.price &&
          product.brand == this.filters.brand
        );
      });
    } else if (this.filters.categories.length > 0 && this.filters.price) {
      this.filters.categories.map((categorie) =>
        arrayofproduct.push(
          this.filterMethod(initialState, "categories", categorie)
        )
      );
      arrayofproduct = [].concat(...arrayofproduct);
      arrayofproduct = this.filterMethod(
        arrayofproduct,
        "price",
        this.filters.price
      );
    } else if (this.filters.categories.length > 0 && this.filters.brand) {
      this.filters.categories.map((categorie) =>
        arrayofproduct.push(
          this.filterMethod(initialState, "categories", categorie)
        )
      );
      arrayofproduct = [].concat(...arrayofproduct);
      arrayofproduct = this.filterMethod(
        arrayofproduct,
        "brand",
        this.filters.brand
      );
    } else if (this.filters.categories.length == 0 && this.filters.price) {
      arrayofproduct.push(
        this.filterMethod(initialState, "price", this.filters.price)
      );
    } else if (this.filters.categories.length == 0 && this.filters.brand) {
      console.log("i m here");
      arrayofproduct.push(
        this.filterMethod(initialState, "brand", this.filters.brand)
      );
    } else if (this.filters.categories.length > 0) {
      this.filters.categories.map((categorie) => {
        arrayofproduct.push(
          this.filterMethod(initialState, "categories", categorie)
        );
      });
    } else {
      arrayofproduct = initialState;
    }

    const products = [].concat(...arrayofproduct);
    this.checkQuantities(products);

    // this.setState({ arrayProducts: products });
    // this.filters.datas = products;
  };

  filterMethod = (arrayOfProductsTofilter, keyOfProduct, valueOfProduct) => {
    return arrayOfProductsTofilter.filter((product) => {
      return product[keyOfProduct] == valueOfProduct;
    });
  };

  render() {
    return (
      <div>
        <section className="filterbar">
          <form>
            <div className="Searchbar">
              <input type="text" label="What are you looking for ?" />
              <i className="fas fa-search"></i>
            </div>
          </form>
          <ul
            className="filters"
            data-filter="categories"
            onClick={(e) => {
              console.log();
              this.updateFilters(
                e.target.parentElement.dataset.filter,
                e.target.innerText
              );
            }}
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

          <div className="under-filters">
            <form className="under-filters-form">
              <select
                type="select"
                data-filter="size"
                onChange={(e) =>
                  this.updateFilters(e.target.dataset.filter, e.target.value)
                }
              >
                <option>S</option>
                <option>M</option>
                <option>XL</option>
              </select>
              <select
                type="select"
                data-filter="brand"
                onChange={(e) =>
                  this.updateFilters(e.target.dataset.filter, e.target.value)
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
                data-filter="price"
                onChange={(e) =>
                  this.updateFilters(
                    e.target.dataset.filter,
                    parseInt(e.target.value)
                  )
                }
              >
                <option value="20">20 €</option>
                <option value="40">40 €</option>
                <option value="60">60 €</option>
                <option value="80">80 €</option>
                <option value="100">100 €</option>
                <option value="150">150 €</option>
              </select>
              <select
                type="select"
                onChange={(e) => this.updateFilters(e.target.value)}
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
        <div className="main-products-screen">
          <div className="products-display">
            {this.state.arrayProducts.map((product) => (
              <CardProducts product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default productsScreen;
