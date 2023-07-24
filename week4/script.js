function validatePassword(password) {
    // Password should have AT LEAST 8 characters, one uppercase, and one lowercase letter
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password);
}

function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");

    // Verify first and last name values are NOT missing
    if (firstName.trim() === "" || lastName.trim() === "") {
        resultDiv.textContent = "Please enter both first and last names.";
        return false;
    }

    // Validate user-entered password
    if (!validatePassword(password)) {
        resultDiv.textContent = "Invalid password! Password should have at least 8 characters, one uppercase letter, and one lowercase letter.";
        return false;
    }

    // Show a message if all fields are valid
    resultDiv.textContent = "All fields are valid!";
    return true;
}