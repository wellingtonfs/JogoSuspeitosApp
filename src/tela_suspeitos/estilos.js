import {StyleSheet} from 'react-native'

class Estilos{
    MainSuspeitos(props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                backgroundColor: props.background,
                alignItems: 'center'
            }
        })
    }

    TextTitulo(props) {
        return StyleSheet.create({
            style: {
                color: props.textTitulo,
                fontSize: 30,
                fontWeight: 'bold',
                marginVertical: 10
            }
        })
    }

    ViewModal(props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                backgroundColor: props.background,
                alignItems: 'center',
                justifyContent: 'center'
            }
        })
    }

    ImagemMaior(props) {
        return StyleSheet.create({
            style: {
                width: 350,
                height: 550,
                resizeMode: 'contain'
            }
        })
    }

    ImgsList(props) {
        return StyleSheet.create({
            style: {
                width: 120,
                height: 160,
                resizeMode: 'center',
                marginHorizontal: 2,
                marginVertical: 6
            }
        })
    }

    ViewContainer (props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        })
    }

    TextNenhumaCarta (props) {
        return StyleSheet.create({
            style: {
                color: props.textItem_on,
                marginVertical: 15
            }
        })
    }

    ViewVoltarInicio (props) {
        return StyleSheet.create({
            style: {
                padding: 15,
                backgroundColor: props.viewItem_on,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5
            }
        })
    }

    TextVoltarInicio (props) {
        return StyleSheet.create({
            style: {
                color: props.textItem_on
            }
        })
    }
}

export default Estilos