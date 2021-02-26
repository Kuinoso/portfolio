import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1,
        color: 'white',
        overflow: 'hidden',
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#252934',
        padding: 0,
    },
    footerDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: '0.8rem',
    },
    gitLogo: {
        cursor: 'pointer',
        color: 'white',
        outline: 'none',
        '&:hover': {
            color: '#C33124',
        },
    },
    upper: {
        display: 'flex',
        width: '8%',
        justifyContent: 'space-between',
        marginTop: 5,
        [theme.breakpoints.down('xs')]: {
            width: '50%',
        },
    },
    select: {
        color: '#F6F7F7',
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
    year: {
        color: '#E8A628',
    },
}));