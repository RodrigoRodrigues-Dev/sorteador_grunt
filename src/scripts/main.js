document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();

        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAletorio = Math.random() * numeroMaximo;
        numeroAletorio = Math.floor(numeroAletorio + 1);

        document.getElementById('resultadoValor').innerHTML = numeroAletorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})