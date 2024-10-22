let product = {
  id: 101,
  img: "./vivo.png",
  name: "VIVO V40e",
  price: 27999,
  qty: 1,
};
let htmlCode = `
<tr>
            <th>PId</th>
            <th>PImg</th>
            <th>PName</th>
            <th>Pprice</th>
            <th>Pqty</th>
            <th>Tprice</th>
</tr>
<tr>
    <td>${product.id}</td>
    <td>
        <img src="${product.img}" alt="" width=100px" height="100px"
    </td>
    <td>${product.name}</td>
    <td>${product.price} &#8377;</td>
    <td>
            <i class="fa-solid fa-circle-minus btnp" onclick="decCount()"></i>
                <span id="count">${product.qty}</span>
            <i class="fa-solid fa-circle-plus btnp" onclick="incCount()"></i>
    </td>
    <td><span id="t-price">&#8377; ${product.price}</span></td>
</tr>
            `;

let cards = (document.querySelector("#table").innerHTML = htmlCode);
function decCount() {
  if (product.qty <= 1) return;
  product.qty--;
  document.querySelector("#count").textContent = product.qty;
  updatePrice();
}
function incCount() {
  product.qty++;
  document.querySelector("#count").textContent = product.qty;
  updatePrice();
}
function updatePrice() {
  let total = product.qty * product.price;
  document.querySelector("#t-price").textContent = total;
}
