
import React from "react";
import Lottie from 'react-lottie'

import EntregaAnimationJson from '../../LottieJson/entrega.json'

export const EntregaAnimationjsx = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EntregaAnimationJson 
    }
    
    return <Lottie options={defaultOptions} width={350} height={350} /> 
}