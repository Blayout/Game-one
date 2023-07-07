window.addEventListener("DOMContentLoaded", function () {

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
  //const formData = document.querySelectorAll(".formData");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // close modal event
  const modalClose = document.getElementById("close-modal");
  modalClose.addEventListener("click", closeModal);

  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }




/*
  const modalThanksBg = document.querySelector(".thanks-modal");
  const modalThanksBtn = document.querySelectorAll(".btn-submit");


  // launch modal event
  modalThanksBtn.forEach((btn) => btn.addEventListener("click", launchModalThanks));

  // launch modal form
  function launchModalThanks() {
    modalThanksBg.style.display = "block";
  }




  // close modal event
  const modalCloseThanks = document.getElementById("thanks-btn");
  modalCloseThanks.addEventListener("click", closeModalThx);

  // close modal form
  function closeModalThx() {
    modalCloseThanks.style.display = "none";
  }

*/

  
  const btnSubmit = document.querySelector(".btn-submit");

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    return validate();

  });

  const firstNameInput = document.querySelector("#first");
  const lastNameInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const quantityInput = document.querySelector("#quantity");
  //const locationInputs = document.querySelectorAll('input[name="location"]');
  //const cguInput = document.querySelector('input[name="checkbox1"]');

  const firstNameError = document.getElementById("firstname-error");
  const lastNameError = document.getElementById("lastname-error");
  const emailError = document.getElementById("email-error");
  const quantityError = document.getElementById("quantity-error");
  const locationError = document.getElementById("location-error");
  const cguError = document.getElementById("cgu-error");

  function validate() {

    var firstNameInputValue,
      lastNameInputValue,
      emailInputValue,
      quantityInputValue,
      quantityInputValueParsed,
      locationInputChecked,
      cguInputChecked;

    firstNameInputValue = firstNameInput.value;
    lastNameInputValue = lastNameInput.value;
    emailInputValue = emailInput.value;
    quantityInputValue = quantityInput.value;
    quantityInputValueParsed = parseInt(quantityInputValue);
    locationInputChecked = document.querySelector('input[name="location"]:checked');
    cguInputChecked = document.querySelector('input[name="checkbox1"]:checked');

    var hasErrors = false; 

    if (firstNameInputValue.trim() === "" || firstNameInputValue.length < 2) {
        firstNameError.style.display = "block";
        hasErrors = true; 
    } else {
        firstNameError.style.display = "none";
    }

    if (lastNameInputValue.trim() === "" || lastNameInputValue.length < 2) {
        lastNameError.style.display = "block";
        hasErrors = true;
    } else {
        lastNameError.style.display = "none";
    }

    if (!emailInputValue.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue)) {
        emailError.style.display = "block";
        hasErrors = true;
    } else {
        emailError.style.display = "none";
    }

    if (quantityInputValue.trim() == "" || isNaN(quantityInputValueParsed)) {
        quantityError.style.display = "block";
        hasErrors = true;
    } else {
        quantityError.style.display = "none";
    }

    if (!locationInputChecked) {
        locationError.style.display = "block";
        hasErrors = true;
    } else {
        locationError.style.display = "none";
    }

    if (!cguInputChecked) {
        cguError.style.display = "block";
        hasErrors = true;
    } else {
        cguError.style.display = "none";
    }

    if (hasErrors) {
        console.log('Au moins un champ n\'est pas validé');
    } else {
        console.log('Tous les champs sont validés');
        closeModal();
        console.log('Modal fermée');
    }

  }

  /*
    realTimeValidation();
  
    function realTimeValidation() {
  
      var quantityInputValue,
        quantityInputValueParsed,
        locationInput,
        cguInputChecked;
  
      firstNameInput.addEventListener("input", function () {
        var firstNameInputValue = firstNameInput.value;
        if (!firstNameInputValue.trim() === "" || firstNameInputValue.length >= 2) {
          firstNameError.style.display = "none";
        } else {
          firstNameError.style.display = "block";
          return false;
        }
      }, false);
  
      lastNameInput.addEventListener("input", function () {
        var lastNameInputValue = lastNameInput.value;
        if (!lastNameInputValue.trim() === "" || lastNameInputValue.length >= 2) {
          lastNameError.style.display = "none";
        } else {
          lastNameError.style.display = "block";
          return false;
        }
      }, false);
  
      emailInput.addEventListener("input", function () {
        var emailInputValue = emailInput.value;
        if (!emailInputValue.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue)) {
          emailError.style.display = "none";
        } else {
          emailError.style.display = "block";
          return false;
        }
      }, false);
  
      quantityInput.addEventListener("input", function () {
        quantityInputValue = quantityInput.value;
        quantityInputValueParsed = parseInt(quantityInputValue);
        if (quantityInputValue.trim() !== "" && !isNaN(quantityInputValueParsed)) {
          quantityError.style.display = "none";
        } else {
          quantityError.style.display = "block";
          return false;
        }
      }, false);
  
      locationInputs.forEach(function (item) {
        item.addEventListener("input", function () {
          locationInput = document.querySelector('input[name="location"]:checked');
          if (locationInput) {
            locationError.style.display = "none";
          } else {
            locationError.style.display = "block";
            return false;
          }
        }, false);
      });
  
      cguInput.addEventListener("input", function () {
        cguInputChecked = document.querySelector('input[name="checkbox1"]:checked');
        if (cguInputChecked) {
          cguError.style.display = "none";
        } else {
          cguError.style.display = "block";
          return false;
        }
      }, false);
  
    }
  */

  /*function firstnameValidation (){   
    var firstNameInputValue = firstNameInput.value;   
    if (!firstNameInputValue.trim() === "" || firstNameInputValue.length >= 2) {     
      firstNameError.style.display = "none";   
    } 
      else {     
        firstNameError.style.display = "block";     
        return false;   
    }*/
});


