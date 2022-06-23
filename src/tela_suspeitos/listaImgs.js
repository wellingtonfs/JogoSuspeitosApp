import React, {useState, useContext} from 'react'
import {View, Text, Image, FlatList, TouchableHighlight} from 'react-native'
import Estilos from './estilos'
import AppContext from '../Context'
import ConstsJogo from '../constantes/objetos_jogo'
import { out } from 'react-native/Libraries/Animated/Easing'

const estilos = new Estilos()

export default (props) => {
    const myContext = useContext(AppContext)

    const findImg = (id) => {
        for(obj of ConstsJogo.ImagensSuspeitos){
            if(id == obj.id) return obj.img;
        }
        return null
    }

    const objetoToListaCartas = (obj) => {
        let out = []
        for(k in obj){
            for(item of obj[k]){
                if(item.inCartas){
                    out.push(item)
                }
            }
        }
        return out;
    }

    const lista = objetoToListaCartas(myContext.user.lista_itens)
                    .map((item) => {return {id: item.id, img: findImg(item.id)}})
                    
    return (
        <View style={{
            flex: 1,
            width: '100%',
            alignItems: 'center'
        }}>
            <FlatList
                data={lista}
                keyExtractor={item=>item.id}
                numColumns='3'
                renderItem={({item}) => (
                    <TouchableHighlight
                        onPress={()=>{
                            props.callback(item.img, item.id)
                        }}
                        underlayColor={myContext.temaAtual.background}
                    >
                        <Image
                            source={item.img}
                            style={estilos.ImgsList(myContext.temaAtual).style}
                        />
                    </TouchableHighlight>
                )}
            />
        </View>
    )
}