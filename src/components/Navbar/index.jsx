import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles.js';

export default function Navbar({ language, setLanguage }) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link to={'/portfolio/about'}>
                        <Button
                            className={classes.navButton}
                            style={{ color: location.pathname.includes('about') && '#F9DE59' }}
                        >
                            {language === 'english' ? 'About' : 'Sobre mí'}
                        </Button>
                    </Link>
                    <Link to={'/portfolio/projects'}>
                        <Button
                            className={classes.navButton}
                            style={{ color: location.pathname.includes('projects') && '#F9DE59' }}
                        >
                            {language === 'english' ? 'Projects' : 'Proyectos'}
                        </Button>
                    </Link>
                    <Link to={'/portfolio/contact'}>
                        <Button
                            className={classes.navButton}
                            style={{ color: location.pathname.includes('contact') && '#F9DE59' }}
                        >
                            {language === 'english' ? 'Contact' : 'Contacto'}
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};