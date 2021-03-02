import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: '10vh',
        backgroundColor: '#252934',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    navButton: {
        color: '#F6F7F7',
        fontSize: '1.2rem',
        '&:hover': {
            color: '#C33124',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
    },
    link: {
        textDecoration: 'none',
    },
}));