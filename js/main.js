let inputAdiciona = document.querySelector("#adiciona-item");
let lista = document.querySelector("#lista");

let btoAdiciona = document.querySelector(".bto-adiciona");

btoAdiciona.addEventListener("click", function() {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);

    let label = document.createElement("label");
    label.textContent = inputAdiciona.value;

    li.appendChild(label);

    lista.appendChild(li);
    inputAdiciona.value = "";
});

// ul > li > checkbox + label
lista.addEventListener("click", function(event) {
    // console.log(event.target.parentNode);
    if(event.target.parentNode.tagName == "LI"){
        let li = event.target.parentNode;
        // console.log(li);

        let label = li.querySelector("label");
        console.log(label.textContent);

        label.classList.toggle("item-marcado");
        // let label = 
    }
});