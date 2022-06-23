import React, {useState, useContext} from 'react'
import {View, Text, StatusBar, Switch, TouchableOpacity} from 'react-native'
import Estilos from './estilos'
import AppContext from '../Context'
import ConstEstilos from '../constantes/estilos'
import AsyncStorage from '@react-native-community/async-storage'

const estilos = new Estilos()

const Main = (props) => {
    const myContext = useContext(AppContext)
    const temaAtual = myContext.temaAtual

    const onChangeTema = async () => {
        myContext.changeTemaAtual(current=>{
            let saveTema = async () => {
                try{
                    await AsyncStorage.setItem(
                        'tema', current.mode == 'dark' ? 'light' : 'dark');
                } catch(e){}
            }

            saveTema()

            if(current.mode == 'dark') return ConstEstilos.tema_light;
            return ConstEstilos.tema_dark
        })
    }

    const goToInit = () => {
        user = Object.assign({}, myContext.user)
        for(key in user.lista_itens){
            for(i in user.lista_itens[key]){
                user.lista_itens[key][i].vivo = true
                user.lista_itens[key][i].inCartas = false
            }
        }
        myContext.changeUser(user)
        myContext.changeListMsgs([])
        props.navigation.popToTop()
    }

    return (
        <View style={estilos.Main(temaAtual).style}>
            <View style={estilos.ViewContainerOptions(temaAtual).style}>
                <View style={estilos.ViewOptions(temaAtual).style}>
                    <Text style={estilos.TextMudarTema(temaAtual).style}>
                        Modo Escuro:
                    </Text>
                    <Switch
                        trackColor={estilos.TrackColorSwitch(temaAtual)}
                        thumbColor={estilos.ThumbColorSwitch(temaAtual)}
                        onChange={onChangeTema}
                        value={temaAtual.mode == 'dark' ? true : false}
                    />
                </View>

                <View>
                    
                </View>
            </View>

            <View style={estilos.ViewRodape(temaAtual).style}>
                <TouchableOpacity onPress={goToInit}>
                    <View style={estilos.ViewButtonToInicio(temaAtual).style}>
                        <Text style={estilos.TextButtonToInicio(temaAtual).style}>
                            Jogar Novamente
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Main