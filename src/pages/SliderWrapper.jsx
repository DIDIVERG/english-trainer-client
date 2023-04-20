import React from 'react';
import '../App.css';
import Slider from "../components/Silder";
import './styles/sliderwrapper.css';

const SliderWrapper = ({ words }) => {
    return (
        <div className="slider-wrapper" style={{ marginTop: '10px' }}>
            <Slider words={words} />
        </div>
    );
};

export default SliderWrapper;
