import React, {useContext, useState} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import AppContext from '../Context'
import QRCode from 'react-native-qrcode-svg'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function separar_especiais(copiaLista){
    let especiais = []

    especiais.push(copiaLista['pessoas'][getRandomInt(0, copiaLista['pessoas'].length)].id)
    especiais.push(copiaLista['armas'][getRandomInt(0, copiaLista['armas'].length)].id)
    especiais.push(copiaLista['locais'][getRandomInt(0, copiaLista['locais'].length)].id)

    return especiais
}

function separar(copiaLista, numPlayers){
    let especiais = separar_especiais(copiaLista)

    let escolhidos = []
    for(let i = 0; i < numPlayers; i++) escolhidos.push([])

    let newObj = [
        copiaLista['pessoas'].concat(copiaLista['armas']),
        copiaLista['locais']
    ]

    for(let k in newObj){
        let max = newObj[k].length
        let verificar = []
        for(let itr = 0; itr < newObj[k].length; itr++) {
            if(especiais.find((item => item == newObj[k][itr].id)) != undefined){
                verificar.push(false);
                max--;
            }else{
                verificar.push(true);
            }
        }

        //separar para os jogadores
        while(max > 0){
            for(let p = 0; p < numPlayers; p++){
                if(max <= 0) break;

                let sort = getRandomInt(0, max--)

                for(let i in newObj[k]){
                    if(verificar[i]){
                        if(sort <= 0){
                            escolhidos[p].push(newObj[k][i].id)
                            verificar[i] = false
                            break
                        }
                        sort -= 1
                    }
                }
            }
        }
    }
    
    return [especiais, escolhidos]
}

function TelaQR () {
    myContext = useContext(AppContext)

    const [numPlayers, setNumPlayers] = useState('')
    const [msgToSend, setMsgToSend] = useState('NA')
    const [msgToText, setMsgToText] = useState('Gerar QR Code')
    const [especiais, setEspeciais] = useState([])
    const [escolhidos, setEscolhidos] = useState([])
    const [etapa, setEtapa] = useState(0)

    //const [esp, esc] = separar(Object.assign({}, myContext.user.lista_itens), numPlayers)

    //const t = esp.toString() + '|' + esc[0].toString()

    //console.log(t)

    const gerarQr = () => {
        if(etapa == 0){
            if(Number(numPlayers) < 2 || Number(numPlayers) > 10){
                Alert.alert("Erro", "O número de jogadores suportados é de 2 à 10!")
                setNumPlayers('')
                return;
            }

            let [esp, esc] = separar(
                Object.assign({}, myContext.user.lista_itens),
                Number.parseInt(numPlayers)
            )

            setEspeciais(esp)
            setEscolhidos(esc)

            setMsgToSend(
                esp.toString() + '|' + esc[etapa+1].toString()
            )

            setMsgToText( (etapa+2 >= esc.length) ? 'Iniciar Jogo' : 'Proximo Jogador')
            setEtapa(etapa+2)
            return;
        }

        if(etapa >= escolhidos.length){
            console.log("Iniciando JOGO")
            return;
        }

        setMsgToSend(
            especiais.toString() + '|' + escolhidos[etapa].toString()
        )

        setMsgToText( (etapa+1 >= escolhidos.length) ? 'Iniciar Jogo' : 'Proximo Jogador')
        setEtapa(etapa+1)
    }
    
    return (
        <View style={estilos(myContext.temaAtual).Main}>
            <View style={estilos(myContext.temaAtual).qr}>
                <QRCode 
                    value={msgToSend}
                    size={250}
                />
            </View>

            <TextInput
                style={estilos(myContext.temaAtual).textInput}
                placeholder={'Número de Jogadores'}
                textAlign={'center'}
                placeholderTextColor={myContext.temaAtual.mode == 'dark' ? '#46677d': '#777'}
                keyboardType={'numeric'}
                value={numPlayers}
                onChangeText={(text)=>setNumPlayers(text)}
            />

            <TouchableOpacity
                style={estilos(myContext.temaAtual).ViewButton}
                onPress={gerarQr}
            >
                <Text style={estilos(myContext.temaAtual).textButton}>
                    {msgToText}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = (tema) => StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: tema.background,
        alignItems: 'center',
        justifyContent: 'center'
    },

    TextMain: {
        fontSize: 17,
        marginTop: 20
    },

    textInput: {
        borderWidth: 1,
        borderColor: tema.mode == 'dark' ? '#46677d' : '#999',
        width: '50%',
        borderRadius: 5,
        color: tema.mode == 'dark' ? '#fff' : '#777',
        marginTop: 20
    },

    qr: {

    },

    ViewButton: {
        padding: 10,
        backgroundColor: '#FF4500',
        marginTop: 20,
        borderRadius: 7
    },

    textButton: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center'
    },
})

export default TelaQR