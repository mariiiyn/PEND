console.log("Olá, Javascript");

let a = 10;
let b = 3;
console.log("Adicao" ,a + b);
console.log("subtração",a - b);
console.log("multiplicação",a * b);
console.log("divisão",a / b);
console.log("resto de divisão",a % b);
console.log("potenciação",a ** b);

let contador=5;
contador++;
console.log(contador);

let x = 10;
let y = 5;
let z = 2;
console.log((x + y + z) / 3);

let m=31;
let t= 2;
console.log(m % t);

let e =10;
let v= "10"

console.log("igual",e == v);
console.log("identico",e === v);
console.log("diferente", e != v);
console.log("não identico",e !== v);

/*exercicio 3*/
let idade = 19;
if(idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
/*exercicio 4*/
let num= 31;
let nume= 10;
if(num> nume){
    console.log("O maior número é:", num);
}else if(nume> num){
    console.log("O maior número é:", nume);
};

/*OPERADORES LÓGICOS*/
let idd= 20;
let temCarteira= true;
console.log(idd >=18 && temCarteira);

let chovendo= false;
let guardaChuva= true;
console.log(chovendo || guardaChuva);

let ligado= false;
console.log(!ligado); //true

/*exercicio 5*/
let nota=7;
if(nota >=7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
let frequencia= 75;
if(frequencia >= 75){
    console.log("Aprovado por frequência");
} else {
    console.log("Reprovado por frequência");
}

/*exercicio 6*/
let login = true;
let toke= false;
console.log(login || token);
