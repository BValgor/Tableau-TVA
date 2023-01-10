let add=document.querySelector("#add");
let table = document.querySelector(".table");
let suppr = document.querySelector("#suppr");
let tbody = document.querySelector(".body");
let clear = document.querySelector("#clear");
let total = document.querySelector("#total");
let effacer = document.querySelector("#effacer")
let rowtofind = document.querySelector(".clone");
let alertPlaceholder = document.querySelector("#liveAlertPlaceholder")

function cloneRow() {
    let clone = rowtofind.cloneNode(true);
    console.log(clone);
    tbody.appendChild(clone); //add new row to end of table
    alert('Une ligne a été ajoutée.', 'dark')
  }

add.addEventListener("click", cloneRow);

function supprimer_ligne () {
    tbody.deleteRow (-1);
    alert('Une ligne a été supprimée.', 'warning')
}

suppr.addEventListener("click", supprimer_ligne);

function clearall () {
    let vider = document.querySelectorAll(".form-control");
    vider.length;
    for (let index = 0; index < vider.length; index++) {
        vider[index].value="";
        
    }
    alert('Tout les champs ont été effacé.', 'danger')
}
clear.addEventListener("click", clearall);

function effaceinput (o) {
    let p=o.parentNode.parentNode;
    let effaceligne = p.querySelectorAll(".form-control");
    for (let index = 0; index < effaceligne.length; index++) {
        effaceligne[index].value="";
    }
}

function deleteligne (o) {
    let p = o.parentNode.parentNode;
    p.parentNode.removeChild (p);
}

function calcul_ligne (o) {
    let p = o.parentNode.parentNode;
    let prix = parseInt (p.querySelector("#control1").value);
    let taxe5 = (prix * 0.055);
    let taxe20 = (prix * 0.20);
    let prixttc = p.querySelector("#control5");
    let choixtaxe = p.querySelector(".form-select").value;
    if (choixtaxe == 1) {
        prixttc.value = (prix + taxe20);
    } else if (choixtaxe == 2) {
        prixttc.value = (prix + taxe5);
    } else {
        return false
    }
    totalttc()
}
    function totalttc () {
        let taxettc = document.querySelectorAll(".ttc")
        let totalinput = document.querySelector("#total");
        let resultat = 0

        for (let index = 0; index < taxettc.length; index++) {
            if(taxettc[index].value == "") {
                resultat += 0
            } else {
            resultat += parseFloat(taxettc[index].value);
        }
        totalinput.value = parseFloat(resultat)}
}

function alert(message, type) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
    setTimeout(deletealert, 3000);
  }

  function deletealert() {
    alertPlaceholder.removeChild(wrapper)
  }