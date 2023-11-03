let myForm = document.querySelector("form");
let myName = document.getElementById("name");
let ID = document.getElementById("docID");
let speci = document.getElementById("dept");
let exp = document.getElementById("exp");
let mail = document.getElementById("email");
let Mnumber = document.getElementById("mbl");
let Tbody = document.querySelector("tbody");
let AllData = [];
let role;

CheckExp = (exp) => {
    if (exp > 5) {
        role = "Senior";
    } else if (exp >= 2 && exp <= 5) {
        role = "Junior";
    } else {
        role = "Fresher";
    }
    return role;
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    CheckExp(exp.value);
    let data = {};
    data.input1 = myName.value;
    data.input2 = ID.value;
    data.input3 = speci.value;
    data.input4 = exp.value;
    data.input5 = mail.value;
    data.input6 = Mnumber.value;
    data.input7 = role;

    AllData.push(data);

    Tbody.innerHTML = null;

    displayData();

    myForm.reset();
});

function deleteRow(index) {
    AllData.splice(index, 1);
    displayData();
}

function displayData() {
    Tbody.innerHTML = null;

    AllData.forEach((ele, index) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let deleteButton = document.createElement('button');

        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteRow(index));

        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;

        row.append(td1, td2, td3, td4, td5, td6, td7, deleteButton);
        Tbody.append(row);
    });
}
