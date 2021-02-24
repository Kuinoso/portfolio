import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: 30,
        backgroundColor: '#252934',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    navButton: {
        color: '#F6F7F7',
        '&:hover': {
            color: '#F98365',
        },
    },
}));