import React from "react";
import { Link } from "react-router-dom";

function product(props) {
  return (
    <Link
      key={props.key}
      class="product-card"
      to={"/products/" + props.product.id}
    >
      <div class="container-image-product-card">
        <img src={props.product.image} />
      </div>
      <div class="card-trip-infos">
        <div>
          <h2>{props.product.name}</h2>
          <p>{props.product.brand}</p>
        </div>
        <h2 class="card-trip-pricing">{props.product.price}</h2>
      </div>
    </Link>
  );
}

export default product;
