let item_1 = {
  id: 101,
  img: "./../assets/images1.jpeg",
  name: "iphone",
  price: 50000,
  qty: 1,
};
let item_2 = {
  id: 102,
  img: "./../assets/images2.jpeg",
  name: "samsung",
  price: 90000,
  qty: 1,
};
let item_3 = {
  id: 103,
  img: "./../assets/images3.jpeg",
  name: "redmi",
  price: 80000,
  qty: 1,
};
let item_4 = {
  id: 104,
  img: "./../assets/iphone4.jpeg",
  name: "oppo",
  price: 70000,
  qty: 2,
};
let cards = document.getElementById("cards");
let Product = [item_1, item_2, item_3, item_4];

function displayProduct(items) {
  let eachProduct = "";
  for (let item of items) {
    let { id, img, name, price, qty } = item;
    eachProduct += `<div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div class="card-header">
                <img src="${img}" alt="" class=" " >
            </div>
            <div class="card-body ">
                <h3>${name}</h3>
                <p class="text-success">Stock Is Available</p>
                <h6>${price}&#8377</h6>
                <h5>
                    <i class="fa-solid fa-circle-minus btnp" onclick="decCount(${id})"></i>
                    <span>${qty}</span>
                    <i class="fa-solid fa-circle-plus btnp" onclick="incCount(${id})"></i>
                </h5>
            </div>
        </div>
    </div>`;
  }
  cards.innerHTML = eachProduct;
}
displayProduct(Product);

function incCount(id) {
  Product.map((item) => {
    if (item.id == id) {
      let obj = { ...item, qty: ++item.qty };
      return obj;
    } else return item;
  });
  displayProduct(Product);
}

function decCount(id) {
  Product.map((item) => {
    if (item.id == id) {
      if (item.qty > 1) {
        let obj = { ...item, qty: --item.qty };
        return obj;
      }
    } else return item;
  });
  displayProduct(Product);
}
