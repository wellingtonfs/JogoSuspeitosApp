import React from 'react'
import {View, Image, Pressable, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

const estilo = () => {
    return StyleSheet.create({
        style: {
            width: 30,
            height: 30,
            resizeMode: 'center',
            marginHorizontal: 5
        }
    })
}

class SuspeitoIcon extends React.Component {
    constructor(props){
        super(props)
        this.state = {ligar: false}
    }

    static propTypes = {
        source_on: PropTypes.any.isRequired,
        source_off: PropTypes.any.isRequired
      };

    static defaultProps = {
        ativado: true
    }

    render(){
        if(!this.props.ativado) return (<View/>)

        return (
            <Pressable onPress={() => {
                this.setState(state => {return {...state, ligar:!this.state.ligar}})
            }}>
                <Image
                    source={
                        this.state.ligar ? this.props.source_on : this.props.source_off
                    }
                    style={estilo().style}
                />
            </Pressable>
        )
    }
}

export default SuspeitoIcon