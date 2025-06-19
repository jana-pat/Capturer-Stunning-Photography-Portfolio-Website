function showForm(formType) {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.remove("active");
    document.getElementById(`${formType}-form`).classList.add("active");
  
    document.querySelectorAll(".auth__toggle button").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`.auth__toggle button[onclick="showForm('${formType}')"]`)
      .classList.add("active");
  }
  
  // Handle login form submission
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    console.log("Login Data:", { email, password });
    alert("Login submitted! Check console for form data.");
  });
  
  // Handle register form submission
  document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const mobile = this.querySelector('input[type="tel"]').value;
    const password = this.querySelector('input[type="password"][placeholder="Password"]').value;
    const confirmPassword = this.querySelector('input[type="password"][placeholder="Confirm Password"]').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    console.log("Register Data:", { email, mobile, password });
    alert("Registration submitted! Check console for form data.");
  });