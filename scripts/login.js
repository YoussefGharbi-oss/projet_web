document.getElementById("pass").addEventListener("input", function () {
  document.getElementById("show").style.display = "block";
});
clicked = true;
document.getElementById("show").addEventListener("click", function () {
  if (clicked == true) {
    document.getElementById("show").innerHTML = "HIDE";
    document.getElementById("pass").type = "text";
    clicked = false;
  } else {
    document.getElementById("show").innerHTML = "SHOW";
    document.getElementById("pass").type = "password";
    clicked = true;
  }
});

clicked1 = true;


document.getElementById("signup").addEventListener("click", function () {
  document.getElementById("login").style.transition = "0.5s";
  document.getElementById("sign").style.transition = "0.5s";
  document.getElementById("login").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("login").style.display = "none";
    document.getElementById("sign").style.display = "block";
  }, 500);
  setTimeout(() => {
    document.getElementById("sign").style.opacity = "1";
  }, 700);
});

let valid = true;
function check_signup() {
  if (document.getElementById("user1").value.length > 3) {
    localStorage.setItem("username", document.getElementById("user1").value);
  } else {
    valid = false;
    document.getElementById("msg1").innerHTML = "Username is too short";
    document.getElementById("msg_field1").style.height = "30px";
    setTimeout(() => {
      document.getElementById("msg1").style.opacity = "1";
    }, 500);
  }
  if (
    document.getElementById("pass1").value ===
      document.getElementById("pass2").value &&
    document.getElementById("pass1").value.length > 7
  ) {
    localStorage.setItem("password", document.getElementById("pass1").value);
  } else {
    valid = false;
    document.getElementById("msg1").innerHTML =
      "Password isn't the same or is short";
    document.getElementById("msg_field1").style.height = "30px";
    setTimeout(() => {
      document.getElementById("msg1").style.opacity = "1";
    }, 500);
  }

  let age =
    2024 - parseInt(document.getElementById("date").value.substring(0, 4));
  if (age > 17) {
    localStorage.setItem("age", age);
  } else {
    valid = false;
    document.getElementById("msg1").innerHTML = "Age must be 18 or more";
    document.getElementById("msg_field1").style.height = "30px";
    setTimeout(() => {
      document.getElementById("msg1").style.opacity = "1";
    }, 500);
  }
  if (valid === true) {
    document.getElementById("login1").click();
  }
}
function check_login(event) {
  if (
    document.getElementById("username").value ==
      localStorage.getItem("username") &&
    document.getElementById("pass").value == localStorage.getItem("password")
  ) {
      console.log("jawk bahy")
      event.preventDefault();
      window.location.href = '../Market.html'
  
  } else {
    document.getElementById("msg_field").style.height = "30px";
    setTimeout(() => {
      document.getElementById("msg").style.opacity = "1";
    }, 500);
  }
}
