function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
  
    let validationPassed = true;
    let message = "";
  
    // Validate that all fields are present
    if (!name || !email || !dob || !password) {
      validationPassed = false;
      message += "All fields must be filled out.<br>";
    }
  
    // Validate that the password contains a special character ! or ?
    if (!password.includes("!") && !password.includes("?")) {
      validationPassed = false;
      message +=
        "Password must contain at least one special character (! or ?).<br>";
    }
  
    // Creating the user object
    const user = {
      name: name,
      email: email,
      dob: dob,
      password: "******", // Asterisks for the password
    };
  
    const resultDiv = document.getElementById("result");
  
    // Show result based on validation
    if (validationPassed) {
      message += "Registration Successful!<br>";
      message += `<strong>User Details:</strong><br>Name: ${user.name}<br>Email: ${user.email}<br>Date of Birth: ${user.dob}<br>Password: ${user.password}<br>`;
      resultDiv.className = "alert alert-success";
    } else {
      resultDiv.className = "alert alert-danger";
    }
  
    resultDiv.innerHTML = message;
  }