let intervalo; // Variable global para controlar el intervalo de tiempo

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa el contador al cargar la página si es necesario
});

function actualizarContador() {
  clearInterval(intervalo); // Limpia el intervalo existente antes de empezar uno nuevo

  const titulo = document.getElementById("tituloInput").value;
  const minutos = parseInt(document.getElementById("minutosInput").value) || 0;
  const segundos =
    parseInt(document.getElementById("segundosInput").value) || 0;
  const countdownElement = document.getElementById("countdown");
  const tituloElement = document.getElementById("titulo");
  countdownElement.classList.remove("finalizado");

  if (titulo) {
    tituloElement.innerText = titulo;
  }

  let tiempoTotal = minutos * 60 + segundos;

  intervalo = setInterval(() => {
    const minutosActual = Math.floor(tiempoTotal / 60);
    const segundosActual = tiempoTotal % 60;

    countdownElement.innerHTML = `${minutosActual}m ${segundosActual}s`;

    if (tiempoTotal <= 0) {
      clearInterval(intervalo);
      countdownElement.classList.add("finalizado");
      countdownElement.innerHTML = "TIEMPO FINALIZADO";
    }

    tiempoTotal--;
  }, 1000);
}

function iniciarServicio(){
    clearInterval(intervalo); // Limpia el intervalo existente antes de empezar uno nuevo

    const titulo = "Alabanza";
    const minutos = 25;
    const segundos = 0;
    const countdownElement = document.getElementById("countdown");
    const tituloElement = document.getElementById("titulo");

    tituloElement.innerHTML = titulo;
    countdownElement.classList.remove("finalizado");

    let tiempoTotal = minutos * 60 + segundos;

    intervalo = setInterval(() => {
      const minutosActual = Math.floor(tiempoTotal / 60);
      const segundosActual = tiempoTotal % 60;

      countdownElement.innerHTML = `${minutosActual}m ${segundosActual}s`;

      if (tiempoTotal <= 0) {
        ofrenda();
      }

      tiempoTotal--;
    }, 1000);
}

function predica() {
  clearInterval(intervalo); // Limpia el intervalo existente antes de empezar uno nuevo

  const titulo = "Prédica";
  const minutos = 35;
  const segundos = 0;
  const countdownElement = document.getElementById("countdown");
  const tituloElement = document.getElementById("titulo");

  tituloElement.innerHTML = titulo;
  countdownElement.classList.remove("finalizado");

  let tiempoTotal = minutos * 60 + segundos;

  intervalo = setInterval(() => {
    const minutosActual = Math.floor(tiempoTotal / 60);
    const segundosActual = tiempoTotal % 60;

    countdownElement.innerHTML = `${minutosActual}m ${segundosActual}s`;

    if (tiempoTotal <= 0) {
      clearInterval(intervalo);
      countdownElement.classList.add("finalizado");
      countdownElement.innerHTML = "TIEMPO FINALIZADO";
    }

    tiempoTotal--;
  }, 1000);
}

function alabanza() {
  clearInterval(intervalo); // Limpia el intervalo existente antes de empezar uno nuevo

  const titulo = "Alabanza";
  const minutos = 25;
  const segundos = 0;
  const countdownElement = document.getElementById("countdown");
  const tituloElement = document.getElementById("titulo");

  tituloElement.innerHTML = titulo;
  countdownElement.classList.remove("finalizado");

  let tiempoTotal = minutos * 60 + segundos;

  intervalo = setInterval(() => {
    const minutosActual = Math.floor(tiempoTotal / 60);
    const segundosActual = tiempoTotal % 60;

    countdownElement.innerHTML = `${minutosActual}m ${segundosActual}s`;

    if (tiempoTotal <= 0) {
      clearInterval(intervalo);
      countdownElement.classList.add("finalizado");
      countdownElement.innerHTML = "TIEMPO FINALIZADO";
    }

    tiempoTotal--;
  }, 1000);
}

function ofrenda() {
  clearInterval(intervalo); // Limpia el intervalo existente antes de empezar uno nuevo

  const titulo = "Ofrenda";
  const minutos = 10;
  const segundos = 0;
  const countdownElement = document.getElementById("countdown");
  const tituloElement = document.getElementById("titulo");

  tituloElement.innerHTML = titulo;
  countdownElement.classList.remove("finalizado");

  let tiempoTotal = minutos * 60 + segundos;

  intervalo = setInterval(() => {
    const minutosActual = Math.floor(tiempoTotal / 60);
    const segundosActual = tiempoTotal % 60;

    countdownElement.innerHTML = `${minutosActual}m ${segundosActual}s`;

    if (tiempoTotal <= 0) {
      predica();
    }

    tiempoTotal--;
  }, 1000);
}

function borrarContador() {
  clearInterval(intervalo);
  document.getElementById("countdown").innerHTML = "";
  document.getElementById("titulo").innerText = "Título del Contador";
}

function reiniciarContador() {
  clearInterval(intervalo);
  document.getElementById("minutosInput").value = "";
  document.getElementById("segundosInput").value = "";
  actualizarContador();
}
