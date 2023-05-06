interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentsList: Student[] = [
  {
    firstName: "User1",
    lastName: "Last1",
    age: 20,
    location: "Peru",
  },
  {
    firstName: "User2",
    lastName: "Last2",
    age: 21,
    location: "Peru",
  },
];

const table = document.createElement("table");
for (const i of studentsList) {
  const row = document.createElement("tr");
  for (const [k, v] of Object.entries(i)) {
    const data = document.createElement("td");
    if (!(k in { age: "", lastName: "" })) {
      data.innerText = v;
      row.appendChild(data);
    }
  }
  table.appendChild(row);
}
document.body.appendChild(table);
