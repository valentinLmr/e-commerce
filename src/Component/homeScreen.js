import React from "react";

function homeScreen(props) {
  return (
    <div className="main-home-page">
      <section className="banner">
        <a href="product"> About us</a>
      </section>

      <section className="promos-section">
        <a className="promos dress">
          <img src="/image/dress.jpg" />
          <h1>Dress & SKirt</h1>
        </a>
        <a className="promos pant">
          <img src="/image/pants.jpeg" />
          <h1>Pants</h1>
        </a>
        <a className="promos vest">
          <img src="/image/vest.jpeg" />
          <h1>Top</h1>
        </a>
        <a className="promos accesories">
          <img src="/image/accesories.jpg" />
          <h1>Accesories</h1>
        </a>
      </section>

      <section className="products">
        <div className="carouselle-new-products">
          <h2>New collection</h2>
          <a>learn More</a>
        </div>
      </section>
    </div>
  );
}

export default homeScreen;
