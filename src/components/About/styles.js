import { makeStyles } from '@material-ui/core/styles';
import { BorderAllRounded } from '@material-ui/icons';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '83vh',
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
    },
    profilePic: {
        width: 200,
    },
    links: {
        display: 'flex',
        width: '25%',
        justifyContent: 'space-between',
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
    },
    skillBox: {
        marginTop: 50,
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
    },
    pic: {
        height: 50,
        marginTop: 10,
    },
    skillText: {
        marginTop: 0,
    },
    red: {
        textDecoration: 'none',
        outline: 'none',
    },
}));