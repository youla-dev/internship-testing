import React from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';

import Display from './Components/Display';
import ResetButton from './Components/ResetButton';
import StartPauseButton from './Components/MainButton';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: 0, paused: true };
    }

    startTimer = () => {
        this.interval = setInterval(this.counter, 1000);
        this.setState({ paused: false });
    };

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({ paused: true });
    };

    reset = () => {
        this.setState({ timer: 0, paused: true });
        clearInterval(this.interval);
    };

    counter = () => {
        this.setState({ timer: this.state.timer + 1 });
    };

    render() {
        return (
            <div>
                <Display time={this.state.timer} />
                <ButtonGroup>
                    <StartPauseButton
                        paused={this.state.paused}
                        start={this.startTimer}
                        stop={this.stopTimer}
                    />
                    <ResetButton onClickReset={this.reset} />
                </ButtonGroup>
            </div>
        );
    }
}

export default App;