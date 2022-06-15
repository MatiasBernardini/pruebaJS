/*
let VidaPersonaje = 86

if(VidaPersonaje == 0){
    alert ("Muerto")
} else if (VidaPersonaje <= 15){
    alert ("Poca Vida")
} else if (VidaPersonaje <= 50){
    alert ("Curate")
} else if (VidaPersonaje <= 100){
    alert ("Buena Vida")
}
*/

let numero = parseInt ( prompt ("Ingrese Numero que quiera dividirlo por 10 veces"))
for (let i=1; i<=10; i++){
    let resultado = numero/i
    console.log(numero + ":" + i + "=" + resultado)
}