import React, { Component } from 'react';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';

class ModalContent extends Component {
    render() {
        const {data} = this.props;
        switch (data) {
            case 0:
            return null;
            case 1:
            return <StepOne/>
            case 2:
            return <StepTwo/>
            default: return null;
        }
    }
}

export default ModalContent;