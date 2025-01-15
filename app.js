// Função para gerar um número aleatório entre min e max (inclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Referência ao elemento select
const selectElement = document.getElementById("selectUserInput");

// Variáveis para o número secreto e tentativas
let numberSecret;
let tentativas = 0;

// Função para inicializar o jogo
function iniciarJogo() {
    const [min, max] = selectElement.value.split(',').map(Number); // Obtém os valores do select e converte para números
    numberSecret = getRandomIntInclusive(min, max); // Gera o número secreto
    tentativas = 0; // Reseta as tentativas
    document.getElementById("tentativasRestantes").textContent = `Tentativas Tentadas: 0`;
    alert(`Bem vindo ao minigame! O número secreto está entre ${min} e ${max}. Tente acertar!`);
}

// Inicializa o jogo ao carregar a página
iniciarJogo();

// Evento para enviar o palpite do usuário
document.getElementById("submitUserInput").addEventListener("click", function () {
    const userInput = parseInt(document.getElementById("userInput").value); // Obtém valor do input
    const tentativasRestantes = document.getElementById("tentativasRestantes");

    if (isNaN(userInput)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    tentativas++;
    tentativasRestantes.textContent = `Tentativas Tentadas: ${tentativas}`;

    if (userInput > numberSecret) {
        alert("Este número é maior que o número secreto!");
    } else if (userInput < numberSecret) {
        alert("Este número é menor que o número secreto!");
    } else {
        const elementos = document.getElementsByClassName("container__informacoes");

        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.display = "block";
        }

        document.getElementById("submitUserInput").disabled = true;
        return;
    }
});

// Evento para reiniciar o jogo ao mudar o select
selectElement.addEventListener("change", function () {
    iniciarJogo();
    document.getElementById("submitUserInput").disabled = false;
    const elementos = document.getElementsByClassName("container__informacoes");

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "none";
    }
});
