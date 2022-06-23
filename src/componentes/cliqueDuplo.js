import React, {Component} from 'react';
import {Pressable} from 'react-native'

class CliqueDuplo extends Component{
    static defaultProps = {
        delay: 250,
        onDoublePress: () => null,
    };

    last = null;

    onPress = () => {
        const now = Date.now()
        if(this.last && now - this.last < this.props.delay){
            this.props.onDoublePress();
        }else{
            this.last = now;
        }
    }

    render(){
        return(
            <Pressable onPress={this.onPress}>
                {this.props.children}
            </Pressable>
        )
    }
}

export default CliqueDuplo