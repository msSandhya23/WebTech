let emp = [
  {
    id: 1,
    Ename: "Rahul",
    email: "2fZ9H@example.com",
    company: "Google",
    gender: "Male",
    salary: 50000,
  },
  {
    id: 2,
    Ename: "Sandhya",
    email: "sandhya22@gmail.com",
    company: "Amazon",
    gender: "Female",
    salary: 90000,
  },
  {
    id: 3,
    Ename: "Soumya",
    email: "soumya34@gmail.com",
    company: "Acenture",
    gender: "Male",
    salary: 80000,
  },
  {
    id: 4,
    Ename: "Kiran",
    email: "praharj22@gmail.com",
    company: "TechMahindra",
    gender: "Female",
    salary: 12000,
  },
  {
    id: 5,
    Ename: "Subhendu",
    email: "behera55@gmail.com",
    company: "Oditek",
    gender: "Male",
    salary: 55000,
  },
  {
    id: 6,
    Ename: "Ranjita",
    email: "ranjita123@gmail.com",
    company: "Capgimini",
    gender: "Female",
    salary: 33000,
  },
];
let allBtn = document.getElementById("allEmpBtn");
let maleBtn = document.getElementById("maleEmpBtn");
let femaleBtn = document.getElementById("femaleEmpBtn");

let table = document.getElementById("empTable");
let tbody = document.getElementById("tbody");
table.style.display = "none";

allBtn.addEventListener("click", function () {
  table.style.display = "block";

  emp.map((emp) => {
    let tr = document.createElement("tr");
    tr.className = "text-center border border-dark border-2";
    let td = document.createElement("td");
    td.textContent = emp.id;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = emp.Ename;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = emp.email;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = emp.company;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = emp.gender;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = emp.salary;
    tr.appendChild(td);
    console.log(tr);
    tbody.appendChild(tr);
  });
});
