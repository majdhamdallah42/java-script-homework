// Assignment Code
// Create some variable, that hold each character value e.g. (var this = "ABC...".split(""), var or charset += this = "123...") => ["A", "B"]
// using prompt, how can we get a length, and store it for later
// maybe build out a GIANT array based on what the user wants e.g. ["A", "B"... , "a", "b"]  using maybe .push() .concat() 
// when asking for what they want in their password or use charset using letters "abcdefghijklmnopqrstuvwxyz""ABCDEFGHIJKLMNOPQRSTUVWXYZ
// for loop through the giant array, and using var random = Math.floor(Math.random() * giantArray.length) you can grab random values
// password += giantArray[random] or  for (let i = 0; i < length; i++) {
    // also need to add disabled if pass word length is not enough or is does not match
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

  
  document.getElementById("copy").removeAttribute("disabled");
  document.getElementById("copy").style.cursor = "pointer";
});

document.getElementById("copy").addEventListener("click", function() {
  let passwordText = document.getElementById("password").innerText;
  
  if (passwordText === "") {
      
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
