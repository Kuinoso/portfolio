import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles.js';

export default function Navbar({ language, setLanguage }) {
    const classes = useStyles();
    const location = useLocation();

    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 190);
    });

    return (
        <Slide direction="down" in={enter} timeout={1200} mountOnEnter unmountOnExit>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Link to={'/portfolio/about'}>
                            <Button
                                className={classes.navButton}
                                style={{ color: location.pathname.includes('about') && '#E8A628' }}
                            >
                                {language === 'english' ? 'About' : 'Sobre mí'}
                            </Button>
                        </Link>
                        <Link to={'/portfolio/projects'}>
                            <Button
                                className={classes.navButton}
                                style={{ color: location.pathname.includes('projects') && '#E8A628' }}
                            >
                                {language === 'english' ? 'Projects' : 'Proyectos'}
                            </Button>
                        </Link>
                        <Link to={'/portfolio/contact'}>
                            <Button
                                className={classes.navButton}
                                style={{ color: location.pathname.includes('contact') && '#E8A628' }}
                            >
                                {language === 'english' ? 'Contact' : 'Contacto'}
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        </Slide>
    );
};