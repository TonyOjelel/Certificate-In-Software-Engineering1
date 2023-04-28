var baseUrl = "https://ufarm-backend.herokuapp.com/api/auth/";

document
  .getElementById("submit")
  .addEventListener("click", function (click) {
    login(click);
  });

async function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    const response = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status == 200) {
      setTimeout(function () {
        location.href = "/ui/aodashboard.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}


function Validate() {
  const firstName = document.forms["regForm"]["First Name"].value;
  const lastName = document.forms["regForm"]["Last Name"].value;
  const nameRegex = /^[a-zA-Z ]+$/;

  if (firstName === "" || !nameRegex.test(firstName)) {
    alert("Please enter a valid first name");
    return false;
  }

  if (lastName === "" || !nameRegex.test(lastName)) {
    alert("Please enter a valid last name");
    return false;
  }

  return true;
}

function Validate() {
  const dob = document.forms["regForm"]["dateOfBirth"].value;
  const dobDate = new Date(dob);

  if (dob === "" || isNaN(dobDate)) {
    alert("Please enter a valid date of birth");
    return false;
  }

  return true;
}

function Validate() {
  const country = document.forms["regForm"]["category"].value;

  if (country === "Category") {
    alert("Please select a country");
    return false;
  }

  return true;
}

function Validate() {
  const email = document.forms["regForm"]["email"].value;
  const phone = document.forms["regForm"]["phone number"].value;
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10}$/;

  if (email === "" || !emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (phone === "" || !phoneRegex.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  return true;
}

showNotification: function (from, align) {
  color = Math.floor((Math.random() * 4) + 1);

  $.notify({
      icon: "nc-icon nc-app",
      message: "Login Successful"

  }, {
      type: type[color],
      timer: 8000,
      placement: {
          from: from,
          align: align
      }
  });
}


