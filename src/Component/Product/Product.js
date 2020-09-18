import React from "react";
import data from "../Products/dataProducts";
import "./Product.css";

function product(props) {
  console.log(props.match.params.id);

  const product = data.products.find((x) => x.id == props.match.params.id);
  return (
    <div class="product-display-screen">
      <aside class="product-side-pictures">
        <div class="container-photos-product-sider">
          <div class="photo"></div>
          <div class="photo"></div>
          <div class="photo"></div>
          <div class="photo"></div>
          <div class="photo"></div>
        </div>
      </aside>
      <div class="product-picture-selected">
        <div class="central-photo"></div>
      </div>
      <aside class="product-side-infos">
        <div class="product-infos">
          <div class="product-name">
            <h4>Brand Name</h4>
            <h1>Name</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ textDecoration: "underline" }}>Détails</p>
              <p>Rating</p>
            </div>
          </div>
          <div class="details-product">
            <div class="detail couleur-product">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="circle-color-product"></div>
                <p>Rose</p>
              </div>
              <div class="setting-color-product">
                <p>Nb of color</p>
                <i class="fas fa-caret-down"></i>
              </div>
            </div>

            <div
              class="detail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Taille</p>
              <div class="setting-color-product">
                <p>L</p>
                <i class="fas fa-caret-down"></i>
              </div>
            </div>
            <div class="detail">
              <p>Guide des tailles</p>
            </div>
            <div class="detail">
              <input type="text" value="Code promo" />
            </div>

            <h2>59.99€</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className=" button-product-add
            
          "
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default product;
