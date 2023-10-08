function actualizarReloj() {
    const reloj = document.getElementById('hora');
    const now = new Date();
    const hora = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const segundos = now.getSeconds().toString().padStart(2, '0');
    reloj.textContent = hora + ':' + minutos + ':' + segundos;
}

actualizarReloj();

setInterval(actualizarReloj, 1000);
