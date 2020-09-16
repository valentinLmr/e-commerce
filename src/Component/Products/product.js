import React from "react";
import { Link } from "react-router-dom";

function product(props) {
  return (
    <Link class="product-card" to={"/products/" + props.id}>
      <div class="container-image-product-card">
        <img src={props.image} />
      </div>
      <div class="card-trip-infos">
        <div>
          <h2>{props.name}</h2>
          <p>{props.brand}</p>
        </div>
        <h2 class="card-trip-pricing">{props.price}</h2>
      </div>
    </Link>
  );
}

export default product;
