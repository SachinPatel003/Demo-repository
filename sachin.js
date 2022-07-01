const name1 = document.getElementById("name");
const email = document.getElementById("email");
const mobilnumber = document.getElementById("mobilenumber");
ValidName = false;
ValidEmail = false;
ValidMobileNumber = false;

name1.addEventListener("blur", () => {
  regex = /^[a-zA-Z][0-9a-zA-Z]{1,9}$/;
  str = name1.value;
  if (regex.test(str)) {
    name1.classList.remove("is-invalid");
    ValidName = true;
  } else {
    name1.classList.add("is-invalid");
  }
});

email.addEventListener("blur", () => {
  regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/;
  str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    ValidEmail = true;
  } else {
    email.classList.add("is-invalid");
  }
});
mobilnumber.addEventListener("blur", () => {
  regex = /^([0-9]){10}$/;
  str = mobilnumber.value;
  if (regex.test(str)) {
    mobilnumber.classList.remove("is-invalid");
    ValidMobileNumber = true;
  } else {
    mobilnumber.classList.add("is-invalid");
  }
});

let alert = document.getElementById("alert1");
btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (ValidName && ValidEmail && ValidMobileNumber) {
    name1.value = "";
    email.value = "";
    mobilnumber.value = "";

    console.log("all true");
    html = `<div  class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success :</strong> Successfully submited.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    alert.innerHTML = html;
    setTimeout(() => {
      alert.innerHTML = "";
    }, 1000);
  } else {
    console.log("not true");
    // console.log(alert);
    html = `<div class=" alert alert-danger alert-dismissible fade show" role="alert">
            <strong>fail :</strong> Not submited.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    alert.innerHTML = html;
    setTimeout(() => {
      alert.innerHTML = "";
    }, 1000);
  }
});
