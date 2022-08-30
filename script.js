

let cantidad = document.getElementById("cantidad");
cantidad.addEventListener("change", function () {
    let valor = parseInt(document.getElementById("cantidad").value);
    let moneda = document.getElementById("moneda").value;
    let dolar = 134.24;
    resultado = 0;
    if (moneda == "dolar") {
        resultado = valor / dolar;
    }
    else {
        console.log("Seleccione una moneda")
    }
    document.getElementById("resultado").innerHTML = "Resultado: $" + resultado.toFixed(2);
})

let contact = document.getElementById("contact");
contact.addEventListener("submit", function (e) {
    e.preventDefault();
})


let enviar = document.getElementById("enviar");
enviar.addEventListener("click", function () {

    Swal.fire({
        title: '<strong>Resultado</strong>',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        html:
            "Resultado: " + resultado.toFixed(2),
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            ' Genial!',
        confirmButtonAriaLabel: 'Aceptar'
    })


})


let user = []

function set_data() {
    let nombre_usuario = document.getElementById("nombres");
    let usuario = { "nombres": nombre_usuario.value };

    user.push(usuario);

    let user_JSON = JSON.stringify(user);
    sessionStorage.setItem("usuarios", user_JSON);
}





fetch('https://api.fastforex.io/fetch-one?from=USD&to=ARS&api_key=0ceebf1889-29afa43f76-rhcjch')
    .then(response => response.json())
    .then(response => {
        document.getElementById("apiDolar").innerHTML = "Dolar: " + response.result.ARS.toFixed(2)
    })
    .catch(err => console.error(err));



