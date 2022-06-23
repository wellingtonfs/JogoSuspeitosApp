class Consts {
    static ImagensSuspeitos = [
        {id: 'Cozinheiro', img: require('../../rec/cozinheiro.png')},
        {id: 'Empregada', img: require('../../rec/empregada.png')},
        {id: 'Esposa', img: require('../../rec/esposa.png')},
        {id: 'Jardineiro', img: require('../../rec/jardineiro.png')},
        {id: 'Mordomo', img: require('../../rec/mordomo.png')},
        {id: 'Motorista', img: require('../../rec/motorista.png')},
        {id: 'Vizinho', img: require('../../rec/vizinho.png')},

        {id: 'Abajur', img: require('../../rec/abajur.png')},
        {id: 'Chave de Boca', img: require('../../rec/chave_boca.png')},
        {id: 'Faca', img: require('../../rec/faca.png')},
        {id: 'Martelo', img: require('../../rec/martelo.png')},
        {id: 'Revólver', img: require('../../rec/revolver.png')},
        {id: 'Tesoura de Poda', img: require('../../rec/tesoura_poda.png')},
        {id: 'Veneno', img: require('../../rec/veneno.png')},

        {id: 'Cozinha', img: require('../../rec/cozinha.png')},
        {id: 'Banheiro', img: require('../../rec/banheiro.png')},
        {id: 'Biblioteca', img: require('../../rec/biblioteca.png')},
        {id: 'Escadaria', img: require('../../rec/escadaria.png')},
        {id: 'Escritório', img: require('../../rec/escritorio.png')},
        {id: 'Hall Central', img: require('../../rec/hall_central.png')},
        {id: 'Quarto', img: require('../../rec/quarto.png')},
        {id: 'Sala de Jantar', img: require('../../rec/sala_jantar.png')},
        {id: 'Suíte', img: require('../../rec/suite.png')},
        {id: 'Varanda', img: require('../../rec/varanda.png')},
    ]

    static ImagensGerais = {
        dark:{
            caveira: require('../../rec/caveira_dark.png'),
            desconfiado: {
                on: require('../../rec/desconfiado_on_dark.png'),
                off: require('../../rec/desconfiado_off_dark.png'),
            }
        },
        light:{
            caveira: require('../../rec/caveira_light.png'),
            desconfiado: {
                on: require('../../rec/desconfiado_on_light.png'),
                off: require('../../rec/desconfiado_off_light.png'),
            }
        }
    }

    static listaItens = {
        pessoas: [
            {id: 'Cozinheiro', vivo: true, inCartas: false},
            {id: 'Empregada', vivo: true, inCartas: false},
            {id: 'Esposa', vivo: true, inCartas: false},
            {id: 'Jardineiro', vivo: true, inCartas: false},
            {id: 'Mordomo', vivo: true, inCartas: false},
            {id: 'Motorista', vivo: true, inCartas: false},
            {id: 'Vizinho', vivo: true, inCartas: false},
        ],
        armas: [
            {id: 'Abajur', vivo: true, inCartas: false},
            {id: 'Chave de Boca', vivo: true, inCartas: false},
            {id: 'Faca', vivo: true, inCartas: false},
            {id: 'Martelo', vivo: true, inCartas: false},
            {id: 'Revólver', vivo: true, inCartas: false},
            {id: 'Tesoura de Poda', vivo: true, inCartas: false},
            {id: 'Veneno', vivo: true, inCartas: false},
        ],
        locais: [
            {id: 'Cozinha', vivo: true, inCartas: false},
            {id: 'Banheiro', vivo: true, inCartas: false},
            {id: 'Biblioteca', vivo: true, inCartas: false},
            {id: 'Escadaria', vivo: true, inCartas: false},
            {id: 'Escritório', vivo: true, inCartas: false},
            {id: 'Hall Central', vivo: true, inCartas: false},
            {id: 'Quarto', vivo: true, inCartas: false},
            {id: 'Sala de Jantar', vivo: true, inCartas: false},
            {id: 'Suíte', vivo: true, inCartas: false},
            {id: 'Varanda', vivo: true, inCartas: false},
        ]
    }
}

export default Consts