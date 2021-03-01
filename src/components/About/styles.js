import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '82vh',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            overflow: 'auto',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '30vw',
        marginRight: '5vh',
        [theme.breakpoints.down('xs')]: {
            width: 320,
            margin: 'auto',
            marginTop: 650,
        },
    },
    title: {
        color: '#252934',
        fontSize: '1.9rem',
        fontWeight: 'bold',
    },
    text: {
        width: '75%',
        marginTop: 0,
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    profilePic: {
        width: 200,
    },
    links: {
        display: 'flex',
        width: '30%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
            width: '50%',
        },
    },
    redirect: {
        color: '#E8A628',
        '&:hover': {
            color: '#C33124',
        },
    },
    link: {
        fontSize: '2.5rem',
        cursor: 'pointer',
    },
    skills: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '30vw',
        marginLeft: '5vh',
        [theme.breakpoints.down('xs')]: {
            width: 300,
            margin: 'auto',
            marginTop: 100,
            paddingBottom: 50
        },
    },
    skillBox: {
        marginTop: 50,
        [theme.breakpoints.down('xs')]: {
            marginTop: 5
        },
    },
    skillSet: {
        display: 'flex',
    },
    skill: {
        width: 100,
        height: 100,
        margin: 15,
        border: '1px solid #E8A628',
        borderRadius: '50%',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        position: 'relative',
        backgroundColor: '#E8A628',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#C33124',
            border: '1px solid #C33124',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        },
        [theme.breakpoints.down('xs')]: {
            width: 80,
            height: 80,
        },
    },
    pic: {
        height: 50,
        marginTop: 10,
        [theme.breakpoints.down('xs')]: {
            height: 40,
        },
    },
    skillText: {
        marginTop: 0,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
    },
    red: {
        textDecoration: 'none',
        outline: 'none',
    },
}));