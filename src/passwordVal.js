const form = document.getElementsByTagName("form")[0];
const password = document.getElementById("password");
const passwordErr = document.querySelector("#password + span.error");

function showError() {
  if (password.validity.valueMissing) {
    passwordErr.textContent = "You need to enter an password eh";
  } else if (password.validity.patternMismatch) {
    passwordErr.textContent =
      "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
  }

  passwordErr.className = "error active";
}

export default function () {
  password.addEventListener("input", () => {
    if (password.validity.valid) {
      passwordErr.textContent = "";
      passwordErr.className = "error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!password.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
}
