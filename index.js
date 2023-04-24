var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio; //Essas variaveis estão sendo declaradas aqui sem valor pois precisarei usa-las em funções diferentes com valores diferentes, uma variável quando declarada dentro do escopo de uma função ela existirá apenas naquela function. 
var yAleatorio;

function desenharCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limparTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function alvo(x, y) {
    desenharCirculo(x, y, raio + 20, 'red'); // maior círculo
    desenharCirculo(x, y, raio + 10, 'white');
    desenharCirculo(x, y, raio, 'red'); // menor circulo 
}

function sortearPosicao(maximo) {
    return Math.floor(Math.random() * maximo); // Math.floor arredonda para um numero a menos.
}

function atualizarTela() {

    limparTela();
    xAleatorio = sortearPosicao(600);
    yAleatorio = sortearPosicao(400);
    alvo(xAleatorio, yAleatorio);
}

setInterval(atualizarTela, 800);

function disparar(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if ((x < xAleatorio + raio)
        && (x > xAleatorio - raio)
        && (y < yAleatorio + raio)
        && (y > yAleatorio - raio)) {
        alert("Parabéns!! Você acertou o alvo!")
    }

}

tela.onclick = disparar;