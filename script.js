

const key = "d89ea649f45c02cb53ca6212d3be652e"


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then( Resposta => resposta.json())

    console.log(dados)
}


function cliqueinoBotao() {
    const input = document.querySelector(".input-cidade").value;
    
    
    
 
buscarCidade(input); // Corrigido para passar 'input' como argumento
}