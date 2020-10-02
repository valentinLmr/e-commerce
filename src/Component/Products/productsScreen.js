import React, { Component } from "react";
import CardProducts from "./cardProducts";
import datas from "../../data";
import data from "./dataProducts";

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

  changeProductCategories = (filter, value) => {
    switch (filter) {
      case "categories":
        if (
          this.filters[filter].includes(value) &&
          this.filters[filter].length == 1
        ) {
          this.splice(this.filters[filter], value);
          this.resetState();
          this.filters.data = datas.products;
        } else if (
          this.filters[filter].includes(value) &&
          this.category.length > 1
        ) {
          this.splice(this.filters[filter], value);
          this.findItems(this.filters[filter], filter);
        } else {
          this.filters[filter].push(value);
          this.findItems(this.filters[filter], filter);
        }
        break;

      case "size":
        this.filters[filter] = value;
        let newState = [...this.filters.data];

        this.filters.data.forEach((e) => {
          console.log(e);
          let result = this.checkQuantity(e, filter, value);
          console.log(result);
          if (!result.includes(true)) {
            this.splice(newState, e);
          }
        });
        this.setState({ arrayProducts: newState });
        break;

      case "brand":
        this.filters[filter] = value;
        this.findItems(Array(this.filters[filter]), filter);
        break;
      case "color":
        this.filters[filter] = value;
        break;
      case "price":
        this.filters[filter] = value;
        break;
    }
  };

  checkQuantity = (e, filter, value) => {
    let ProductColorOption, result;
    result = e.colors.map((el) => {
      ProductColorOption = el.sizes.filter(
        (el) => el[filter] == value.toLowerCase()
      );
      if (ProductColorOption[0].quantity) {
        return true;
      }
    });
    return result;
  };

  resetState = () => {
    let products;
    products = datas.products;
    this.setState({ arrayProducts: products });
  };

  findItems = (filters, value) => {
    console.log("je suis ici");
    console.log(filters);
    let arrayofproduct = [];
    filters.map((e) => {
      if (this.filters.categories.length > 0 && this.filters.data != null) {
        arrayofproduct.push(
          this.filters.data.filter((x) => {
            return x[value] == e;
          })
        );
      } else {
        arrayofproduct.push(
          datas.products.filter((x) => {
            return x[value] == e;
          })
        );
      }
    });
    const products = [].concat(...arrayofproduct);
    this.setState({ arrayProducts: products });
    this.filters.data = products;
  };

  changeState = (newState) => {};

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
            data-filter="categories"
            onClick={(e) => {
              console.log();
              this.changeProductCategories(
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

          <div class="under-filters">
            <form class="under-filters-form">
              <select
                type="select"
                data-filter="size"
                onChange={(e) =>
                  this.changeProductCategories(
                    e.target.dataset.filter,
                    e.target.value
                  )
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
                  this.changeProductCategories(
                    e.target.dataset.filter,
                    e.target.value
                  )
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
                onChange={(e) => this.changeProductCategories(e.target.value)}
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
                onChange={(e) => this.changeProductCategories(e.target.value)}
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
