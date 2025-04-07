const button = document.getElementById("button");
const fieldlabel = document.getElementById("label");
const display = document.getElementById("builderpreview");
const fieldtype = document.getElementById("input");

function addfield() {
    const fieldName = fieldlabel.value.trim(); // Keep original case
    const inputType = fieldtype.value;

    const newField = document.createElement("div");
    newField.innerHTML = `
        <p><strong>${fieldName}</strong></p>
        <input type="${inputType}" placeholder="${fieldName}">
    `;

    display.appendChild(newField);
}

button.addEventListener("click", addfield);