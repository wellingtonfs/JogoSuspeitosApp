import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, Pressable, TouchableOpacity} from 'react-native'
import Estilos from './estilos'
import Consts from '../constantes/objetos_jogo'
import AppContext from '../Context'
import CirculoMarcador from '../componentes/circMarcador'
import OptionsItem from './myModal'

const estilos = new Estilos()

class Item_Lista extends React.Component {
    static contextType = AppContext
    
    state = {
        item: this.props.item,
        corMarcador: '#FF4500',
        estadoMarcador: false
    }

    updateColor = (newColor) => {
        this.setState({...this.state,
            corMarcador: newColor,
            estadoMarcador: true
        })
    }

    updateEstado = (newState) => this.setState(
        {
            ...this.state,
            item: {
                ...this.state.item,
                vivo: newState
            },
        }
    )

    onItemClick = () => {
        this.props.openModal(current => {
            let data = Object.assign({}, current)
            data.ativo = true
            data.item = this.state.item
            data.updateColor = this.updateColor
            data.updateEstado = this.updateEstado
            return data
        })
    }

    render(){
        return(
            <TouchableOpacity
                style={estilos.ViewItem({...this.context.temaAtual,...this.state.item}).style}
                onPress={this.onItemClick}
            >
                <View style={estilos.ViewInsideItem(this.context.temaAtual).titulo}>
                    <Text style={estilos.TextItem({...this.context.temaAtual,...this.state.item}).style}>
                        {this.state.item.id}
                    </Text>
                </View>

                <View style={estilos.ViewInsideItem(this.context.temaAtual).btns}>

                    <Pressable
                        onPress={()=>this.setState({
                            ...this.state, estadoMarcador: !this.state.estadoMarcador
                        })}
                    >
                        <CirculoMarcador
                            colorOff={this.context.temaAtual.viewMarcador_on[0]}
                            colorOn={this.state.corMarcador}
                            colorDesativado={this.context.temaAtual.viewMarcador_off}
                            ativado={this.state.item.vivo}
                            value={this.state.estadoMarcador}/>
                    </Pressable>

                </View>
            </TouchableOpacity>
        )
    }
}

function ListaItens (props) {

    const [state, setState] = useState({
        lista_pessoas: Consts.listaItens.pessoas,
        lista_armas: Consts.listaItens.armas,
        lista_locais: Consts.listaItens.locais
    })

    const [modal, setModal] = useState({
        ativo: false
    })

    myContext = useContext(AppContext)

    return (
        <ScrollView
            contentContainerStyle={{alignItems: 'center'}}
            style={estilos.ViewListaItens(myContext.temaAtual).style}
        >
            <Text style={estilos.TextEntreListas(myContext.temaAtual).style}>Pessoas</Text>
            {state.lista_pessoas.map((item) => (
                <Item_Lista openModal={setModal} key={item.id} item={item}/>
            ))}
            <Text style={estilos.TextEntreListas(myContext.temaAtual).style}>Armas</Text>
            {state.lista_armas.map((item) => (
                <Item_Lista openModal={setModal} key={item.id} item={item}/>
            ))}
            <Text style={estilos.TextEntreListas(myContext.temaAtual).style}>Locais</Text>
            {state.lista_locais.map((item) => (
                <Item_Lista openModal={setModal} key={item.id} item={item}/>
            ))}

            <OptionsItem data={modal} callback={setModal}/>
        </ScrollView>
    )
    
}

export default ListaItens

/*
<FlatList
    data={this.state.lista}
    extraData={this.state.lista}
    keyExtractor={item=>item.id}
    initialNumToRender={25}
    renderItem={({item}) => <Item_Lista item={item}/>}
/>
*/