
function iniciarJuego(){
    //let se usa para declarar la variable 
    //la linea document se usa para buscar en el html el boton especifico por el id
    let botonMascotaJugador = document.getElementById('boton-mascota')
    //La informacion para almacenar en la variable proviene de un evento
    //en este caso de escuchar el click en el boton, se usa el addEventListener con el 
    //parametro click y el id del boton que se quiere escuchar 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}


function seleccionarMascotaJugador(){
    // se crea una variable para almacenar la información 
    // del GET la cual esta verificando el check del la selcción 
    let inputHipodoge = document.getElementById('hipodoge') 
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    if(inputHipodoge.checked){
        alert('seleccionaste a HIPODOGE')
    } else if (inputCapipepo.checked) {
        alert('seleccionaste a CAPIPEPO')
    } else if (inputRatigueya.checked){
        alert('seleccionaste a CAPIPEPO')
    } else if (inputTucapalma.checked){
        alert('seleccionaste a TUCAPALMA')
    } else if (inputPydos.checked){
        alert('seleccionaste a PYDOS')
    } else{
        alert('Debe seleccionar alguna de las mascotas')
    }
}



//linea para escuchar el evento y activar la funciones una vez
//todo el html carge, estos se logra usando el parametro load en el 
// addEventListener 
window.addEventListener('load', iniciarJuego)