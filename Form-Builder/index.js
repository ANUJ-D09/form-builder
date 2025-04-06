const button = document.getElementById("button");
const fieldlabel = document.getElementById("label");
const display = document.getElementById("builderpreview");

function addfield() {
    const fieldName = fieldlabel.value.toLowerCase();

    display.innerHTML = `
        <p><strong>${fieldName}</strong></p>
        <input type="${fieldlabel}"  id="label">
    `;
}


button.addEventListener("click", addfield);