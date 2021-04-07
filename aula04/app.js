console.log("hello world");

//variaveis
let nome = "Gabriel Medeiros";
let idade = 40;
let isprofessor = true;

nome = "Robson";
idade = 22;
isprofessor = false;

console.log("Tipo da variável nome: " + typeof(nome));
console.log("Tipo da variável idade: " + typeof(idade));
console.log("Tipo da variável isprofessor: " + typeof(isprofessor));
console.log("++++++++++++++++++++++++++++++");
//mostrar resultado em javascript
console.log(`Tipo da variável nome: ${typeof(nome)} `);
console.log(`Tipo da variável idade: ${typeof(idade)} `);
console.log(`Tipo da variável isprofessor: ${typeof(isprofessor)} `);
console.log("++++++++++++++++++++++++++++++");
/*
Operadores matemáticos
+: soma
-: subtração
*:multiplicação
/: divisão
%: resto de divisão 
*/
let num1, num2;
num1 = 5;
num2 = 10;
console.log(`A soma dos números é ${(num1+num2)} `);
console.log(`A subtração dos números é ${(num1-num2)} `);
console.log(`A multiplicação dos números é ${(num1*num2)} `);
console.log(`A divisão dos números é ${(num1/num2)} `);
console.log("++++++++++++++++++++++++++++++");
//matematica ordem de prioridade dentro dos parenteses vem primeiro
console.log(`calculo de prioridade1 ${((num1+num2)*10)} `);
console.log(`calculo de prioridade2 ${(num1+num2*10)} `);
console.log("++++++++++++++++++++++++++++++");

//comparação boolean
console.log(4>5);
console.log(4!=5);
console.log("++++++++++++++++++++++++++++++");

/*operadores lógicos
&& = and (V && F) = False
|| = or (V || F) = True
! = not !(V || F) = False
*/
console.log(idade>22 && idade<41);
console.log(idade>22 || idade<41);
console.log("++++++++++++++++++++++++++++++");

//cria um alerta na tela
//alert("Alert na tela");

/* estrurura condicional
if 
if else
else if
switch
*/

if(nome=="Robson"){
    console.log("Professor");
}else{
    console.log("Aluno");
}
console.log(nome);

// isprofessor==true
if(isprofessor){
    console.log("Professor");
}else{
    console.log("Aluno");
}

console.log("+++++++++++++++++++++++++++++++++++++++++++");
/*Estrutura de repetição
while
do while
for
*/

let numero = 10;
while(numero > 0){
    console.log("0 x é: " + numero);
    numero = numero -1;
    //numero -= 1;
    //numero --;
};

console.log("+++++++++++++++++++++++++++");

numero = 0;
do{
    console.log("0 x é: " + numero);
    numero = numero -1;
}while(numero > 0)

console.log("+++++++++++++++++++++++++++");

for(let contador = 0; contador <= 10; contador = contador + 1){
    console.log("Valor do contador é " + contador);
}

console.log("+++++++++++++++++++++++++++");

//matriz array
let nrs = [1,3,5,7];

//mostra o numero na posição da matriz nrs ordem = [0,1,2,3]
console.log(nrs[3]);

//mostra o numero de valores/elementos na matriz
console.log(nrs.length);

console.log("Valores da matriz")
for(let indice = 0; indice < nrs.length; indice++){
    console.log(nrs[indice]);
}

//outra forma
console.log("+++++++++++++++++++++++++++");

let estudantes = ["Felipe","João","Alana","Julia","Gustavo"];
estudantes.forEach(estudante => {
    console.log(estudante);
})
console.log("+++++++++++++++++++++++++++");

//função
let numero_escolhido = 5;
function parimpar(){
    if(numero_escolhido%2==0){
        console.log("É par");
    }else{
        console.log("É impar");
    }
}
parimpar();

console.log("++++++++++++++++++++++++++")
//outra forma
function parimpar2(valor){
    if(valor%2==0){
        console.log("O número " + valor + " é par");
    }else{
        console.log("O número " + valor + " é impar");
    }
}

parimpar2(2);
parimpar2(7);
parimpar2(9965447);
parimpar2(10);