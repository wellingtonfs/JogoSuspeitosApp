import React, {useState, useContext} from 'react'
import {View, Text, Modal, Image, TouchableHighlight, Pressable} from 'react-native'
import Estilos from './estilos'
import AppContext from '../Context'
import CliqueDuplo from '../componentes/cliqueDuplo'

const estilos = new Estilos()

export default (props) => {
    const myContext = useContext(AppContext)

    return (
        <Modal visible={props.vars.ativado} onRequestClose={()=>props.callback()}>
            <View style={estilos.ViewModal(myContext.temaAtual).style}>
                <CliqueDuplo
                    onDoublePress={()=>{
                        props.callback()
                    }}
                >
                    {
                        props.vars.img != '' ?
                            <Image
                                source={props.vars.img}
                                style={estilos.ImagemMaior(myContext.temaAtual).style}
                            />
                        :
                            <Text style={{color: myContext.temaAtual.textItem_on}}>Imagem não encontrada!</Text>
                    }
                </CliqueDuplo>
            </View>
        </Modal>
    )
}