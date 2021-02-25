import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#252934',
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
        zIndex: 1,
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
    buttonText: {
        textDecoration: 'none',
    },
    arrow: {
        margin: '0 0 5px 5px',
    },
    select: {
        color: '#F6F7F7',
        position: 'absolute',
        top: 0,
        width: 90,
        '& .MuiSelect-icon': {
            color: '#F6F7F7',
        },
        '&:hover': {
            color: '#C33124',
            cursor: 'pointer',
            '& .MuiSelect-icon': {
                color: '#C33124',
            },
        },
    },
}));