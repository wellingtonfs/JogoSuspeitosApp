import React, {useContext, useState} from 'react'
import {View, Text, Pressable, ActivityIndicator, StatusBar, SafeAreaView} from 'react-native'
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import Estilos from './estilos'
import AppContext from '../Context'
import ListaItens from './listaItens'

const estilos = new Estilos()

const Main = () => {
    myContext = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const GoToGame = () => {
        setLoading(false)
        navigation.navigate('Jogo')
    }

    return (
        <SafeAreaView style={estilos.Main(myContext.temaAtual).style}>
            <StatusBar
                backgroundColor={myContext.temaAtual.background}
                barStyle={myContext.temaAtual.barStatus}/>
                
            <View style={{height: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                    color: myContext.temaAtual.textTitulo,
                    fontSize: 20
                }}>Selecione as suas Cartas</Text>
            </View>

            <View style={{flex: 1}}>
                <ListaItens/>
            </View>

            <View style={{height: 60, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                {
                    loading ?
                        <ActivityIndicator size='large' color={myContext.temaAtual.loading}/>
                    : 
                        <Pressable
                            onPress={()=>{
                                setLoading(true);
                                setTimeout(GoToGame, 10)
                            }}
                        >
                            <View style={estilos.ViewPressable(myContext.temaAtual).style}>
                                <Text style={{
                                    color: '#ffffff'
                                }}>Jogar</Text>
                            </View>
                        </Pressable>
                }
            </View>
        </SafeAreaView>
    )
}

export default Main