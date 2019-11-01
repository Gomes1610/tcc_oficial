/*
Este código retorna uma cor de acordo com uma relação entre seus parâmetros.
Tecnicamente, esta função retorna um array para cada caso,
sendo que sempre na posição 0 será retornado a referencia de uma imagem, 
e sempre na posição 1 será retornado um código hexadecimal da determinada cor.
*/


export default function(_tempoFila){
    if(_tempoFila >= 45){
        return [require('../Imagens/pinVermelho.png'), '#FF0000'] //Vermelho
    }
    if(_tempoFila >= 15 && _tempoFila < 45){
        return [require('../Imagens/pinAmarelo.png'), '#FFD700'] //Amarelo - Gold
    }
    if(_tempoFila < 15){
        return [require('../Imagens/pinVerde.png'), '#32CD32'] //Verde - LimeGreen
    }
}

/*
export default function(capacidadeMaxima, capacidadeAtual){
    if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
        return [require('../Imagens/pinVermelho.png'), '#FF0000'] //Vermelho
    }
    if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
        return [require('../Imagens/pinAmarelo.png'), '#FFD700'] //Amarelo - Gold
    }
    if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
        return [require('../Imagens/pinVerde.png'), '#32CD32'] //Verde - LimeGreen
    }
}
*/