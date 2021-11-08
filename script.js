const piada = document.getElementById('joke')
const piada = document.getElementById('jokeBtn')

gerarPiada()

function gerarPiada() {
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config)
}