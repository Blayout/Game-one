function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
const modalClose = document.getElementById("close-modal");
modalClose.addEventListener("click", closeModal);


function closeModal() {
  modalbg.style.display = "none";
}



function validate() {

  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const location = document.querySelector("input[name='location']:checked");
  const checkbox1 = document.getElementById("checkbox1");


  if (firstName.trim() === "" || firstName.length < 2) {
    alert("Veuillez entrer un prénom valide (minimum 2 caractères).");
    return false;   
  }

  if (lastName.trim() === "" || lastName.length < 2) {
    alert("Veuillez entrer un nom valide (minimum 2 caractères).");
    return false;
  }

  if (email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return false;
  }

  if (quantity.trim() === "" || isNaN(quantity)) {
    alert("Veuillez entrer une valeur numérique pour le nombre de concours.");
    return false;
  }

  if (!location) {
    alert("Veuillez sélectionner un tournoi.");
    return false;
  }

  if (!checkbox1.checked) {
    alert("Veuillez accepter les conditions d'utilisation.");
    return false;
  }

  return true;
}




