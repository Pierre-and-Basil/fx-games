function auth() {
    var email = document.getElementById("now1").value;
    var password = document.getElementById("now2").value;

    if (email === 'ez' && password === 'pz') {
        sessionStorage.setItem('Log', 'authenticated');
        window.location.href = 'login.html';
    }else if ((email === 'pierre-admin@gmail.com' && password === '123') || (email === 'basil-admin@gmail.com' && password === '123')) {
        sessionStorage.setItem('Log', 'authenticated');
        alert("Hi Admin (Pierre Sameh)");
        window.location.href = 'login.html';
    }else if(email == 'pierre-3mk' && password == 'pierre'){
		sessionStorage.removeItem('Log');
		alert("Hi Admin (Pierre Sameh)");
		window.location.href = 'login.html';
	}else if(email == 'basil-admin' && password == 'basil'){
		sessionStorage.removeItem('Log');
		alert("Hi Admin (Basil Hamidi)");
		window.location.href = 'login.html';
	}else if(email == 'steven-123' && password == '123'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Steven Sameh)");
		window.location.href = 'login.html';
	}else if(email == 'abdullah-mohamed' && password == '12345'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Abdullah Mohamed)");
		window.location.href = 'login.html';
	}else if(email == 'abdullah-mohazk' && password == 'a7a'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Abdullah Abo A7a)");
		window.location.href = 'login.html';
	}else if(email == 'drizz' && password == '123'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Ahmed Tamer)");
		window.location.href = 'login.html';
	}else if(email == '3b00d' && password == '123456789097654321'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Abdullah Rababah)");
		window.location.href = 'login.html';
	}else if(email == 'coltdark' && password == '05hamed05'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Hamed Ali)")
		window.location.href = 'login.html';
	}else if(email == 'WECTY' && password == '259514'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Omar Elasyed)")
		window.location.href = 'login.html';
	}else if(email == 'yousef' && password == 'pierre'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Yousef Gihad)")
		window.location.href = 'login.html';
	}else if(email == 'karam' && password == 'elsysy'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Karam Ayman)")
		window.location.href = 'login.html';
	}else if(email == 'taim-3mk' && password == '3mk'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Taim Mahmoud)")
		window.location.href = 'login.html';
	}else if(email == 'mohammed-3mk' && password == '3mk'){
		sessionStorage.removeItem('Log');
		alert("Hi User (Moahmmed Sultan)")
		window.location.href = 'login.html';
	}else{
        document.getElementById("error").innerHTML = '<div class="alert alert-danger" role="alert">Wrong Username Or Password!</div>';
        alert("Wrong Username Or Password!");
    }
}

window.onload = function(){
    alert("THE WEBSITE ( FX +_+ GAMES ) MADE BY PIERRE AND BASIL (WELCOME ALL)");
    sessionStorage.setItem('Log', 'not');
};
