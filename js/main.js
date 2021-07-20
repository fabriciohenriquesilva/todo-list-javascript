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
    label.contentEditable = "true";
    li.appendChild(label);

    let imgExclui = document.createElement("img");
    imgExclui.src = "../assets/icons/delete.png";
    imgExclui.classList.add("remove-item");
    li.appendChild(imgExclui);

    lista.appendChild(li);
    inputAdiciona.value = "";
});

lista.addEventListener("click", function(event) {
    if(event.target.parentNode.tagName == "LI"){
        let li = event.target.parentNode;
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

        li.classList.add("fade-out")

        setTimeout(function() {
            li.remove();
        }, 500);
    }
});