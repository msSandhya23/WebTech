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
let allEmpBtn = document.getElementById("allEmpBtn");
let maleEmpBtn = document.getElementById("maleEmpBtn");
let femaleEmpBtn = document.getElementById("femaleEmpBtn");
let empTable = document.getElementById("empTable");
let tbody = document.getElementById("tbody");
<<<<<<< HEAD
empTable.style.display = "none";
function displayId(empList) {
  tbody.innerHTML = "";
  empTable.style.display = "table";
  empList.map((emp) => {
    let tr = document.createElement("tr");
    let rows = `
    <td>${emp.id}</td>
    <td>${emp.Ename}</td>
    <td>${emp.email}</td>
    <td>${emp.company}</td>
    <td>${emp.gender}</td>
    <td>${emp.salary}</td>
    `;
    tr.innerHTML = rows;

    tbody.append(tr);
  })
}

allEmpBtn.addEventListener("click", function () {
  displayId(emp);
});

maleEmpBtn.addEventListener("click", function () {
  let maleEmp = emp.filter((emp) => emp.gender == "Male");
  displayId(maleEmp);
});

femaleEmpBtn.addEventListener("click", function () {
  let femaleEmp = emp.filter((emp) => emp.gender == "Female");
  displayId(femaleEmp); 
});


=======
table.style.display = "none";



function displayEmp(empList){
  table.style.display = "table";

  tbody.innerHTML = "";

  empList.map((emp) => {
    let tr = document.createElement("tr");
    let rows=`
      <td>${emp.id}</td>
      <td>${emp.Ename}</td>
      <td>${emp.email}</td>
      <td>${emp.company}</td>
      <td>${emp.gender}</td>
      <td>${emp.salary}</td>
    `
    tr.innerHTML = rows;
    tbody.appendChild(tr);
  });
}

allBtn.addEventListener("click", function () {
  displayEmp(emp)
});

maleBtn.addEventListener("click", function () {
  let maleEmp=emp.filter((emp) => emp.gender == "Male");
  displayEmp(maleEmp)
})

femaleBtn.addEventListener("click", function () {
 let femaleEmp=emp.filter((emp) => emp.gender == "Female");
 displayEmp(femaleEmp)

})
>>>>>>> 9204c3585ee0f57f3b632cca1fccf4894b4ddbaa
