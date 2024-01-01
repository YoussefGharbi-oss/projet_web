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
document.getElementById("pass1").addEventListener("input", function () {
  document.getElementById("show1").style.display = "block";
});
clicked1 = true;
document.getElementById("show1").addEventListener("click", function () {
  if (clicked1 == true) {
    document.getElementById("show1").innerHTML = "HIDE";
    document.getElementById("pass1").type = "text";
    clicked1 = false;
  } else {
    document.getElementById("show1").innerHTML = "SHOW";
    document.getElementById("pass1").type = "password";
    clicked1 = true;
  }
});
document.getElementById("pass2").addEventListener("input", function () {
  document.getElementById("show2").style.display = "block";
});
clicked2 = true;
document.getElementById("show2").addEventListener("click", function () {
  if (clicked2 == true) {
    document.getElementById("show2").innerHTML = "HIDE";
    document.getElementById("pass2").type = "text";
    clicked2 = false;
  } else {
    document.getElementById("show2").innerHTML = "SHOW";
    document.getElementById("pass2").type = "password";
    clicked2 = true;
  }
});
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
document.getElementById("login1").addEventListener("click", function () {
  document.getElementById("sign").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("sign").style.display = "none";
    document.getElementById("login").style.display = "block";
  }, 500);
  setTimeout(() => {
    document.getElementById("login").style.opacity = "1";
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
function check_login() {
  if (
    document.getElementById("username").value ==
      localStorage.getItem("username") &&
    document.getElementById("pass").value == localStorage.getItem("password")
  ) {
    window.location.href = "";
  } else {
    document.getElementById("msg_field").style.height = "30px";
    setTimeout(() => {
      document.getElementById("msg").style.opacity = "1";
    }, 500);
  }
}
