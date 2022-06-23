import {StyleSheet} from 'react-native'

class Estilos{
    Main (props) {
        return (StyleSheet.create({
            style: {
                flex: 1,
                width: '100%',
            }
        }))
    }

    ViewTextInput (props) {
        return (StyleSheet.create({
            style: {
                width: '90%',
                flexDirection: 'row',
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }
        }))
    }

    TextInput (props) {
        return (StyleSheet.create({
            style: {
                borderWidth: 1,
                borderColor: props.mode == 'dark' ? '#46677d' : '#999',
                width: '90%',
                //height: 45,
                borderRadius: 5,
                color: props.mode == 'dark' ? '#fff' : '#777',
                marginEnd: 5
            }
        }))
    }

    ContainerNota (props, recebida=false) {
        return(StyleSheet.create({
            style: {
                alignItems: recebida ? 'flex-start' : 'flex-end'
            }
        }))
    }

    ViewTextNota (props, recebida={}) {
        return(StyleSheet.create({
            style: {
                backgroundColor: props.viewItem_on,
                borderRadius: 7,
                padding: 10,
                marginVertical: 4,
                marginEnd: 15,
                marginStart: 15
            }
        }))
    }

    TextNota (props) {
        return(StyleSheet.create({
            style: {
                color: props.mode == 'dark' ? '#ffffff' : '#000000',
            }
        }))
    }

    TextNotaMarcado (props) {
        return(StyleSheet.create({
            style: {
                color: props.mode == 'dark' ? '#0f0' : '#f00',
            }
        }))
    }
}

export default Estilos