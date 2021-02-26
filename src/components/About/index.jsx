import React, { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './styles.js';
import profileP from '../../media/profile.png';
import cssP from '../../media/css.png';
import expressP from '../../media/express.png';
import htmlP from '../../media/html.png';
import materialP from '../../media/material.png';
import mongoP from '../../media/mongo.png';
import nodeP from '../../media/node.png';
import postgressP from '../../media/postgress.png';
import reactP from '../../media/react.png';
import reduxP from '../../media/redux.png';

export default function About({ language }) {
    const classes = useStyles();

    const spanishIntro = 'Poseo técnicas de desarrollo web tanto en front-end como back-end usando librerías y frameworks basados en JavaScript. Amo la flexibilidad de los componentes visuales y las diferentes estrategias de manejo de bases de datos. Cada día me asombran las innumerables posibilidades que surgen al usar ambos sistemas para el desarrollo de proyectos eficientes y hermosos.';
    const englishIntro = 'I have skills in web development both in front-end and back-end using JavaScript frameworks and libraries. I love the flexibility of visual components and the different strategies for database management. Every day I am fascinated by the countless possibilities of using both systems to create beautiful and efficient projects.';

    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEnter(true);
        }, 200);
    }, []);

    return (
        <div className={classes.container}>
            <Fade in={enter} timeout={4000}>
                <div className={classes.info}>
                    <img src={profileP} alt='Profile' className={classes.profilePic} />
                    <h1 className={classes.title}>{language === 'english' ? 'WHO AM I?' : '¿QUIÉN SOY?'}</h1>
                    <p className={classes.text}>{language === 'english' ? englishIntro : spanishIntro} </p>
                    <div className={classes.links}>
                        <Tooltip title={language === 'english' ? 'LinkedIn Profile' : 'Perfil de LinkedIn'} className={classes.pop}>
                            <a href='https://www.linkedin.com/in/leonardo-kuinoso-cifuentes-916634161/' target='blank' className={classes.redirect}>
                                <LinkedInIcon className={classes.link} />
                            </a>
                        </Tooltip>
                        <Tooltip title={language === 'english' ? 'Github Profile' : 'Perfil de Github'} className={classes.pop}>
                            <a href='https://github.com/Kuinoso' target='blank' className={classes.redirect}>
                                <GitHubIcon className={classes.link} />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </Fade>
            <div className={classes.skills}>
                <Fade in={enter} timeout={4000}>
                    <h1 className={classes.title}>{language === 'english' ? 'I WORK WITH:' : 'TRABAJO CON:'}</h1>
                </Fade>
                <div className={classes.skillBox}>
                    <div className={classes.skillSet}>
                        <Slide direction="up" in={enter} timeout={900} mountOnEnter unmountOnExit>
                            <a href='https://www.w3schools.com/css/css_intro.asp' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={cssP} alt='Css' className={classes.pic} />
                                <h4 className={classes.skillText}>CSS</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={1300} mountOnEnter unmountOnExit>
                            <a href='https://expressjs.com/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={expressP} alt='Express.js' className={classes.pic} />
                                <h4 className={classes.skillText}>Express.js</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={1700} mountOnEnter unmountOnExit>
                            <a href='https://www.w3schools.com/html/html_intro.asp' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={htmlP} alt='Html' className={classes.pic} />
                                <h4 className={classes.skillText}>HTML</h4>
                            </div></a>
                        </Slide>
                    </div>
                    <div className={classes.skillSet}>
                        <Slide direction="up" in={enter} timeout={2100} mountOnEnter unmountOnExit>
                            <a href='https://material-ui.com/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={materialP} alt='Material-UI' className={classes.pic} />
                                <h4 className={classes.skillText}>Material-UI</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={2500} mountOnEnter unmountOnExit>
                            <a href='https://www.mongodb.com/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={mongoP} alt='MongoDB' className={classes.pic} />
                                <h4 className={classes.skillText}>MongoDB</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={2900} mountOnEnter unmountOnExit>
                            <a href='https://nodejs.org/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={nodeP} alt='Node.js' className={classes.pic} />
                                <h4 className={classes.skillText}>Node.js</h4>
                            </div></a>
                        </Slide>
                    </div>
                    <div className={classes.skillSet}>
                        <Slide direction="up" in={enter} timeout={3300} mountOnEnter unmountOnExit>
                            <a href='https://www.postgresql.org/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={postgressP} alt='PostgreSQL' className={classes.pic} />
                                <h4 className={classes.skillText}>PostgreSQL</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={3700} mountOnEnter unmountOnExit>
                            <a href='https://reactjs.org/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={reactP} alt='React.js' className={classes.pic} />
                                <h4 className={classes.skillText}>React.js</h4>
                            </div></a>
                        </Slide>
                        <Slide direction="up" in={enter} timeout={4100} mountOnEnter unmountOnExit>
                            <a href='https://redux.js.org/' target='blank' className={classes.red}><div className={classes.skill}>
                                <img src={reduxP} alt='Redux' className={classes.pic} />
                                <h4 className={classes.skillText}>Redux</h4>
                            </div></a>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};