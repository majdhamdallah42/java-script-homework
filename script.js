document.getElementById("generate").addEventListener("click", function() {
  let length = prompt("Enter password length between 8 and 128 characters:");

  if (length < 8 || length > 128) {
      alert("Invalid password length. Please try again.");
      return;
  }

  let useLower = confirm("Do you want to include lowercase letters?");
  let useUpper = confirm("Do you want to include uppercase letters?");
  let useNumbers = confirm("Do you want to include numbers?");
  let useSpecial = confirm("Do you want to include special characters?");

  if (!(useLower || useUpper || useNumbers || useSpecial)) {
      alert("Type at least one character. You can try again.");
      return;
  }

  let charset = "";
  let password = "";

  if (useLower) charset += "abcdefghijklmnopqrstuvwxyz";
  if (useUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) charset += "0123456789";
  if (useSpecial) charset += "!@#$%^&*()-_=+";

  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }

  document.getElementById("password").innerText = password;

  // Enable the "Copy to Clipboard" button only after generating the password
  document.getElementById("copy").removeAttribute("disabled");
  document.getElementById("copy").style.cursor = "pointer";
});

document.getElementById("copy").addEventListener("click", function() {
  let passwordText = document.getElementById("password").innerText;
  
  if (passwordText === "") {
      // If there's no password, disable the "Copy to Clipboard" button
      document.getElementById("copy").setAttribute("disabled", "disabled");
      document.getElementById("copy").style.cursor = "not-allowed";
      alert("No password to copy");
      return;
  }
  
  navigator.clipboard.writeText(passwordText).then(function() {
      alert("Password copied to clipboard!");
  }).catch(function() {
      alert("Failed to copy the password to clipboard.");
  });
});
