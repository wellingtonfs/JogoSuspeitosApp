import {StyleSheet} from 'react-native'

class Estilos{
    Main (props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                backgroundColor: props.background,
            }
        })
    }

    ViewPressable (props) {
        return StyleSheet.create({
            style: {
                paddingVertical: 12,
                paddingHorizontal: 22,
                backgroundColor: '#FF4500',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
            }
        })
    }

    ScrollViewListaItens (props) {
        return StyleSheet.create({
            style: {
                flex: 1
            }
        })
    }

    TextEntreListas (props) {
        return StyleSheet.create({
            style: {
                color: props.textItem_on,
                marginVertical: 2
            },
            selecionado: {
                color: props.textItem_on,
                marginTop: 2,
                marginBottom: 10
            }
        })
    }

    ViewItem (props) {
        return StyleSheet.create({
            style: {
                flexDirection: 'row',
                //height: 40,
                padding: 7,
                width: '90%',
                backgroundColor: props.destaque ? props.viewItem_destaque : props.viewItem_on,
                marginVertical: 2,
                alignItems: 'center',
                //borderRadius: 15,
                justifyContent: 'center'
            }
        })
    }

    TextItem (props) {
        return StyleSheet.create({
            style: {
                color: props.destaque ? props.textItem_destaque : props.textItem_on,
                fontSize: 18,
                marginHorizontal: 15
            }
        })
    }
}

export default Estilos