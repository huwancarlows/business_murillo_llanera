const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });

        function auth() {
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          const getEmail = localStorage.getItem("userEmail");
          const getPwd = localStorage.getItem("userPwd");

          if (email == "admin@gmail.com" && password == "12345") {
            window.location.assign("landing.html");
            alert("Login Successfully");
          }

          if (email == getEmail) {
            if (password == getPwd) {
              window.location.assign("landing.html");
              alert("Login Sucessful");
            } else alert("Wrong password");
          }
        }

        function addData() {
          const email2 = document.getElementById("eml").value;
          const password2 = document.getElementById("pwd").value;

          localStorage.setItem("userEmail", email2);
          localStorage.setItem("userPwd", password2);
        }