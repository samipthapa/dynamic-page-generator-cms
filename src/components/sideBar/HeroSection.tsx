import CustomButton from "../common/CustomButton"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from "@mui/material"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { useState } from "react"
import TextField from '@mui/material/TextField'
import { HexColorPicker } from "react-colorful"
import InputAdornment from '@mui/material/InputAdornment'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material';
import split from "../../data/hero-section/Split.json"
import centered from "../../data/hero-section/Centered.json"
import deserialize from "../../utils/deserialize"

const HeroSection = () => {
    const [style, setStyle] = useState('Split');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [bgColor, setBgColor] = useState("#121212");
    const [image, setImage] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    let hero;

    if (style === 'Split') {
        hero = deserialize(split);
    }
    else if (style === 'Centered') {
        hero = deserialize(centered);
    }


    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">HERO SECTION EDITOR</p>

            <div className="my-5 w-1/2">
                <Typography variant="subtitle1">Hero Section Style</Typography>
                <div className="my-1 w-[45%]">
                    <FormControl size="small" fullWidth>
                        <Select
                            value={style}
                            onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                        >
                            <MenuItem value="Split">Split</MenuItem>
                            <MenuItem value="Centered">Centered</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="flex my-5 w-1/2 justify-between">
                <div className="w-[45%]">
                    <Typography variant="subtitle1">Title</Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '0.5rem' }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full"
                    />
                </div>

                <div className="w-[45%]">
                    <Typography variant="subtitle1">Body</Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '0.5rem' }}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="flex my-4 justify-between w-1/2">
                <div className="w-[45%]">
                    <Typography variant="subtitle1">Background Color</Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <div className="rounded-full w-4 h-4" style={{
                                    backgroundColor: bgColor
                                }}>

                                </div>
                            </InputAdornment>,
                        }}
                        sx={{ marginBottom: '0.5rem' }}
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-full"
                    />
                    <HexColorPicker
                        color={bgColor}
                        onChange={setBgColor}
                    />
                </div>

                <div className="w-[45%]">
                    <Typography variant="subtitle1">Upload Image</Typography>
                    <div
                        className="w-64 h-40 border-2 mt-2 border-dashed flex items-center cursor-pointer rounded justify-center"
                        onClick={() => document.getElementById('image')?.click()}
                    >
                        <input
                            type="file"
                            id="image"
                            accept="image/png, image/jpeg, image/webp"
                            hidden
                            onChange={(event) => {
                                const { files } = event.target;
                                if (files) {
                                    handleImageChange(event);
                                }
                                event.target.value = '';
                            }}
                        />
                        {image ? (
                            <div className="w-full h-full relative flex items-center justify-center">
                                <img
                                    src={image}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                                <div className='absolute top-0 right-0 mr-1 mt-1'>
                                    <IconButton>
                                        <DeleteIcon
                                            color='primary'
                                            className="ml-1 cursor-pointer"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setImage('');
                                            }}
                                        />
                                    </IconButton>
                                </div>
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
            </div>

            <Typography variant="subtitle1">Preview</Typography>

            <div className="mt-4 mb-6 scale-[0.6]" style={{
                "marginTop": "-13%",
                "marginLeft": "-25%",
                "marginBottom": "-11%"
            }}>
                {hero}
            </div>

            <div className="mb-4">
                <CustomButton buttonText="Save Changes" />
            </div>


        </div>
    )
}

export default HeroSection