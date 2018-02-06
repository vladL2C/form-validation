const emailInput = document.getElementById("email");

function myValidation() {
  if (!emailInput.validity.valid) {
    alert(emailInput.validationMessage);
  }
}

