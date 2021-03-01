import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';
import { useStyles } from './styles.js';
import arkaven1 from '../../media/arkaven.png';
import arkaven2 from '../../media/arkaven2.png';
import arkaven3 from '../../media/arkaven3.png';
import sup from '../../media/super.png';
import sup2 from '../../media/super2.png';
import geek from '../../media/geek.png';
import geek2 from '../../media/geek2.png';
import geek3 from '../../media/geek3.png';
import henry from '../../media/henry.png';
import henry2 from '../../media/henry2.png';
import henry3 from '../../media/henry3.png';
import cssP from '../../media/css.png';
import expressP from '../../media/express.png';
import htmlP from '../../media/html.png';
import materialP from '../../media/material.png';
import mongoP from '../../media/mongo.png';
import nodeP from '../../media/node.png';
import postgressP from '../../media/postgress.png';
import reactP from '../../media/react.png';
import reduxP from '../../media/redux.png';
import Project from '../Project';

export default function Projects({ language }) {
    const classes = useStyles();

    const [enter, setEnter] = useState(false);
    const [aOpen, setAOpen] = useState(false);
    const [sOpen, setSOpen] = useState(false);
    const [gOpen, setGOpen] = useState(false);
    const [hOpen, setHOpen] = useState(false);


    const arkavenM = [arkaven1, arkaven2, arkaven3];
    const superM = [sup, sup2];
    const geekM = [geek, geek2, geek3];
    const henryM = [henry, henry2, henry3];

    const arkavenT = [{ img: reactP, name: 'React' }, { img: reduxP, name: 'Redux' }, { img: materialP, name: 'Material-UI' }, { img: nodeP, name: 'Node.js' }, { img: expressP, name: 'Express.js' }, { img: mongoP, name: 'MongoDB' }];
    const superT = [{ img: reactP, name: 'React' }, { img: reduxP, name: 'Redux' }, { img: materialP, name: 'Material-UI' }];
    const geekT = [{ img: reactP, name: 'React' }, { img: reduxP, name: 'Redux' }, { img: cssP, name: 'CSS' }, { img: htmlP, name: 'HTML' }, { img: nodeP, name: 'Node.js' }, { img: expressP, name: 'Express.js' }, { img: postgressP, name: 'PostgreSQL' }];
    const henryT = [{ img: reactP, name: 'React' }, { img: reduxP, name: 'Redux' }, { img: materialP, name: 'Material-UI' }, { img: nodeP, name: 'Node.js' }, { img: expressP, name: 'Express.js' }, { img: postgressP, name: 'PostgreSQL' }];

    const arkavenD = language === 'english' ? 'A web app where you can play classic arcade games!' : 'Aplicación web donde se pueden jugar juegos clásicos';
    const superD = language === 'english' ? 'A web app that allows you to search more than 500 comic book characters.' : 'Aplicación web que permite buscar mas de 500 personajes de historietas.';
    const henryD = language === 'english' ? 'A web application that helps Henry staffmembers to search and choose different graduated students.' : 'Aplicación web que ayuda a los empleados de Henry a buscar estudiantes graduados.';
    const geekD = language === 'english' ? 'E-commerce where you can search, view and buy geek products.' : 'Tienda online donde se pueden buscar y comprar productos geek.';

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 200);
    }, []);

    const card = (title, description, website, github, images, tech, handleClose, handleOpen, open, timeout) => {
        return (
            <Slide direction='down' in={enter} timeout={timeout} mountOnEnter unmountOnExit>
                <Card className={classes.root}>
                    <img src={images[0]} alt={title} className={classes.img} />
                    <CardContent className={classes.content}>
                        <h1>{title}</h1>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.button} onClick={handleOpen}>
                            {language === 'english' ? 'Learn more' : 'Ver más'}
                        </Button>
                    </CardActions>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <Project
                            title={title}
                            description={description}
                            website={website}
                            github={github}
                            images={images}
                            tech={tech}
                            language={language}
                            handleClose={handleClose}
                        />
                    </Modal>
                </Card>
            </Slide>
        );
    };

    return (
        <div className={classes.container}>
            <div className={classes.cardsContainer}>
                <div className={classes.cards}>
                    {card(
                        'Arkaven',
                        arkavenD,
                        'https://arkaven.herokuapp.com/',
                        'https://github.com/Kuinoso/arkaven',
                        arkavenM,
                        arkavenT,
                        () => { setAOpen(false) },
                        () => { setAOpen(true) },
                        aOpen,
                        1800
                    )}
                    {card(
                        'Super-Search',
                        superD,
                        '',
                        'https://github.com/Kuinoso/superhero-api',
                        superM,
                        superT,
                        () => { setSOpen(false) },
                        () => { setSOpen(true) },
                        sOpen,
                        1600
                    )}
                </div>
                <div className={classes.cards}>
                    {card(
                        'Henry Talent',
                        henryD,
                        '',
                        'https://github.com/Kuinoso/Henry-Talent',
                        henryM,
                        henryT,
                        () => { setHOpen(false) },
                        () => { setHOpen(true) },
                        hOpen,
                        1400
                    )}
                    {card(
                        'Geek Toys',
                        geekD,
                        '',
                        'https://github.com/Kuinoso/first_e-commerce',
                        geekM,
                        geekT,
                        () => { setGOpen(false) },
                        () => { setGOpen(true) },
                        gOpen,
                        1200
                    )}
                </div>
            </div>
        </div>
    );
};