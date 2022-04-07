import Button from '@mui/material/Button';

const StartPauseButton = (props) => {
    const onClickHandler = () => {
        props.paused ? props.start() : props.stop();
    };

    return (
        <Button onClick={onClickHandler}>{props.paused ? 'Start' : 'Pause'}</Button>
    );
};

export default StartPauseButton;