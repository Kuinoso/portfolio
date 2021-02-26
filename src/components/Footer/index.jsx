import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles.js';

export default function Footer({ language, setLanguage }) {
    const classes = useStyles();

    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 190);
    });

    return (
        <Slide direction="up" in={enter} timeout={1200} mountOnEnter unmountOnExit>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.upper}>
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
                            <div className={classes.footerDiv}>
                                <Tooltip title={language === 'english' ? 'Github Repository' : 'Repositorio de Github'}>
                                    <a
                                        href='https://github.com/Kuinoso/portfolio'
                                        target='blank'
                                        className={classes.gitLogo}
                                    >
                                        <GitHubIcon title='Github Repository' />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                        <div className={classes.footerDiv}>
                            <p className={classes.text}>Leonardo Kuinoso Cifuentes <span className={classes.year}>©2021</span></p>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Slide>
    );
};