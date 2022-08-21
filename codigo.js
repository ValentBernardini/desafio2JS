//calculadora Valentin Bernardini
const sumar = (num1,num2) =>{
    return (num1) + (num2)
}

const restar = (num1,num2) =>{
    return (num1) - (num2)
}

const dividir = (num1,num2) =>{
    return (num1) / (num2)
}

const multiplicar = (num1,num2) =>{
    return (num1) * (num2)
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2:resta, 3:division, 4:multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("primero numero para sumarr");
    let numero2 = prompt("primero numero para sumar");
    resultado = sumar(numero1,numero2);
    alert("tu resultado es " , resultado);
} 
else if (operacion == 2) {
    let numero1 = prompt("primero numero para restar");
    let numero2 = prompt("primero numero para restar");
    resultado = restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 3) {
    let numero1 = prompt("primero numero para dividir");
    let numero2 = prompt("primero numero para dividir");
    resultado = dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
}
 else if (operacion == 4) {
    let numero1 = prompt("primero numero para multi");
    let numero2 = prompt("primero numero para multui");
    resultado = multiplicar(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
}
else {alert("no se encontro la operacion")}
