import React from 'react'

//Analisa a relação capacidadeAtual e capacidadeMaxima
//Retorna uma imagem ou cor
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