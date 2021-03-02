import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#252934',
        width: 750,
        height: 800,
        margin: 'auto',
        marginTop: 80,
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            width: 320,
            height: 'min-content',
            paddingBottom: 20,
        },
    },
    carousel: {
        width: '100%',
        height: '55%',
        [theme.breakpoints.down('xs')]: {
            height: 'min-content',
        },
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    content: {
        display: 'flex',
        height: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1.5rem',
        color: 'white',
        marginTop: 20,
    },
    title: {
        marginBottom: 0,
    },
    text: {
        width: '90%',
        textAlign: 'center',
    },
    techs: {
        display: 'flex',
        width: '90%',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    pic: {
        width: 30,
    },
    buttons: {
        marginTop: 20,
    },
    button: {
        color: '#E8A628',
        border: '1px solid #E8A628',
        borderRadius: 5,
        margin: '0 5px',
        '&:hover': {
            backgroundColor: '#C33124',
            borderColor: '#C33124',
            color: 'white',
        },
    },
    close: {
        position: 'absolute',
        top: -18,
        right: -18,
        color: '#E8A628',
        backgroundColor: '#252934',
        borderRadius: '50%',
        zIndex: 1,
        fontSize: '2.5rem',
        cursor: 'pointer',
        '&:hover': {
            color: '#C33124',
        },
    },
    link: {
        textDecoration: 'none',
    },
}));