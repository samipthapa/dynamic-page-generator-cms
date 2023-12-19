import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useState, useEffect } from 'react';


export interface SliderDialogProps {
    open: boolean;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBodyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClose: () => void;
    value: string;
    field: Object;
}

function SliderDialog(props: SliderDialogProps) {
    const { handleTitleChange, handleImageUpload, handleBodyChange, open, handleClose, value, field } = props;

    // let temp = field[value]
    const [temp, setTemp] = useState(field[value]);

    useEffect(() => {
        setTemp(field[value]);
    }, [field, value]);

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
                    <Typography variant="subtitle1">Title</Typography>
                    <div className="my-2">
                        <TextField
                            variant="outlined"
                            size="small"
                            sx={{ marginBottom: '0.5rem' }}
                            className="w-full"
                            value={temp?.title || ""}
                            onChange={handleTitleChange}
                        />
                    </div>
                </div>

                <div className="p-4">
                    <Typography variant="subtitle1">Upload Image</Typography>
                    <div
                        className="w-64 h-40 border-2 mt-2 border-dashed flex items-center cursor-pointer rounded justify-center"
                        onClick={() => document.getElementById('thumbnail')?.click()}
                    >
                        <input
                            type="file"
                            id="thumbnail"
                            accept="image/png, image/jpeg, image/webp"
                            hidden
                            onChange={(event) => {
                                const { files } = event.target;
                                if (files) {
                                    handleImageUpload(event);
                                }
                                event.target.value = '';
                            }}
                        />
                        {field["image"] ? (
                            <div className="w-full h-full relative flex items-center justify-center">
                                <img
                                    src={field["image"]}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center">
                                <CloudUploadIcon sx={{ fontSize: 35 }} />
                                <p className="font-gilroy-regular text-xs">
                                    Supported file types: <b>JPG, PNG, WEBP</b>
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-4">
                    <Typography variant="subtitle1">Body</Typography>
                    <div className="my-2">
                        <TextField
                            variant="outlined"
                            size="small"
                            sx={{ marginBottom: '0.5rem' }}
                            className="w-full"
                            value={temp?.body || ""}
                            onChange={handleBodyChange}
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default SliderDialog