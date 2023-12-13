import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface TextDialogProps {
    open: boolean;
    handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClose: () => void;
    value: string;
    field?: Object;
}

function TextDialog(props: TextDialogProps) {
    // const { handleTextChange, field, open, handleClose, value } = props;
    const { handleTextChange, open, handleClose, value, field } = props;

    let temp;
    if (field) {
        temp = field.hasOwnProperty(value) ? field[value] : ""
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="w-96">
                <IconButton
                    aria-label="close"
                    onClick={() => handleClose()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <div className="p-4">
                    <Typography variant="subtitle1">Field Value</Typography>
                    <div className="my-2">
                        <TextField
                            variant="outlined"
                            size="small"
                            sx={{ marginBottom: '0.5rem' }}
                            className="w-full"
                            value={temp ? temp : value}
                            onChange={handleTextChange}
                            multiline
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default TextDialog