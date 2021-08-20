const form = document.getElementsByTagName("form")[0];
const country = document.getElementById("country");
const countryErr = document.querySelector("#country + span.error");

function showError() {
  if (country.validity.valueMissing) {
    countryErr.textContent = "You need to enter an country buddy!";
  } else if (country.validity.patternMismatch) {
    countryErr.textContent = "Only regular letters are allowed";
  }

  countryErr.className = "error active";
}

export default function () {
  country.addEventListener("input", () => {
    countryErr.textContent = "";
    if (country.validity.valid) {
      countryErr.className = "error";
    } else {
      console.log(country.validationMessage);
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!country.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
}
