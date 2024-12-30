function facebook() {
  document.getElementById("fbp").style.display = "block";
  document.getElementById("home").style.display = "none";
}
function instagram() {
  document.getElementById("igp").style.display = "block";
  document.getElementById("home").style.display = "none";
}
function hotmail() {
  document.getElementById("hmp").style.display = "block";
  document.getElementById("home").style.display = "none";
}

// Function to display the verification section
function veryfi() {
  document.getElementById("veryfi").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}

// Disable right-click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+U, etc. for developer tools
document.addEventListener("keydown", function (event) {
  // Disable F12
  if (event.keyCode === 123) {
    event.preventDefault();
  }
  // Disable Ctrl+Shift+I and Ctrl+Shift+J (DevTools)
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.keyCode === 73 || event.keyCode === 74)
  ) {
    event.preventDefault();
  }
  // Disable Ctrl+U (View Source)
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
});
