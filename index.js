function abc() {
    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^\d{6}$/;

    if (emailPattern.test(email)) {
      document.getElementById("email").style.border = "solid 2px green";
      document.getElementById('email').style.color = "green";
    } else {
      document.getElementById("email").style.border = "solid 2px red";
      document.getElementById('result').innerText = "The email address is invalid.";
      document.getElementById('email').style.color = "red";
    }

    if (passwordPattern.test(password)) {
     document.getElementById('password').style.border = "solid 2px green";
     document.getElementById('password').style.color = "green";
    } else {
     document.getElementById('password').style.border = "solid 2px red";
     document.getElementById('resultp').innerText = "The password is invalid. It must contain exactly 6 digits.";
     document.getElementById('password').style.color = "red";
    }
     event.preventDefault();
  }