import React from 'react'


export default function(capacidadeMaxima, capacidadeAtual){
        if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
            return require('../Imagens/pinVerde.png')
        }
        if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
            return require('../Imagens/pinAmarelo.png')
        }
        if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
            return require('../Imagens/pinVermelho.png')
        }
}