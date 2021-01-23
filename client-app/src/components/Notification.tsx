import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9),
    },
    alert:{
        alignItems:"center",
        padding: "0px 16px"
    }
}))

export default function Notification(props:any) {

    const { notify, setNotify } = props;
    const classes = useStyles()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
            className={classes.alert}
            elevation={6} variant="filled"
                severity={notify.type}
                onClose={handleClose}
                >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}