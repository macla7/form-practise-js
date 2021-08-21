const form = document.getElementsByTagName("form")[0];
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-conf");
const passwordConfErr = document.querySelector("#password-conf + span.error");

function showError() {
  console.log(passwordConf.customError);
  if (passwordConf.validity.valueMissing) {
    passwordConfErr.textContent = "Need to confirm passwordConf";
  } else if (passwordConf.validity.customError) {
    passwordConfErr.textContent = passwordConf.validationMessage;
  }

  passwordConfErr.className = "error active";
}

export default function () {
  passwordConf.addEventListener("input", () => {
    if (password.value !== passwordConf.value) {
      passwordConf.setCustomValidity("The passwords much match");
    } else {
      passwordConf.setCustomValidity("");
    }
    if (passwordConf.validity.valid) {
      passwordConfErr.textContent = "";
      passwordConfErr.className = "error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!passwordConf.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
}
