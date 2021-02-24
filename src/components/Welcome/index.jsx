import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles.js';
import background from '../../media/background.mp4';

export default function Welcome({ language, setLanguage }) {
    const classes = useStyles();

    return (
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
                    <Link to='/portfolio/about' className={classes.buttonText}>
                        <Button variant="outlined" className={classes.button}>
                            <p>My work</p>
                            <ArrowForwardIcon className={classes.arrow} />
                        </Button>
                    </Link>
                </div>
                :
                <div className={classes.presentation}>
                    <div className={classes.firstLine}>
                        <h1>Saludos, soy</h1>
                        <h1 className={classes.name}> Leonardo Kuinoso</h1>
                    </div>
                    <h1>Soy un desarrollador web full stack</h1>
                    <Link to='/portfolio/about' className={classes.buttonText}>
                        <Button variant="outlined" className={classes.button}>
                            <p>Mi trabajo</p>
                            <ArrowForwardIcon className={classes.arrow} />
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
};