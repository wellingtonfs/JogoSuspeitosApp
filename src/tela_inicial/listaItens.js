import React from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import Estilos from './estilos'
import AppContext from '../Context'

const estilos = new Estilos()

class Item_Lista extends React.Component {
    static defaultProps = {
        destaque: false
    }

    static contextType = AppContext

    mudarEstadoItem = (obj, id) => {
        let new_obj = obj
        let stop = false
        
        for(key in new_obj){
            for(i in new_obj[key]){
                if(new_obj[key][i].id == id){
                    new_obj[key][i].vivo = !new_obj[key][i].vivo
                    new_obj[key][i].inCartas = !new_obj[key][i].inCartas
                    stop = true
                    break
                }
            }
            if(stop) break;
        }

        return new_obj
    }

    changeEstado = () => {
        user = Object.assign({}, this.context.user)
        user.lista_itens = this.mudarEstadoItem(
            user.lista_itens, this.props.item.id)

        return user
    }

    render(){
        return(
            <TouchableOpacity
                style={estilos.ViewItem({
                    ...this.context.temaAtual, ...this.props.item, destaque: this.props.destaque}).style}
                onPress={() => {
                    this.context.changeUser(this.changeEstado())
                }}
            >

                <Text style={estilos.TextItem({
                    ...this.context.temaAtual, ...this.props.item, destaque: this.props.destaque}).style}>
                    {this.props.item.id}
                </Text>
            </TouchableOpacity>
        )
    }
}

class ListaItens extends React.Component {
    constructor(props){
        super(props)
        this.lista_completa = []
    }

    static contextType = AppContext

    attLista = (lista) => { //{id: 'Cozinheiro', vivo: true, inCartas: false},s
        if(lista.length > this.lista_completa.length){
            lista.map(item => {
                if(typeof this.lista_completa.find(elem => elem.id == item.id) == 'undefined'){
                    this.lista_completa.push(item)
                }
                (item)
            })
            return;
        }

        this.lista_completa = this.lista_completa
            .filter((item)=>
                typeof lista.find(elem => item.id == elem.id) != 'undefined'
            )
    }

    render(){
        this.attLista(this.context.user.lista_itens.pessoas
            .filter((item) => item.inCartas)
            .concat(
                this.context.user.lista_itens.armas
                    .filter((item) => item.inCartas)
            )
            .concat(
                this.context.user.lista_itens.locais
                    .filter((item) => item.inCartas)
            )
        )

        return (
            <ScrollView
                contentContainerStyle={{alignItems: 'center'}}
                style={estilos.ScrollViewListaItens(this.context.temaAtual).style}
            >
                {
                    this.lista_completa.length > 0 ?
                        <Text style={estilos.TextEntreListas(this.context.temaAtual).selecionado}>
                            Selecionados:
                        </Text>
                    :
                        <Text style={estilos.TextEntreListas(this.context.temaAtual).selecionado}>
                            Nenhum Item Selecionado
                        </Text>
                }

                {this.lista_completa.map((item) => 
                    <Item_Lista key={'s'+item.id} item={item} destaque={true}/>
                )}

                <Text style={estilos.TextEntreListas(this.context.temaAtual).style}>Pessoas</Text>
                {this.context.user.lista_itens.pessoas
                    .filter((item) => !item.inCartas)
                    .map((item) => <Item_Lista key={item.id} item={item}/>)}
                <Text style={estilos.TextEntreListas(this.context.temaAtual).style}>Armas</Text>
                {this.context.user.lista_itens.armas
                    .filter((item) => !item.inCartas)
                    .map((item) => <Item_Lista key={item.id} item={item}/>)}
                <Text style={estilos.TextEntreListas(this.context.temaAtual).style}>Locais</Text>
                {this.context.user.lista_itens.locais
                    .filter((item) => !item.inCartas)
                    .map((item) => <Item_Lista key={item.id} item={item}/>)}
            </ScrollView>
        )
    }
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