import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyles } from './styles.js';
import background from '../../media/background.mp4';

export default function Welcome() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <video className={classes.background} autoPlay loop muted>
                <source src={background} type="video/mp4" />
            </video>
            <div className={classes.presentation}>
                <div className={classes.firstLine}>
                    <h1>Greetings, I am</h1>
                    <h1 className={classes.name}> Leonardo Kuinoso</h1>
                    <h1>.</h1>
                </div>
                <h1>I am a full stack web developer.</h1>
                <Button variant="outlined" className={classes.button}>
                    <p className={classes.buttonText}>My work</p>
                    <ArrowForwardIcon className={classes.arrow}/>
                </Button>
            </div>
        </div>
    );
};