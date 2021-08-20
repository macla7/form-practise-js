const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const emailErr = document.querySelector("#email + span.error");

function showError() {
  if (email.validity.valueMissing) {
    emailErr.textContent = "You need to enter an email address friend!";
  } else if (email.validity.typeMismatch) {
    emailErr.textContent = "Entry needs to be an email";
  }

  emailErr.className = "error active";
}

export default function () {
  email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailErr.textContent = "";
      emailErr.className = "error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
}
