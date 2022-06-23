import {StyleSheet} from 'react-native'

class Estilos{
    Main (props) {
        return StyleSheet.create({
            style: {
                flex: 1,
                backgroundColor: props.background
            }
        })
    }

    ViewContainerOptions (props) {
        return StyleSheet.create({
            style: {
                flex: 1
            }
        })
    }

    TrackColorSwitch (props) {
        return {
            false: props.viewItem_on,
            true: props.viewItem_destaque,
        }
    }

    ThumbColorSwitch (props) {
        return props.mode == 'dark' ? props.viewItem_on : props.viewItem_off
    }

    ViewOptions (props) {
        return StyleSheet.create({
            style: {
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
            }
        })
    }

    TextMudarTema (props) {
        return StyleSheet.create({
            style: {
                color: props.textTitulo,
                fontSize: 17,
                marginBottom: 10
            }
        })
    }

    ViewRodape (props) {
        return StyleSheet.create({
            style: {
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
            }
        })
    }

    ViewButtonToInicio (props) {
        return StyleSheet.create({
            style: {
                //height: 50,
                //width: 150,
                paddingVertical: 12,
                paddingHorizontal: 15,
                backgroundColor: '#FF4500',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15
            }
        })
    }

    TextButtonToInicio (props) {
        return StyleSheet.create({
            style: {
                color: '#ffffff',
                textAlign: 'center'
            }
        })
    }
}

export default Estilos