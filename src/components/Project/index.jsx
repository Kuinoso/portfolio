import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Zoom from '@material-ui/core/Zoom';
import { useStyles } from './styles.js';

export default function Project({ title, description, website, github, images, tech, language, handleClose }) {
    const classes = useStyles();

    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 100);
    }, []);

    return (
        <Zoom in={enter} timeout={1200} mountOnEnter unmountOnExit>
            <div className={classes.container}>
                <HighlightOffIcon className={classes.close} onClick={handleClose}/>
                <Carousel className={classes.carousel}>
                    {images.map(item =>
                        <img src={item} alt='slide' className={classes.img} />
                    )}
                </Carousel>
                <div className={classes.content}>
                    <h2 className={classes.title}>{title}</h2>
                    <p className={classes.text}>{description}</p>
                    <div className={classes.buttons}>
                        {website &&
                            <a href={website} target='blank' className={classes.link}>
                                <Button size="small" className={classes.button}>
                                    {language === 'english' ? 'Webiste' : 'Sitio Web'}
                                </Button>
                            </a>
                        }
                        <a href={github} target='blank' className={classes.link}>
                            <Button size="small" className={classes.button}>
                                {language === 'english' ? 'Repository' : 'Repositorio'}
                            </Button>
                        </a>
                    </div>
                    <div className={classes.techs}>
                        {tech.map(item =>
                            <Tooltip title={item.name}>
                                <div className={classes.skill}>
                                    <img src={item.img} alt='tech' className={classes.pic} />
                                </div>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </div>
        </Zoom>
    );
};