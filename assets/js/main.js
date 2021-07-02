function functionEscopo(){

	const formulario = document.querySelector('#form');
	const resultado = document.querySelector('#result');

	formulario.addEventListener('submit', receberDados);
	function receberDados(evento){
		evento.preventDefault(); //Previnir pag de recarregar ao clicar em enviar
	
		const txtPeso = formulario.querySelector('#peso');
		const txtAltura = formulario.querySelector('#altura');
	
		conferirDados(txtPeso, txtAltura);
	}

	function conferirDados(peso, altura){
		const numPeso = Number(peso.value);
		const numAltura = Number(altura.value);
		
		if(numPeso === 0 || numAltura === 0){ // === 0, pois quando está vazio, considera como 0
			resultado.innerHTML = 'Está faltando dados!';
			resultado.style.backgroundColor = 'rgb(255, 86, 86)';
		}else if(Number.isNaN(numPeso)){
			resultado.innerHTML = 'O valor inserido para o peso é inválido!';
			resultado.style.backgroundColor = 'rgb(255, 86, 86)';
		}else if(Number.isNaN(numAltura)){
			resultado.innerHTML = 'O valor inserido para a altura é inválido!';
			resultado.style.backgroundColor = 'rgb(255, 86, 86)';
		}else{
			calcularIMC(numPeso, numAltura);
		}

	}

	function calcularIMC(peso, altura){
		const imc = peso/(altura**2);
		analisarIMC(imc.toFixed(2))
	}

	function analisarIMC(imc){
		const niveis = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
		'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
		if(imc < 18.5){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[0]}`;
			resultado.style.backgroundColor = 'rgb(255, 124, 48)';
		}else if(imc >= 18.5 && imc <= 24.99){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[1]}`;
			resultado.style.backgroundColor = 'rgb(12, 255, 134)';
		}else if(imc >= 25 && imc <= 29.99){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[2]}`;
			resultado.style.backgroundColor = 'rgb(255, 255, 112)';
		}else if(imc >= 30 && imc <= 34.99){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[3]}`;
			resultado.style.backgroundColor = 'rgb(255, 255, 112)'
		}else if(imc >= 35 && imc <=39.99){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[4]}`;
			resultado.style.backgroundColor = 'rgb(255, 124, 48)';
		}else if(imc >= 40){
			resultado.innerHTML = `IMC: ${imc} -> ${niveis[5]}`;
			resultado.style.backgroundColor = 'rgb(255, 86, 86)';
		}
	}
}
functionEscopo();