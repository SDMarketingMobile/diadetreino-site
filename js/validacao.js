function myFunction() {
	var checkBox = document.getElementById("myCheck");
	var text = document.getElementById("text");
	if (checkBox.checked == true){
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}

function validar(detail) {
	var senha = form1.senha.value;

	if (detail == 1) {
		if (senha == ""){
			window.open("https://pag.ae/bmBFN2J", '_blank'); // sem cupom 1
		}
		else if (senha != "1111"){
			alert('cupom invalido');
			form1.senha.focus();
			return false;
		}
		else
			window.open("https://pag.ae/bcBWTKR",'_blank');	// com cupom 1
	} else if (detail == 2) {
		if (senha == ""){
			window.open("https://pag.ae/bbBFTJ8", '_blank'); // sem cupom 2
		}
		else if (senha != "2222"){
			alert('cupom invalido');
			form1.senha.focus();
			return false;
		}
		else
			window.open("https://pag.ae/bcB91HR",'_blank');	// com cupom 2
	} else if (detail == 3) {
		if (senha == ""){
			window.open("https://pag.ae/bkBFVym", '_blank'); // sem cupom 3
		}
		else if (senha != "3333"){
			alert('cupom invalido');
			form1.senha.focus();
			return false;
		}
		else
			window.open("https://pag.ae/bgB916K",'_blank');	// com cupom 3
	}

	

}