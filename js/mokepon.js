let ataqueJugador
let ataqueEnemigo

function iniciarjuego(){
  let btnMascotaJugador = document.getElementById("btnmascota")
  let btnFuego = document.getElementById("btnfuego")
  let btnAgua = document.getElementById("btnagua")
  let btnTierra = document.getElementById("btntierra")

  btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
  btnFuego.addEventListener("click", ataqueFuego)
  btnAgua.addEventListener("click", ataqueAgua)
  btnTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador() {
  let inputIpodoge = document.getElementById("Ipodoge")
  let inputCapipepo = document.getElementById("Capipepo")
  let inputRatigueya = document.getElementById("Ratigueya")
  let inputLagostelvis = document.getElementById("Lagostelvis")
  let inputTucalpama = document.getElementById("Tucalpama")
  let inputPydos = document.getElementById("Pydos")
  let spanMascotaJugador = document.getElementById("mascotaJugador")

  if (inputIpodoge.checked){
    spanMascotaJugador.innerHTML= "ipodoge"
    alert("Usted ha seleccionado Ipodoge")
  }else if (inputCapipepo.checked){
    spanMascotaJugador.innerHTML= "Capipepo"
    alert("Usted ha seleccionado Capipepo")
  }else if (inputRatigueya.checked){
    spanMascotaJugador.innerHTML= "Ratigueya"
		alert("Usted ha seleccionado Ratigueya")
  }else if (inputLagostelvis.checked){
    spanMascotaJugador.innerHTML= "Lagostelvis"
		alert("Usted ha seleccionado Lagostelvis")
  }else if (inputTucalpama.checked){
    spanMascotaJugador.innerHTML= "Tucalpama"
	  alert("Usted ha seleccionado Tucalpama")
  }else if (inputPydos.checked){
    spanMascotaJugador.innerHTML= "Pydos"
	  alert("Usted ha seleccionado Pydos")
  }else{
    alert("NO SELECCIONASTE UNA MASCOTA")
  }

  seleccionarMascotaEnemigo()
}

function aleatorio(min, max){
  return Math.floor(Math.random()* (max - min + 1)+min)
}

function seleccionarMascotaEnemigo(){
  let elegirEnemigo = aleatorio(1,6)
  let spanmascotaEnemigo= document.getElementById("mascotaEnemigo")
  if (elegirEnemigo ==1){
    spanmascotaEnemigo.innerHTML = "ipodoge"
  }else if (elegirEnemigo == 2){
    spanmascotaEnemigo.innerHTML = "capipepo"
  }else if (elegirEnemigo == 3){
    spanmascotaEnemigo.innerHTML = "Ratigueya"
  }else if (elegirEnemigo == 4){
    spanmascotaEnemigo.innerHTML = "Lagostelvis"
  }else if (elegirEnemigo == 5){
    spanmascotaEnemigo.innerHTML = "Tucalpama"
  }else {
    spanmascotaEnemigo.innerHTML = "Pydos"
  }
}

function ataqueFuego(){
  ataqueJugador = "FUEGO"
  ataqueAleatorioEnemigo()
}
function ataqueAgua(){
  ataqueJugador = "AGUA"
  ataqueAleatorioEnemigo()
}
function ataqueTierra(){
  ataqueJugador = "TIERRA"
  ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
  ataqueAleatorio = aleatorio (1,3)
  if (ataqueAleatorio==1){
    ataqueEnemigo = "FUEGO"
  }else if (ataqueAleatorio == 2){
    ataqueEnemigo= "AGUA"
  }else{
    ataqueEnemigo= "TIERRA"  
  }
  crearMensajes()
}

function crearMensajes(){
  let seccionmensajes = document.getElementById("mensajes")
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Tu mascota atacó con "+ataqueJugador+", la mascota del enemigo atacó con"+ataqueEnemigo+" - GANASTE 🎉🎉"
  seccionmensajes.appendChild(parrafo)
}

window.addEventListener('load', iniciarjuego)