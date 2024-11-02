function encriptar(texto) {
    return btoa(texto); // Ejemplo simple de encriptación Base64
  }
  
  function enviarFormulario(event) {
    event.preventDefault();
    const clave = document.getElementById('clave').value;
    const claveEncriptada = encriptar(clave);
    console.log('Clave encriptada:', claveEncriptada);
    // Aquí enviarías `claveEncriptada` al servidor
  }