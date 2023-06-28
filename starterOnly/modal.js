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
  //const form = document.querySelector("form");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // launch modal form
  function launchModal() {
    realTimeValidation();
    modalbg.style.display = "block";
  }

  // close modal event
  const modalClose = document.getElementById("close-modal");
  modalClose.addEventListener("click", closeModal);

  function closeModal() {
    modalbg.style.display = "none";
  }

  const btnSubmit = document.querySelector(".btn-submit");

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    return validate();
  });

  const firstNameInput = document.querySelector("#first");
  const lastNameInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const quantityInput = document.querySelector("#quantity");
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const cguInput = document.querySelector('input[name="checkbox1"]');

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
      locationInput,
      cguInputChecked;

    firstNameInputValue = firstNameInput.value;
    if (!firstNameInputValue.trim() === "" || firstNameInputValue.length >= 2) {
      firstNameError.style.display = "none";
    } else {
      firstNameError.style.display = "block";
      return false;
    }

    lastNameInputValue = lastNameInput.value;
    if (!lastNameInputValue.trim() === "" || lastNameInputValue.length >= 2) {
      lastNameError.style.display = "none";
    } else {
      lastNameError.style.display = "block";
      return false;
    }

    emailInputValue = emailInput.value;
    if (!emailInputValue.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
      return false;
    }

    quantityInputValue = quantityInput.value;
    quantityInputValueParsed = parseInt(quantityInputValue);
    if (quantityInputValue.trim() !== "" || !isNaN(quantityInputValueParsed)) {
      quantityError.style.display = "none";
    } else {
      quantityError.style.display = "block";
      return false;
    }

    locationInput = document.querySelector('input[name="location"]:checked');
    if (locationInput) {
      locationError.style.display = "none";
    } else {
      locationError.style.display = "block";
      return false;
    }

    cguInputChecked = document.querySelector('input[name="checkbox1"]:checked');
    if (cguInputChecked) {
      cguError.style.display = "none";
    } else {
      cguError.style.display = "block";
      return false;
    }

    

    closeModal();

    /* ICI LE MESSAGE DE REMERCIEMENT */
    //form.submit();

    return true;

  }

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

});