var repete =1; // sempre atribuir um numero inteiro.
var total_repete;

total_repete = prompt (" Quantas vezes você quer repetir a MENSAGEM? ");// O comando "PROMPT"  
//realiza uma mensagem antes exebindo uma mensagem e gravando a variavel.

while (repete <= total_repete){ // aqui comparamos com a condicional WHILE, que vai repetir a quantidade de vezes necessario.
    // se REPETE <= TOTAL_REPETE . Então continuará a execução.

    alert (" Mensagem: "+ repete); 
    // exibindo a mensagem e o numero do REPETE.

    repete = repete + 1; 
    // Acresentamos + 1 a variavel a REPETE  para a mesma não cair em LOOP INFINITO.
}