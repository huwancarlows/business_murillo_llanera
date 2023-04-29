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
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;

          var getEmail = localStorage.getItem("userEmail");
          var getPwd = localStorage.getItem("userPwd");

          if (email == "admin@gmail.com" && password == "12345") {
            window.location.assign("index.html");
            alert("Login Successfully");
          }

          if (email == getEmail) {
            if (password == getPwd) {
              window.location.assign("index.html");
              alert("Login Sucessful");
            } else alert("Wrong password");
          }
        }

        function addData() {
          var email2 = document.getElementById("eml").value;
          var password2 = document.getElementById("pwd").value;

          localStorage.setItem("userEmail", email2);
          localStorage.setItem("userPwd", password2);
        }