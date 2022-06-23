import {StyleSheet} from 'react-native'

class Estilos{
    MainNotas (props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                width: '100%',
                height: 100,
                backgroundColor: props.background,
                alignItems: 'center'
            }
        })
    }

    TextTitulo (props) {
        return StyleSheet.create({
            style: {
                color: props.textTitulo,
                fontSize: 30,
                fontWeight: 'bold',
                marginVertical: 10
            }
        })
    }

    ViewListaItens (props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                width: '100%'
            }
        })
    }

    TextEntreListas (props) {
        return StyleSheet.create({
            style: {
                color: props.textItem_on,
                marginVertical: 2
            }
        })
    }

    ViewItem (props) {
        return StyleSheet.create({
            style: {
                flexDirection: 'row',
                width: '90%',
                backgroundColor: props.vivo ? props.viewItem_on : props.viewItem_off,
                marginVertical: 2,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'space-between'
            }
        })
    }

    ViewInsideItem (props) {
        return StyleSheet.create({
            titulo: {
                justifyContent: 'center'
            },

            btns: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
                marginVertical: 5
            },
        })
    }

    TextItem (props) {
        return StyleSheet.create({
            style: {
                color: props.vivo ? props.textItem_on : props.textItem_off,
                fontSize: 18,
                marginHorizontal: 15
            }
        })
    }

    ImageItemDesconfiado (props) {
        return StyleSheet.create({
            style: {
                width: 30,
                height: 30,
                resizeMode: 'center',
                marginHorizontal: 5
            }
        })
    }

    ImageItemCaveira (props) {
        return StyleSheet.create({
            style: {
                width: 25,
                height: 25,
                resizeMode: 'center',
                marginHorizontal: 5
            }
        })
    }
}

export default Estilos