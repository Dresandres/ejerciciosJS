


//funcion para generar numeros aleatorios
function aleatorio (min, max){
    return Math.floor(Math.random()*(max - min+1)+min)
}

//funcion elección 

function eleccion (jugada){
    //creacion de variable interna 
    let resultado= ""

    if (jugada == 1){
        resultado= "piedra 🥔"
    }else if ( jugada ==2){
        resultado="papel 📑"
    }else if( jugada == 3){
        resultado= "tijera ✂"
    }else{
        resultado="Elegiste ser un pendejo 💩"
    }
    return resultado
}

//funcion combate

function combate(player, pc){

}

//1 es piedra, 2 es papel y 3 es tijera 
let player =0
let pc =0
//crear variable para registro de triunfos y perdidas
let win =0
let lose =0

while (win <3 && lose<3){
    pc = aleatorio(1,3)
    player= prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Elegiste :" + player)
    alert("PC elige: "+ eleccion(pc))
    alert("Jugador elige: "+ eleccion (player))

    //COMBATE
    //Decidiendo el ganador, utilziando booleanos para agrupar comparaciones en los condicionales
    if (pc == player ){
        alert(" ¡EMPATE! 😑")
    }
    else if( player == 1 && pc==3){
        alert("¡GANASTE! 🤘")
        win = win+1
    }
    else if( player == 2 && pc==1){
        alert("¡GANASTE! 🤘")
        win = win+1
    }
    else if ( player== 3 && pc==2){
        alert("¡GANASTE! 🤘")
        win = win+1
    }
    else {
        alert(" ... PERDISTE... 😢")
        lose = lose +1
    }
    alert("MARCADOR... PC 🖥️: "+ lose +" - jugador 😃: "+ win)

}

alert("Ganaste ✌️ "+ win + " veces. Perdiste 👎"+ lose)