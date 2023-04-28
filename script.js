function addData(){
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pwd').value;

	localStorage.setItem('userEmail',email);
	localStorage.setItem('userPwd',pass);
}

function checkData(){
	var enterEmail = document.getElementById('email').value;
	var enterPwd = document.getElementById('pwd').value;


    var getEmail = localStorage.getItem('userEmail');
	var getPwd = localStorage.getItem('userPwd');

	if(enterEmail == getEmail)
	{
		if(enterPwd == getPwd)
		{
			alert("Login Sucessful");
		}
		else
		{
			alert("wrong password")
		}
	}
	else
	{
		alert("Invalid details")
	}
}
