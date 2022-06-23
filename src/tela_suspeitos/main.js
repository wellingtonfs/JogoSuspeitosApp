import React, {useState, useContext, useEffect} from 'react'
import {View, Text, StatusBar, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Estilos from './estilos'
import ZoomIMG from './meuModal'
import ListImgs from './listaImgs'
import AppContext from '../Context'

const estilos = new Estilos()

const Suspeitos = () => {
    const myContext = useContext(AppContext)

    const [temCartas, setTemCartas] = useState(false)
    const [varZoomIMG, setZoomIMG] = useState({
        img: '',
        ativado: false
    })
    const navigation = useNavigation()

    useEffect(() => {
        for(k in myContext.user.lista_itens){
            if(myContext.user.lista_itens[k].filter(item => item.inCartas).length > 0){
                setTemCartas(true)
                return;
            }
        }
        setTemCartas(false)
    }, [])

    const openImg = (imagem, msg) => {
        setZoomIMG({
            img: imagem,
            ativado: true
        })
    }

    const closeImg = () =>{
        setZoomIMG({
            img: '',
            ativado: false
        })
    }

    return(
      <View style={estilos.MainSuspeitos(myContext.temaAtual).style}>
        <StatusBar
            backgroundColor={myContext.temaAtual.background}
            barStyle={myContext.temaAtual.barStatus}/>

        <ZoomIMG vars={varZoomIMG} callback={closeImg}/>

        {
            temCartas ? <ListImgs callback={openImg}/>
            :
            <View style={estilos.ViewContainer(myContext.temaAtual).style}>
                <Text style={estilos.TextNenhumaCarta(myContext.temaAtual).style}>
                    Nenhuma carta foi selecionada
                </Text>
                <TouchableOpacity
                    onPress={()=>navigation.popToTop()}
                    style={estilos.ViewVoltarInicio(myContext.temaAtual).style}
                >
                    <Text style={estilos.TextVoltarInicio(myContext.temaAtual).style}>
                        Voltar ao Inicio
                    </Text>
                </TouchableOpacity>
            </View>
        }
      </View>
    )
  }
  
  export default Suspeitos