import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC} from "../../app/app-reducer";
import {AppRootStateType} from "../../state/store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackBar() {
    //const [open, setOpen] = React.useState(true);
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const dispath = useDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispath(setErrorAC(null))
    };

    const isOpen = error !== null

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    {error}
                </Alert>
            </Snackbar>

        </Stack>
    );
}
