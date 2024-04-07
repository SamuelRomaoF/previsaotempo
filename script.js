const key = "d89ea649f45c02cb53ca6212d3be652e";

function colocarDadosnatela(dados) {
    console.log(dados);
    document.querySelector(".cidade").textContent = "tempo em " + dados.name;
    document.querySelector(".temp").textContent = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").textContent = dados.weather[0].description;
    document.querySelector(".umidade").textContent = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt&units=metric`).then(resposta => resposta.json());
    
    colocarDadosnatela(dados);
}

function cliqueinoBotao() {
    const input = document.querySelector(".input-cidade").value;
    
    buscarCidade(input); // Corrigido para passar 'input' como argumento
}
