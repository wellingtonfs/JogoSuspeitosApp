import React, {useState, useContext} from 'react'
import {View, Text, StatusBar} from 'react-native'
import Estilos from './estilos'
import ListaItens from './lista_itens'
import AppContext from '../Context'

const estilos = new Estilos()

const Main = () => {
    const myContext = useContext(AppContext)

    return (
        <View style={estilos.MainNotas(myContext.temaAtual).style}>
            <StatusBar
                backgroundColor={myContext.temaAtual.background}
                barStyle={myContext.temaAtual.barStatus}/>
            <ListaItens/>
        </View> 
    )
}

export default Main