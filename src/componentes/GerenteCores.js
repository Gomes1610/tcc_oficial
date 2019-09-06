/*
Este código retorna uma cor de acordo com uma relação entre seus parâmetros.
Tecnicamente, esta função retorna um array para cada caso,
sendo que sempre na posição 0 será retornado a referencia de uma imagem, 
e sempre na posição 1 será retornado um código hexadecimal da determinada cor.
*/


export default function(capacidadeMaxima, capacidadeAtual){
    if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
        return [require('../Imagens/pinVerde.png'), '#32CD32'] //Verde - LimeGreen
    }
    if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
        return [require('../Imagens/pinAmarelo.png'), '#FFD700'] //Amarelo - Gold
    }
    if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
        return [require('../Imagens/pinVermelho.png'), '#FF0000'] //Vermelho
    }
}

/*
export default function(capacidadeMaxima, capacidadeAtual, tipo){
    switch(tipo){
    case "Imagem":
        if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
            return require('../Imagens/pinVerde.png');
        }
        if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
            return require('../Imagens/pinAmarelo.png');
        }
        if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
            return require('../Imagens/pinVermelho.png');
        }
    default:
        if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
            return "green"
        }
        if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
            return "yellow"
        }
        if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
            return "red"
        }
    }
}
*/