// console.log(this.filters.categories);
// console.log(this.filters);

// console.log(this.filters.categories.length);

// if (
//   this.filters.categories.length > 0 &&
//   this.filters.price &&
//   this.filters.brand
// ) {
//   console.log("je suis step 1");
//   this.filters.categories.map((categorie) =>
//     arrayofproduct.push(
//       datas.products.filter((product) => (product.categories = categorie))
//     )
//   );
//   arrayofproduct.filters((product) => {
//     return (
//       product.price <= this.filter.price &&
//       product.price == this.filter.brand
//     );
//   });
// } else if (this.filters.categories.length > 0 && this.filters.price) {
//   console.log("je suis step 2");
//   this.filters.categories.map((categorie) =>
//     arrayofproduct.push(
//       datas.products.filter((product) => (product.categories = categorie))
//     )
//   );
//   arrayofproduct.filters((product) => product.price <= this.filters.price);
// } else if (this.filters.categories.length > 0 && this.filters.brand) {
//   console.log("je suis step 3");
//   this.filters.categories.map((categorie) =>
//     arrayofproduct.push(
//       datas.products.filter((product) => (product.categories = categorie))
//     )
//   );
//   arrayofproduct.filters((product) => product.brand == this.filters.brand);
// } else if ((this.filters.categories.length = 0 && this.filters.brand)) {
//   console.log("je suis step 4");
//   this.filters.brand.map((brand) =>
//     arrayofproduct.push(
//       datas.products.filter((product) => (product.brand = brand))
//     )
//   );
// } else if ((this.filters.categories.length = 0 && this.filters.price)) {
//   console.log("je suis step 5");
//   this.filters.brand.map((price) =>
//     arrayofproduct.push(
//       datas.products.filter((product) => product.price <= price)
//     )
//   );
// } else if (this.filters.categories.length > 0) {
//   console.log(this.filters.categories.length);
//   this.filters.categories.map((categorie) => {
//     console.log(`product ${categorie}`);
//     arrayofproduct.push(
//       datas.products.filter((product) => {
//         console.log(`product ${product}`);
//         console.log(`product ${categorie}`);
//         product.categories = categorie;
//       })
//     );
//   });
// }
