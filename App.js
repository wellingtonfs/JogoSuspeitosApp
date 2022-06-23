import 'react-native-gesture-handler';
import React, {useState, useContext, useEffect} from 'react'
import {LogBox, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import TelaSuspeitos from './src/tela_suspeitos/main'
import TelaNotas from './src/tela_notas/main'
import TelaConfigs from './src/tela_configs/main'
import TelaInicial from './src/tela_inicial/main'
import TelaNotePad from './src/tela_notepad/main'
import TelaQR from './src/tela_qrcode/main'
import AppContext from './src/Context'
import ConstEstilos from './src/constantes/estilos'
import ConstsJogo from './src/constantes/objetos_jogo'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

const Guia = createMaterialTopTabNavigator();
const Pilha = createStackNavigator();

LogBox.ignoreLogs(['Reanimated 2']);

const Logo = ({name}) => {
    myContext = useContext(AppContext)
    var icon = 'cog'
    if(name == 'Suspeitos'){icon = 'clone'}
    else if(name == 'Notas'){icon = 'align-justify'}
    else if(name == 'Msg'){icon = 'comment'}

    return (
        <Icon
            name={icon}
            size={22}
            backgroundColor={myContext.temaAtual.background}
            color={myContext.temaAtual.mode == 'dark' ? '#fff': '#000'}
        />
    )
}

const Jogo = ({navegador}) =>{
    myContext = useContext(AppContext)

    return (
        <Guia.Navigator initialRouteName='Notas' tabBarOptions={{
            showIcon: true,
            activeTintColor: myContext.temaAtual.textAba,
            style: {backgroundColor: myContext.temaAtual.background}
        }}>
            <Guia.Screen
                name="Conf"
                component={TelaConfigs}
                options={{tabBarIcon: (props) => <Logo name={'config'}/>, tabBarLabel: () => null}}
            />

            <Guia.Screen
                name="Suspeitos"
                component={TelaSuspeitos}
                options={{tabBarIcon: (props) => <Logo name={'Suspeitos'}/>, tabBarLabel: () => null}}
            />

            <Guia.Screen
                name="Notas"
                component={TelaNotas}
                options={{tabBarIcon: (props) => <Logo name={'Notas'}/>, tabBarLabel: () => null}}
            />

            <Guia.Screen
                name="Msg"
                component={TelaNotePad}
                options={{tabBarIcon: (props) => <Logo name={'Msg'}/>, tabBarLabel: () => null}}
            />
        </Guia.Navigator>
    )
}

const Main = () => {
    //Estados globais:
    const [loading, setLoading] = useState(true)
    const [temaAtual, changeTemaAtual] = useState(ConstEstilos.tema_light)
    const [user, changeUser] = useState({lista_itens: Object.assign({}, ConstsJogo.listaItens)})
    const [listMsgs, changeListMsgs] = useState([])
    
    useEffect(() => {
        AsyncStorage.getItem('tema').then((valor) => {
            changeTemaAtual(
                valor && valor == 'dark' ? ConstEstilos.tema_dark : ConstEstilos.tema_light
            )
            setLoading(false)
        })
    }, [])

    const Configs = {
        temaAtual,
        listMsgs,
        user,
        changeTemaAtual,
        changeListMsgs,
        changeUser
    }

    /*
    return(
        <AppContext.Provider value={Configs}>
            <TelaNotePad/>
        </AppContext.Provider>
    )
    */
    if(loading){
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: ConstEstilos.tema_dark.background
            }}>
                <ActivityIndicator size='large' color='#ffffff'/>
            </View>
        )
    }

    return(
        <AppContext.Provider value={Configs}>
            <NavigationContainer>
                <Pilha.Navigator initialRouteName='QRCode'>

                    <Pilha.Screen
                        name="QRCode"
                        component={TelaQR}
                        options={{headerShown: false}}
                    />

                    <Pilha.Screen
                        name="Inicial"
                        component={TelaInicial}
                        options={{headerShown: false}}
                    />

                    <Pilha.Screen
                        name="Jogo"
                        component={Jogo}
                        options={{headerShown: false}}
                    />
                </Pilha.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    )
}

export default Main