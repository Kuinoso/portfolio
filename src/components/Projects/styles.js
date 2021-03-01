import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '82vh',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            overflow: 'scroll',
        },
    },
    cardsContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 750,
            paddingBottom: 30,
        },
    },
    cards: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    root: {
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#252934',
        color: 'white',
        margin: 25,
        [theme.breakpoints.down('xs')]: {
            width: 300,

        },
    },
    img: {
        width: '100%',
    },
    content: {
        height: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        color: '#E8A628',
        '&:hover': {
            color: '#C33124',
        },
    },
}));