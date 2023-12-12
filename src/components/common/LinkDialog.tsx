import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import InputAdornment from '@mui/material/InputAdornment'

interface DataProps {
    privacy: string;
    terms: string;
}

interface LinkDialogProps {
    open: boolean
    data: DataProps
    handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClose: () => void
}

function LinkDialog(props: LinkDialogProps) {
    const { handleTextChange, data, open, handleClose } = props

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className="w-80">
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
            </div>

            <div className="p-4">
                <Typography variant="subtitle1">Label Value</Typography>
                <div className="mt-2">
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '0.5rem' }}
                        className="w-full"
                        value={data.privacy}
                        onChange={handleTextChange}
                        multiline
                    />
                </div>
                <Typography variant="subtitle1">Goto</Typography>
                <div className="mt-2">
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '0.5rem' }}
                        className="w-full"
                        value={data.privacy}
                        onChange={handleTextChange}
                        multiline
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                #
                            </InputAdornment>,
                        }}
                    />
                </div>
            </div>
        </Dialog>
    )
}

export default LinkDialog