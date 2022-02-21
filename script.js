const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  if (validateEmail(email.value)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
    const small = form.querySelector("input-error");
    small.innerText = "Please provide valid email";
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// const form = document.getElementById('form');
// const email = document.getElementById('email');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const emailVal = email.value;

//     if (!validateEmail(emailVal)) {
//         form.classList.add('error');
//     } else {
//         form.classList.remove('error');
//         document.body.innerHTML =`<div style="display:flex; align-items:center; justify-content:center;">
//         <h1>Sent succesfully!</h1></div>`
//     }    
// });

// function validateEmail(email) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }