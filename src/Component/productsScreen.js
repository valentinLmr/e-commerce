import React from "react";

function productsScreen(props) {
  return (
    <div>
      <section class="filterbar">
        <form>
          <div class="Searchbar">
            <input type="text" value="What are you looking for ?" />
            <i class="fas fa-search"></i>
          </div>
        </form>
        <ul class="filters">
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
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>

          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
          <div class="product-card">
            <div class="container-image-product-card">
              <img src="/image/OIP.jpeg" />
            </div>
            <div class="card-trip-infos">
              <div>
                <h2>Bohemian dress</h2>
                <p>Banditas</p>
              </div>
              <h2 class="card-trip-pricing">59.99€</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productsScreen;
