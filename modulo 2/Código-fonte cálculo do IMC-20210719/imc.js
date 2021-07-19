function calculaIMC(){

  document.getElementById("altura").style.borderColor = "#ffffff";
  document.getElementById("altura").style.backgroundColor = "#ffffff";
  document.getElementById("peso").style.borderColor = "#ffffff";
  document.getElementById("peso").style.backgroundColor = "#ffffff";

  if(document.getElementById("peso").value == ""){
	alert("Preencha o peso");
	document.getElementById("peso").style.borderColor = "red";
	document.getElementById("peso").style.backgroundColor = "#ffe5e5";
	document.getElementById("peso").focus();
    return false;
  }

  if(document.getElementById("altura").value == ""){
	alert("Preencha o altura");
	document.getElementById("altura").style.borderColor = "red";
	document.getElementById("altura").style.backgroundColor = "#ffe5e5";
	document.getElementById("altura").focus();
    return false;
  }

  // Calculo do IMC

  var peso = parseFloat(document.getElementById("peso").value); // trasformando o string em numeros flutuante.
  var altura = parseFloat(document.getElementById("altura").value); // trasformando o string em numeros flutuante
  var resultado = peso/(altura*altura); // Fórmula do IMC


  if( resultado < 18.5) { // aqui iniciamos comando de de CONDIÇÃO (IF & ELSE). if= se. ELSE= então.
    
   alert("Seu IMC é: "+resultado+ ": Desnutrido");
  return true;
  
  }

  if( resultado >=18.5 && resultado <=24.99 ) { // aqui iniciamos comando de de CONDIÇÃO (IF & ELSE). if= se. ELSE= então.
    
    alert("Seu IMC é: "+resultado+ ": Normal	0");
   return true;
   
  }

  if( resultado >=25 && resultado <=29.99 ) { // aqui iniciamos comando de de CONDIÇÃO (IF & ELSE). if= se. ELSE= então.
    
    alert("Seu IMC é: "+resultado+ ": Sobrepeso	1");
   return true;
   
  }

  if( resultado >=30 && resultado <=39.99 ) { // aqui iniciamos comando de de CONDIÇÃO (IF & ELSE). if= se. ELSE= então.
    
    alert("Seu IMC é: "+resultado+ ": Obesidade 2 ");
   return true;
   
  }

  else{
    alert("ATENÇÃO!!! Seu IMC é: "+resultado+ ": Obesidade- GRAVE 3");
    return true;
  }

  
}