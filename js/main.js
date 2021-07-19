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

    let img = document.createElement("img");
    img.src = "../assets/icons/delete.png";
    img.classList.add("remove-item");
    li.appendChild(img);

    lista.appendChild(li);
    inputAdiciona.value = "";
});

// ul > li > checkbox + label
lista.addEventListener("click", function(event) {
    // console.log(event.target.parentNode);
    if(event.target.parentNode.tagName == "LI"){
        let li = event.target.parentNode;
        // console.log(li);
        if(event.target.tagName == "INPUT"){
            let label = li.querySelector("label");
            console.log(label.textContent);
            label.classList.toggle("item-marcado");
        }
    }
});

lista.addEventListener("click", function(event) {
    let li = event.target.parentNode;
    if(event.target.tagName == "IMG"){
        li.remove();
        console.log(li);
    }
});