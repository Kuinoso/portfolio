import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '82vh',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            overflow: 'auto',
        },
    },
    links: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            height: '90%',
        },
    },
    link: {
        display: 'flex',
        textDecoration: 'none',
        color: '#252934',
        alignItems: 'center',
        outline: 'none',
        '&:hover': {
            color: '#C33124',
            textDecoration: 'underline',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
            flexDirection: 'column-reverse'
        },
    },
    icon: {
        fontSize: '2.5rem',
        marginRight: 10,
        marginBottom: 5,
        color: '#E8A628',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        },
    },
}));