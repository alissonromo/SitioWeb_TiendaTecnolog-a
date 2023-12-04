function celulares(){

	document.getElementById("contenidoFrame").src="celulares.html";

}

function computadoras(){

	document.getElementById("contenidoFrame").src="computadoras.html";

}

function tablets(){

	document.getElementById("contenidoFrame").src="tablets.html";

}


function relojes(){

	document.getElementById("contenidoFrame").src="relojes.html";

}

function promotionAirPod(){

	const modal_container = document.getElementById('modal_container')
	modal_container.classList.add('show');
	
	const close = document.getElementById('close')
	close.addEventListener('click', () => {
	modal_container.classList.remove('show');
});

}


function promotioniPad(){

	const modal_container1 = document.getElementById('modal_container1')
	modal_container1.classList.add('show');
	
	const close1 = document.getElementById('close1')
	close1.addEventListener('click', () => {
	modal_container1.classList.remove('show');
});

}


function promotionHuawei(){
	
	const modal_container2 = document.getElementById('modal_container2')
	modal_container2.classList.add('show');
	
	const close2 = document.getElementById('close2')
	close2.addEventListener('click', () => {
	modal_container2.classList.remove('show');
});
}

function cantidadComprada(){

	var cont = 0;
	var monto = 0;

	if(document.getElementById('S9_Active2').checked){
		cont = 1;
		monto = 95000;
	} 

	if(document.getElementById('Pad_iPhone').checked) {
		cont = cont + 1;
		monto = monto + 133998
	}

	
	if (document.getElementById('AirPod').checked) {
		cont = cont + 1;
		monto = monto + 21025;
	}

	
	if (document.getElementById('PadPro').checked) {
		cont = cont + 1;
		monto = monto + 39999;
	}

	
	if (document.getElementById('HuaweiP8').checked) {
		cont = cont + 1;
		monto = monto + 19017;
	}

	
	if (document.getElementById('Galaxy3x2').checked) {
		cont = cont + 1;
		monto = monto + 63036;
	}

	
	if (document.getElementById('PhoneXSMax').checked) {
		alert("iPhoneXSMAX seleccionado")
		cont = cont + 1;
		monto = monto + 91845;
	}

	let p_cont = document.getElementById('contenedor');
	let parrafos = p_cont.getElementsByTagName('p');

	let parrafo = document.createElement('p');
	parrafo.innerText = "Cantidad de producto: " + cont;

	let parrafo2 = document.createElement('p');
	parrafo2.innerText = "Monto total: " + monto;

	p_cont.appendChild(parrafo);
	p_cont.appendChild(parrafo2);

	const modal_container3 = document.getElementById('modal_container3')
	modal_container3.classList.add('show'); 
	
	const close3 = document.getElementById('close3')
	close3.addEventListener('click', () => {
	modal_container3.classList.remove('show');
	
	p_cont.removeChild(parrafos[2]);
	p_cont.removeChild(parrafos[1]);
});


}