const numeroMisterioso = Math.floor(Math.random()*(100 - 1)) + 1;
const vidasMaximas = 10;
let vidasAtuais = vidasMaximas;
let chutesErrados = []

console.log(numeroMisterioso)

/*
    1. Gerar o número misterioso
    2. Fazer com que o jogador chute um número
        Se ele acertar:
        2.1 O jogo encerra e mostra uma mensagem de vitória
        Se ele errar
        2.2 O jogo diminui uma vida
        2.3 O jogo dá uma dica para o número
            Se as vidas zerarem
            2.4 O jogo mostra o número misterioso e pede pro jogador reiniciar a página
*/
function reset() {
    document.getElementById('palpite').value = '';
}

function chute() {
    if (vidasAtuais > 0) {
        let chuteJogador = document.getElementById('palpite').value;
        console.log(chuteJogador)
        if (chuteJogador == "") {
            document.getElementById('resultado').textContent = "Insira um número";
        }
        else if (chuteJogador == numeroMisterioso) {
            document.getElementById('resultado').textContent = "Parabéns, você acertou o número misterioso";
            document.getElementById('resultado2').textContent = "Resete a página (F5) para jogar novamente";
            document.getElementById('palpite').disabled = true;
            reset();
        } else if (chuteJogador > numeroMisterioso) {
            document.getElementById('maiorMenor').textContent = "O número misterioso é menor do que seu chute";
            vidasAtuais--;
            document.getElementById('vidasRestantes').textContent = vidasAtuais;
            chutesErrados.push(' ' + chuteJogador);
            document.getElementById('chutesAnterior').textContent = chutesErrados;
            reset();
        } else if (chuteJogador < numeroMisterioso) {
            document.getElementById('maiorMenor').textContent = "O número misterioso é maior do que seu chute";
            vidasAtuais--;
            document.getElementById('vidasRestantes').textContent = vidasAtuais;
            chutesErrados.push(' ' + chuteJogador);
            document.getElementById('chutesAnterior').textContent = chutesErrados;
            reset();
        }
    } else {
        document.getElementById('palpite').disabled = true;
        document.getElementById('resultado').textContent = "Infelizmente suas vidas acabaram :(";
        document.getElementById('resultado2').textContent = "Resete a página (F5) para jogar novamente";
    }
}