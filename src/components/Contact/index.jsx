import React, { useState, useEffect } from 'react';
import Zoom from '@material-ui/core/Zoom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useStyles } from './styles.js';

export default function Contact({ language }) {
    const classes = useStyles();

    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 200);
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.links}>
                <Zoom in={enter} timeout={1200} mountOnEnter unmountOnExit>
                    <a href="mailto:cifuentes.k.l@gmail.com" target='blank' className={classes.link}>
                        <MailOutlineIcon className={classes.icon} />
                        <h1 className={classes.text}>cifuentes.k.l@gmail.com</h1>
                    </a>
                </Zoom>
                <Zoom in={enter} timeout={1200} mountOnEnter unmountOnExit>
                    <a href="https://wa.me/5491134088082" target='blank' className={classes.link}>
                        <PhoneIcon className={classes.icon} />
                        <h1 className={classes.text}>+54 9 11 3408-8082</h1>
                    </a>
                </Zoom>
                <Zoom in={enter} timeout={1200} mountOnEnter unmountOnExit>
                    <a href="https://www.linkedin.com/in/leonardo-kuinoso-cifuentes-916634161/" target='blank' className={classes.link}>
                        <LinkedInIcon className={classes.icon} />
                        <h1 className={classes.text}>{language === 'english' ? 'LinkedIn Profile' : 'Perfil de LinkedIn'}</h1>
                    </a>
                </Zoom>
            </div>
        </div>
    );
};