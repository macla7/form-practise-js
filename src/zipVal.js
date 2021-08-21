const form = document.getElementsByTagName("form")[0];
const zip = document.getElementById("zip");
const zipErr = document.querySelector("#zip + span.error");

function showError() {
  if (zip.validity.valueMissing) {
    zipErr.textContent = "You need to enter an zip pal!";
  } else if (zip.validity.patternMismatch) {
    zipErr.textContent = "Entry needs to be an zip";
  }

  zipErr.className = "error active";
}

export default function () {
  zip.addEventListener("input", () => {
    if (zip.validity.valid) {
      zipErr.textContent = "";
      zipErr.className = "error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (!zip.validity.valid) {
      showError();
      e.preventDefault();
    }
  });
}
