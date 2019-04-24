import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import 'rc-slider/assets/index.css';

const style = { width: 600, margin: 50 };
const SliderWithTooltip = createSliderWithTooltip(Slider);

function DurationSlider({ onSliderChange }) {
    return (
        <div style={style}>
            <SliderWithTooltip
                defaultValue={6}
                min={6}
                max={24}
                onAfterChange={onSliderChange}
            />
        </div>
    );
}

export default DurationSlider;