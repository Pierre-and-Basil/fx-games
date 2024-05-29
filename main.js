window.onload = function(){
   sessionStorage.setItem('Log','not')
};
function auth(){
	var email = $("#now1").val();
	var password = $("#now2").val();
	if(email == 'ez' && password == 'pz'){
for (let index = 0; index < array.length; index++) {
	const element = array[index];
			sessionStorage.removeItem('Log');
	
}		window.location.href = 'login.html';
	}else if(email == 'pierre-3mk' && password == 'pierre'){
		sessionStorage.removeItem('Log');
		alert("Welcome !!")
		window.location.href = 'login.html';
	}else if(email == 'basil-admin' && password == 'basil'){
		sessionStorage.removeItem('Log');
		alert("Welcome !!")
		window.location.href = 'login.html';
	}else if(email == 'steven-123' && password == '123'){
		sessionStorage.removeItem('Log');
		alert("Welcome !!")
		window.location.href = 'login.html';
	}else{
		$("#error").html('<div class="alert alert-danger" role="alert">Wrong Username Or Password !</div>');
		alert("Wrong Username Or Password !")
	}
}
onload = function(){
      this.alert("THE WEBSITE ( FX +_+ GAMES ) MADE BY PIERRE AND BASIL (WELCOME ALL)")
}
