let myForm = document.querySelector("form");
let inTask = document.getElementById("task");
let priority = document.getElementById("priority");
let AllData = [];
let tbody = document.querySelector("tbody");

myForm.addEventListener("submit", function (e) {
   e.preventDefault();

   let data = {};
   data.input1 = inTask.value;
   data.input2 = priority.value;
   AllData.push(data);

   tbody.innerHTML = null;

   AllData.map((ele) => {
      let row = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td1.innerText = ele.input1;
      td2.innerText = ele.input2;

      if (ele.input2 === "High") {
         td2.classList.add("High-priority");
      } else if (ele.input2 === "Low") {
         td2.classList.add("Low-priority");
      }

      row.append(td1, td2);
      tbody.append(row);
   });
});



