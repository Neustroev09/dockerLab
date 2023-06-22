var users = new Map([
  ["root","admin"],
  ["maxim","12"],
  ["java","123"],
]);

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded!')
  var modal1 = document.getElementById("myModal1");
  var btn1 = document.getElementById("signin");
  var span1 = document.getElementsByClassName("close1")[0];

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("signup");
  var span2 = document.getElementsByClassName("close2")[0];

  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span1.onclick = function() {
    modal1.style.display = "none";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
}

  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
});


function signin() {
  var login = document.forms["form_signin"].elements["login1"].value;
  if (users.has(login) != true) {
    alert("Неправильный логин!");
    return;
  }
  
  var password = document.forms["form_signin"].elements["password1"].value;
  if (users.get(login) != password) {
    alert("Неправильный пароль!");
    return;
  }
  alert("Вы успешно вошли!");
}

function signup() {
  var login = document.forms["form_signup"].elements["login2"].value;
  if (users.has(login) == true) {
    alert("Такой логин уже существует!");
    return;
  }
  
  var email = document.forms["form_signup"].elements["email"].value;

  var password1 = document.forms["form_signup"].elements["password2"].value;
  var password2 = document.forms["form_signup"].elements["password22"].value;

  if (password1 != password2) {
    alert("Пароли не совпадают!");
  }


  users.set(login, password1);
  alert("Вы успешно зарегистрировались!");
  return;
}
