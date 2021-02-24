import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: '0.3',
    },
    presentation: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: 300,
            margin: 'auto',
            textAlign: 'center',
        },
    },
    firstLine: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: 0,
        },
    },
    name: {
        marginLeft: 7,
        color: '#F9DE59',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    },
    button: {
        marginTop: 20,
        borderColor: '#F6F7F7',
        color: '#F6F7F7',
        display: 'flex',
        alignItems: 'center',
        padding: '5px 10px 0 10px',
        '&:hover': {
            backgroundColor: '#C33124',
            borderColor: '#C33124',
        },
    },
    arrow: {
        margin: '0 0 5px 5px',
    },
}));