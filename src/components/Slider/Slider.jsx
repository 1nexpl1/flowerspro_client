import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider(props) {

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={props.value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color="#292929"
        min={props.MIN} 
        max={props.MAX}
      />
    </Box>
  );
}