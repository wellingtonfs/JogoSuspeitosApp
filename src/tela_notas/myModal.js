import React from 'react'
import {View, Text, Modal, StyleSheet, Pressable, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppContext from '../Context'
import CirculoMarcador from '../componentes/circMarcador'

function ButtonCircular({tema, index, ativo, callback}){
    return (
        <Pressable onPress={()=>callback(index)}>
            <CirculoMarcador
                colorOn={tema.viewMarcador_on[index]}
                ativado={true}
                value={true}
                style={{
                    borderColor: tema.mode == 'dark' ? '#fff' : '#000',
                    borderWidth: ativo == index ? 4 : 0,
                    marginHorizontal: 2,
                }}
            />
        </Pressable>
    )
}

class OptionsItem extends React.Component{
    static contextType = AppContext
    static defaultProps = {
        data: {
            ativo: false
        }
    }

    state = {
        msgInputText: '',
        textButtonDescartar: 'Descartar Suspeito',
        InputTextPlaceholder: 'Alguma anotação?',
        CirculoAtivado: -1
    }

    data = {ativo: false, item: null}

    componentDidUpdate(prevProps){
        if(prevProps.data.item == undefined ||
            prevProps.data.item.id !== this.props.data.item.id
        ){this.data = this.props.data}

        if(this.data.item && !this.data.item.vivo){
            if(this.state.textButtonDescartar == 'Descartar Suspeito'){
                this.setState({...this.state, textButtonDescartar: 'Suspeito'})
            }
        }else if(this.data.item && this.data.item.vivo){
            if(this.state.textButtonDescartar == 'Suspeito'){
                this.setState({...this.state, textButtonDescartar: 'Descartar Suspeito'})
            }
        }
    }

    onCirculoPress = (index) => {
        this.setState({
            ...this.state,
            CirculoAtivado: index
        })
    }

    closeAndReturn = () => {
        this.data.ativo = false
        if(this.state.CirculoAtivado >= 0){
            this.data.updateColor(this.context.temaAtual.viewMarcador_on[this.state.CirculoAtivado])
        }

        this.setState({
            ...this.state,
            InputTextPlaceholder: 'Alguma anotação?',
            msgInputText: '',
            CirculoAtivado: -1
        })

        this.props.callback(this.data)
    }

    buttonSend = () => {
        if(this.state.msgInputText != ''){
            this.context.changeListMsgs([
                ...this.context.listMsgs,
                {id: this.context.listMsgs.length, from: this.data.item.id, msg: this.state.msgInputText}
            ])
            
            this.setState({
                ...this.state,
                InputTextPlaceholder: 'Enviado para anotações!',
                msgInputText: ''
            })
        }
    }

    buttonDescartar = () => {
        if(this.data.updateEstado){
            this.data.item.vivo = !this.data.item.vivo
            this.data.updateEstado(this.data.item.vivo)
            this.closeAndReturn()
        }
    }

    buttonOk = () => {
        this.closeAndReturn()
    }

    render() {
        return (
            <Modal
                visible={this.props.data.ativo}
                animationType={'none'}
                transparent={true}
                onRequestClose={this.closeAndReturn}
            >
                <Pressable
                    style={{flex: 1, alignItems:'center', justifyContent:'center'}}
                    onPress={this.closeAndReturn}
                >
                    <Pressable style={estilo(this.context.temaAtual).ViewMain}>
                        <Text style={estilo(this.context.temaAtual).TextTitulo}>
                            {this.props.data.item == undefined ? 'undefined': this.props.data.item.id}
                        </Text>

                        <View style={estilo(this.context.temaAtual).Separador}/>

                        <View style={estilo(this.context.temaAtual).ViewInputText}>
                            <TextInput
                                style={estilo(this.context.temaAtual).InputText}
                                placeholder={this.state.InputTextPlaceholder}
                                placeholderTextColor={'#555'}
                                onChangeText={msg => this.setState({...this.state, msgInputText: msg})}
                            />

                            <Icon.Button
                                name="send"
                                size={22}
                                backgroundColor={'#D2691E'}
                                color={myContext.temaAtual.mode == 'dark' ? '#fff': '#000'}
                                onPress={this.buttonSend}
                            />
                        </View>

                        <View style={estilo(this.context.temaAtual).ViewMarcadores}>
                            <ButtonCircular
                                tema={this.context.temaAtual} index={1}
                                ativo={this.state.CirculoAtivado}
                                callback={this.onCirculoPress}/>
                            
                            <ButtonCircular
                                tema={this.context.temaAtual} index={2}
                                ativo={this.state.CirculoAtivado}
                                callback={this.onCirculoPress}/>
                            
                            <ButtonCircular
                                tema={this.context.temaAtual} index={3}
                                ativo={this.state.CirculoAtivado}
                                callback={this.onCirculoPress}/>
                            
                            <ButtonCircular
                                tema={this.context.temaAtual} index={4}
                                ativo={this.state.CirculoAtivado}
                                callback={this.onCirculoPress}/>
                        </View>

                        <View style={estilo(this.context.temaAtual).ContainerButtons}>
                            <TouchableOpacity
                                style={estilo(this.context.temaAtual).ViewButtonDescartar}
                                onPress={this.buttonDescartar}
                            >
                                <Text style={estilo(this.context.temaAtual).TextButton}>
                                    {this.state.textButtonDescartar}
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={estilo(this.context.temaAtual).ViewButtonOk}
                                onPress={this.buttonOk}
                            >
                                <Text style={estilo(this.context.temaAtual).TextButton}>
                                    Ok
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </Pressable>
                </Pressable>
            </Modal>
        )
    }
}

const estilo = (props) => StyleSheet.create({
    ViewMain: {
        width: '90%',
        backgroundColor: props.background,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: props.mode == 'dark' ? '#00aad4' : '#999',
        borderRadius: 20
    },

    TextTitulo: {
        color: props.mode == 'dark' ? '#ffffff' : '#000000',
        marginTop: 10,
        fontSize: 17
    },

    Separador: {
        width: '90%',
        height: 1,
        backgroundColor: '#aaa',
        marginVertical: 2
    },

    ViewInputText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: props.mode == 'dark' ? '#555' : '#aaa'
    },

    InputText: {
        width: '80%',
        height: '100%',
        marginVertical: 15,
        borderRadius: 10,
        color: '#000'
    },

    ViewMarcadores: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        marginTop: 30
    },

    ContainerButtons: {
        width: '85%',
        flexDirection: 'row',
        marginVertical: 30
    },

    ViewButtonDescartar: {
        flex: 2,
        backgroundColor: props.viewItem_on,
        marginHorizontal: 5,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    },

    ViewButtonOk: {
        flex: 1,
        backgroundColor: props.viewItem_on,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10
    },

    TextButton: {
        color: props.textItem_on,
        textAlign: 'center',
    }
})

export default OptionsItem