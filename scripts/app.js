const formulario = document.getElementById('Formulario')

formulario.addEventListener('submit', function(event){
    event.preventDefault();


    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById("edad").value 
    const fechaNacimiento = document.getElementById("fechaNacimiento").value

    const textoFinal = `Mi nombre es ${nombre}, mi edad es ${edad} y nací el ${fechaNacimiento}`

    document.getElementById('resultado').textContent = textoFinal

})