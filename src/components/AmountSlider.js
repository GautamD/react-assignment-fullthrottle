import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import 'rc-slider/assets/index.css';

const style = { width: 600, margin: 50 };
const SliderWithTooltip = createSliderWithTooltip(Slider);

function AmountSlider({ onSliderChange }) {
    return (
        <div style={style}>
            <SliderWithTooltip
                defaultValue={500}
                min={500}
                max={5000}
                step={500}
                dots={true}
                onAfterChange={onSliderChange}
            />
        </div>
    );
}

export default AmountSlider;