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
  {
    id: 7,
    Ename: "John Doe",
    email: "johndoe@example.com",
    company: "Tech Corp",
    gender: "Male",
    salary: 55000,
  },
  {
    id: 8,
    Ename: "Jane Smith",
    email: "janesmith@example.com",
    company: "Innovate Ltd",
    gender: "Female",
    salary: 62000,
  },
  {
    id: 9,
    Ename: "Michael Johnson",
    email: "michaelj@example.com",
    company: "Soft Solutions",
    gender: "Male",
    salary: 48000,
  },
  {
    id: 10,
    Ename: "Emily Davis",
    email: "emilyd@example.com",
    company: "NextGen Tech",
    gender: "Female",
    salary: 71000,
  },
];
let allBtn = document.getElementById("allEmpBtn");
let maleBtn = document.getElementById("maleEmpBtn");
let femaleBtn = document.getElementById("femaleEmpBtn");
let table = document.getElementById("empTable");
let tbody = document.getElementById("tbody");
let searchBox = document.getElementById("search-box");
table.style.display = "none";
function displayEmp(empList) {
  tbody.innerHTML = "";
  table.style.display = "table";
  empList.map((emp) => {
    let tr = document.createElement("tr");
    let rows = `
        <td>${emp.id}</td>
        <td>${emp.Ename}</td>
        <td>${emp.email}</td>
        <td>${emp.company}</td>
        <td>${emp.gender}</td>
        <td>${emp.salary}</td>`;
    tr.innerHTML = rows;
    tbody.appendChild(tr);
  });
}
allBtn.addEventListener("click", function () {
  displayEmp(emp);
});
maleBtn.addEventListener("click", function () {
  let maleEmp = emp.filter((emp) => emp.gender == "Male");
  displayEmp(maleEmp);
});
femaleBtn.addEventListener("click", function () {
  let femaleEmp = emp.filter((emp) => emp.gender == "Female");
  displayEmp(femaleEmp);
});

searchBox.addEventListener("keyup", function (e) {
  let enteredName = searchBox.value;
  console.log(enteredName);
  let filteredEmps = searchEmps(enteredName, emp);
  console.log(filteredEmps);

  if (
    enteredName.length >= 1 &&
    searchBox.value != " " &&
    filteredEmps.length > 0
  ) {
    displayEmp(filteredEmps);
  } else {
    tbody.innerHTML = "";
    let tr = document.createElement("tr");
    let td = `<td colspan="6" class="text-center text-danger" >No data found</td>`;
    tr.innerHTML = td;
    tbody.appendChild(tr);
  } 
});

function searchEmps(entName, emps) {
  entName = entName.toLowerCase().trim();
  let filteredEmps = [];
  for (let emp of emps) {
    let orgName = emp.Ename.toLowerCase().trim();
    if (orgName.includes(entName)) {
      filteredEmps.push(emp);
    }
  }
  return filteredEmps;
}
