const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");

let count = 1;

button.onclick = () => {
    for (let str of inputs) {
        if (inputIsEmpty(str.value)) {
            alert(str.placeholder + '이(가) 비었습니다.');
            return;
        }
    }

    let tableBody = document.querySelector("tbody");
    let tableBodyAdd = "<tr>";

    tableBodyAdd += "<td>" + count++ + "</td>";
    for (let str of inputs) {
        tableBodyAdd += "<td>" + str.value + "</td>";
    }
    
    tableBodyAdd += "</tr>";

    tableBody.innerHTML += tableBodyAdd;

}

function inputIsEmpty(str) {
    return str == null || str == "" || str == undefined;
}

