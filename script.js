const piada = document.getElementById('joke')
const piadaBtn = document.getElementById('jokeBtn')

piadaBtn.addEventListener('click', gerarPiada)

// gerarPiada()

// function gerarPiada() {
//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com',config)//usou-se a var config para guardar o objeto criado com o fetch
//     .then((res) => res.json())
//     .then((data) => {//console.log(data))//print na consola do objeto piada
//         piada.innerHTML = data.joke //piada vai receber por innerHTML apenas joke do objeto piada
//     })
// }

/********EM BAIXO O MESMO DO QUE EM CIMA, COM UMA ESCRITA MAIS LIMPA USANDO async E await  */ 

async function gerarPiada() {
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }
  const res = await fetch('https://icanhazdadjoke.com',config)

  const data = await res.json()
  piada.innerHTML = data.joke
}