import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Select from '@material-ui/core/Select';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles.js';
import background from '../../media/background.mp4';

export default function Welcome({ language, setLanguage }) {
    const classes = useStyles();
    const history = useHistory();

    const [enter, setEnter] = useState(false);
    const [exit, setExit] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 200);
    }, []);

    const handleClick = () => {
        setExit(false);

        setTimeout(() => {
            history.push('/portfolio/about');
        }, 1200);
    };

    return (
        <Fade in={enter} timeout={4000}>
            <Slide direction="down" in={exit} timeout={1200} mountOnEnter unmountOnExit>
                <div className={classes.container}>
                    <video className={classes.background} autoPlay loop muted>
                        <source src={background} type="video/mp4" />
                    </video>
                    <Select
                        native
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={classes.select}
                        inputProps={{
                            name: 'language',
                            id: 'filled-age-native-simple',
                        }}
                    >
                        <option value={'english'}>English</option>
                        <option value={'spanish'}>Español</option>
                    </Select>
                    {language === 'english' ?
                        <div className={classes.presentation}>
                            <div className={classes.firstLine}>
                                <h1>Greetings, I am</h1>
                                <h1 className={classes.name}> Leonardo Kuinoso</h1>
                            </div>
                            <h1>I am a full stack web developer</h1>
                            <Button variant="outlined" className={classes.button} onClick={handleClick}>
                                <p>My work</p>
                                <ArrowForwardIcon className={classes.arrow} />
                            </Button>
                        </div>
                        :
                        <div className={classes.presentation}>
                            <div className={classes.firstLine}>
                                <h1>Saludos, soy</h1>
                                <h1 className={classes.name}> Leonardo Kuinoso</h1>
                            </div>
                            <h1>Soy un desarrollador web full stack</h1>
                            <Button variant="outlined" className={classes.button} onClick={handleClick}>
                                <p>Mi trabajo</p>
                                <ArrowForwardIcon className={classes.arrow} />
                            </Button>
                        </div>
                    }
                </div>
            </Slide>
        </Fade>
    );
};