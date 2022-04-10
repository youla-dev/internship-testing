import React from "react";
import Typography from "@mui/material/Typography";

const TimerDisplay = (props) => {
    const { time } = props;

    return (
        <Typography variant="h3" component="div" gutterBottom>
            {time}
        </Typography>
    );
};

export default TimerDisplay;
