var nota1;// criando variaveis 
var nota2;
var media;

nota1 = prompt(" Digite a 1º nota: "); // gravando numeros na variavel.
nota2 = prompt(" Digite a 2º nota: ");
media = (nota1+nota2)/ 2; // calculo. 

if( media >= 7) { // aqui iniciamos comando de de CONDIÇÃO (IF & ELSE). if= se. ELSE= então.
    alert("Aluno aprovado");
}
else{
    alert("ATENÇÃO!!! --> Aluno reprovado");
}