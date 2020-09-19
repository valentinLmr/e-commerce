import React from "react";
import data from "../Products/dataProducts";
import "./Product.css";

function product(props) {
  console.log(props.match.params.id);
  console.log(data);

  const product = data.products.find((x) => x.id == props.match.params.id);

  return (
    <div class="product-display-screen">
      <aside class="product-side-pictures">
        <div class="container-photos-product-sider">
          <img className="photo" src={product.image}></img>
          <img className="photo" src={product.image}></img>
          <img className="photo" src={product.image}></img>
          <img className="photo" src={product.image}></img>
          <img className="photo" src={product.image}></img>
        </div>
      </aside>
      <div class="product-picture-selected">
        <img className="central-photo" src={product.image}></img>
      </div>
      <aside class="product-side-infos">
        <div class="product-infos">
          <div class="product-name">
            <h4>{product.band}</h4>
            <h1>{product.name}</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ textDecoration: "underline" }}>Détails</p>
              <p>5/5</p>
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
