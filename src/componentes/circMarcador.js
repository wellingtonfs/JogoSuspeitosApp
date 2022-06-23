import React, {useState, useContext} from 'react'
import {View, StyleSheet} from 'react-native'

const estilo = (props) => {
    return StyleSheet.create({
        viewCirculo: {
            height: 26,
            width: 26,
            backgroundColor: props.on ? props.colorOn : props.colorOff,
            //marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 26 / 2
        }
    })
}

class Circulo extends React.Component{
    constructor(props){
        super(props)
    }

    static defaultProps = {
        colorOn: '#000000',
        colorOff: '#ffffff',
        colorDesativado: '#ffffff',
        style: {},
        ativado: true,
        value: false
    }

    render(){
        return (
            <View
                style={[estilo({
                    on: this.props.value && this.props.ativado,
                    colorOn: this.props.colorOn,
                    colorOff: this.props.ativado? this.props.colorOff : this.props.colorDesativado
                }).viewCirculo, this.props.style]}
            ></View>
        )
    }
}

export default Circulo