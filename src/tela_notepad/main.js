import React, {useState, useContext} from 'react'
import {View, Text, FlatList, TextInput} from 'react-native'
import Estilos from './estilos'
import AppContext from '../Context'
import Icon from 'react-native-vector-icons/FontAwesome'

const estilos = new Estilos()

function ItemLista({item}){
    return (
        <View
            style={estilos.ContainerNota(myContext.temaAtual, item.from != 'me').style}
        >
            <View style={estilos.ViewTextNota(myContext.temaAtual).style}>
                {
                    item.from != 'me' ?
                    <Text style={estilos.TextNotaMarcado(myContext.temaAtual).style}>
                        {item.from}
                    </Text>
                    : null
                }
                <Text style={estilos.TextNota(myContext.temaAtual).style}>
                    {item.msg}
                </Text>
            </View>
        </View>
    )
}

TelaNotePad = () => {
    const myContext = useContext(AppContext)
    const [textInput, setTextInput] = useState('')

    const saveMsg = () => {
        if(textInput != ''){
            myContext.changeListMsgs([
                ...myContext.listMsgs,
                {id: myContext.listMsgs.length, from: 'me', msg: textInput}
            ])
            setTextInput('')
        }
    }

    return (
        <View style={{flex:1, alignItems: 'center', backgroundColor: myContext.temaAtual.background}}>
            <View style={estilos.Main(myContext.temaAtual).style}>
                <FlatList
                    data={myContext.listMsgs}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ItemLista item={item}/>}
                    ListEmptyComponent={()=><View style={{alignItems: 'center', padding: 10}}>
                        <Text style={{
                            color: myContext.temaAtual.mode == 'dark' ? '#fff' : '#000',
                            fontSize: 15
                        }}>Nenhuma Anotação</Text>
                    </View>}
                />
            </View>

            <View style={estilos.ViewTextInput(myContext.temaAtual).style}>
                <TextInput
                    placeholder={"Coloque sua anotação aqui"}
                    placeholderTextColor={myContext.temaAtual.mode == 'dark' ? '#46677d': '#777'}
                    style={estilos.TextInput(myContext.temaAtual).style}
                    onChangeText={text => setTextInput(text)}
                    value={textInput}
                />

                <Icon.Button
                    name="send"
                    size={30}
                    backgroundColor={myContext.temaAtual.background}
                    color={myContext.temaAtual.mode == 'dark' ? '#fff': '#000'}
                    onPress={saveMsg}
                />
            </View>
        </View>
    )
}

export default TelaNotePad