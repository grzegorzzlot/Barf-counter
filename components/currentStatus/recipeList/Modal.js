import React, {Component} from 'react';
import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import colors from '../../../constants/Colors';
import List from './List';
import {connect} from 'react-redux';

class ModalContainer extends Component {
    state = {
        modalVisible: false
    }
    componentDidUpdate(prevProps) {
        if(this.props.data.list.length!==prevProps.data.list.length) {
            if(this.props.data.list.length===0) {
                this.setState({modalVisible: false})
            }
        }
    }
    handleOpen = ()=>{
        this.setState({modalVisible: true});
    }
    handleClose = ()=>{
        this.setState({modalVisible: false});
    }   
    render() {
        // console.log(this.props.data)
        const {modalVisible} = this.state;
        return(
            <View>
                <TouchableOpacity
                onPress={this.handleOpen}
                >
                    <Entypo 
                    name='list'
                    size={30}
                    />
                </TouchableOpacity>
                <Modal
                visible={modalVisible}
                animationType='slide'
                onRequestClose={this.handleClose}
                >
                    <View style={styles.bar}>
                        <TouchableOpacity
                        onPress={this.handleClose}
                        >
                            <AntDesign 
                            name='close'
                            size={30}
                            />
                        </TouchableOpacity>                        
                    </View>
                    <List data={this.props.data.list}/>
                </Modal>
            </View>            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        data: state.standardValue
    }
}

const styles = StyleSheet.create({
    bar: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: colors.grey
    }
})

export default connect(mapStateToProps, null)(ModalContainer);