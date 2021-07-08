var sair;

sair = confirm(" Confirma ir para a página do GOOGLE? "); 
// comando "CONFIRM" atribui a varivel SAIR como verdadeira, se cliacar em OK. 
// que e representada pelo numero 1 ( VERDADEIRO ) e 0 ( FALSO )

if (sair == 1){ // aqui questionamso com a condicional IF , se sair e igual 1.

    window.location =  // aqui usamos o comando WINDOW.LOCATION , para direcionar o endereço.
    "http://www.google.com.br";

}
