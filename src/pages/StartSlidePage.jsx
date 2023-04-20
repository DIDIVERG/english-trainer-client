import React from 'react';
import '../App.css';
import Slider from "../components/Silder";
import './styles/sliderwrapper.css';
import StartSlide from "../components/StartSlide";

const SliderWrapper = ({ words }) => {
    return (
        <div className="slider-wrapper" style={{ marginTop: '10px' }}>
            <StartSlide words={words} />
        </div>
    );
};

export default SliderWrapper;
