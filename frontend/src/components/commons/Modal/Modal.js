import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import ModaTitle from './ModaTitle';
import { styledBy } from '../../../helpers/styles';
import { validAscents } from '../../../constants/propTypesValidation';

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiDialog-paper': {
            backgroundColor: styledBy('bgAscent', theme.palette.background)
        }
    },
    body: {
        padding: theme.spacing(5),
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: styledBy('borderAscent', theme.palette.ascents)
    }
}))


const Modal = ({
    id = "A modal",
    textAscent,
    bgAscent="systemWash",
    borderAscent = "primary",
    onOpen,
    onClose,
    disableTypography,
    title,
    children,
    action,
    ...props
}) => {

    const classes = useStyle({ borderAscent, bgAscent });


    return (
        <Dialog open={onOpen} aria-labelledby={id} onClose={onClose} className={classes.root} {...props}>
            <ModaTitle id={id} ascent={textAscent} onClose={onClose}>
                {title}
            </ModaTitle>
            {
                children && (
                    <DialogContent className={classes.body}>
                        {
                            disableTypography ? (children) : (
                                <Typography>
                                    {children}
                                </Typography>
                            )
                        }
                    </DialogContent>
                )
            }
            {
                action && (
                    <DialogActions>
                        {action}
                    </DialogActions>
                )
            }
        </Dialog>
    );
};

Modal.propTypes = {
    textAscent: validAscents,
    bgAscent: validAscents,
    borderAscent: validAscents,
    onOpen:PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    disableTypography: PropTypes.bool,
};

export default Modal;