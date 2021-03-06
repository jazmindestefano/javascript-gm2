//EJERCICIO 1

//En JS , se identifica el tipo de dato por si solo, 
//no hace falta especificarlo

/* ADICION */


export function addition (arrayNum, numero) {

    //añadir nuevo array para guardar el numero como string
    let arrayNuevoNum = "";

    /*
    iterar array pasado por parametro
    añadir numeros de arrayNum a arrayNuevoNum
    los numeros tienen que pasarse como cadena de String (saca comas)
    */

    for (num of arrayNum) {
        arrayNuevoNum += num.toString(); //cadena de string
    }
    
    //convertir arrayNuevoNum en int
    arrayNuevoNum = Number(arrayNuevoNum);

    //realizar la suma
    arrayNuevoNum += numero;

    //convertir arrayNuevoNum a un array
    let arrayResult = String(arrayNuevoNum).split("").map((arrayNuevoNum) => {
        return Number(arrayNuevoNum)
    })

    //retornar arrayNuevoNum
    return arrayResult;
}


/*******************************************************************/

/* RESTA */

export function rest (arrayNum, numero) {

    //añadir nuevo array para guardar el numero como string
    let arrayNuevoNum = "";

    /*
    iterar array pasado por parametro
    añadir numeros de arrayNum a arrayNuevoNum
    los numeros tienen que pasarse como cadena de String (saca comas)
    */

    for (num of arrayNum) {
        arrayNuevoNum += num.toString(); //cadena de string
    }
    
    //convertir arrayNuevoNum en int
    arrayNuevoNum = Number(arrayNuevoNum);

    //realizar la resta
    arrayNuevoNum -= numero;

    let arrayResult;
    //convertir arrayNuevoNum a un array
    if(arrayNuevoNum > 0){
        arrayResult = String(arrayNuevoNum).split("").map((arrayNuevoNum) => {
            return Number(arrayNuevoNum)
        }) 
    } else {
        arrayResult = 0;
    }

    //retornar arrayNuevoNum
    return arrayResult;
}


/*******************************************************************/

/* PAREJAS O PARIDAD */

let arrayNumeros = [1,1,2,4,7,8];
let numPares=[];
let parejas=[];

function arrayHayPares (arrayNumeros) {
    //el array tiene un numero par?
    for (const num of arrayNumeros) {
        //evaluar si cada numero es par
        let par = num%2;
        if(par==0){
            numPares.push(num);
        }
    }

    let par = false;
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let k = 0; k < arrayNumeros.length; k++) {
            for (let j = 0; j < numPares.length; j++) {
                if(arrayNumeros[i] + arrayNumeros[k] == numPares[j]){
                    par = true;
                    parejas.push(arrayNumeros[i]);
                }
            } 
        }
    }

    //comparar si esa suma existe en el array de pares

    return par;
}


//???????????????????????????????????????????



/* EJERCICIO 3 PALINDROMO */

let palindromo = "abba";

function esPalidromo (palindromo) {
    let b = false;
    //invertir el array
    let arrayInvertido = palindromo.split("").reverse().join(""); 
    //comparar los dos arrays
    palindromo == arrayInvertido ? b = true : b = false;
    //retornar true o false
    return b;
}




/* EJERCICIO 4 ROMANOS*/

let number = 2995;
let romanos = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
let romano = "";

function convertirARomano(number){
    for (let i of Object.keys(romanos)) {
        var q = Math.floor(number / romanos[i]);
        number -= q * romanos[i];
        romano += i.repeat(q);
    }
    return romano;
}