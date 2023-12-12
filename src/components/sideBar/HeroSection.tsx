import CustomButton from "../common/CustomButton"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from "@mui/material"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField'
import { HexColorPicker } from "react-colorful"
import InputAdornment from '@mui/material/InputAdornment'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material';
import split from "../../data/hero-section/Split.json"
import centered from "../../data/hero-section/Centered.json"
import deserialize from "../../utils/deserialize"
import rgbToHex from "../../utils/rgbToHex"
// import { serialize } from "../../utils/serialize"
import reactElementToJSXString from "react-element-to-jsx-string"
import TextDialog from "../common/TextDialog"


const HeroSection = () => {
    const [style, setStyle] = useState('Split');
    const [text, setText] = useState('');
    const [bgColor, setBgColor] = useState("");
    const [image, setImage] = useState('');
    const [textColor, setTextColor] = useState("");
    const [open, setOpen] = useState(false)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
            cloudinary(reader.result)
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


    useEffect(() => {
        if (textColor == "") {
            setTextColor(rgbToHex(document.getElementById("hero-text")!.style.color))
            setText(document.getElementById("hero-text")!.innerHTML)
        } else {
            document.getElementById("hero-text")!.style.color = textColor
            document.getElementById("hero-text")!.innerText = text
        }
    }, [textColor, text])

    useEffect(() => {
        if (bgColor == "") {
            setBgColor(rgbToHex(document.getElementById("hero-split")!.style.backgroundColor))
        } else {
            document.getElementById("hero-split")!.style.backgroundColor = bgColor
        }
    }, [bgColor])

    useEffect(() => {
        if (image != "" && style == "Split") {
            const heroBanner = document.getElementById("hero-banner") as HTMLImageElement; // or HTMLVideoElement
            heroBanner.src = image;
        } else if (image != "" && style == "Centered") {
            document.getElementById("hero-centered")!.style.backgroundImage = `url(${image})`
        }
    }, [image])

    function cloudinary(image: any) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "dynamic-cms");
        data.append("cloud_name", "dssvqu4bj");

        fetch("https://api.cloudinary.com/v1_1/dssvqu4bj/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setImage(data.url);
                console.log("success", data.url);
            })
            .catch((err) => {
                console.log("error", err);
            });
    }

    function clearImage() {
        setImage("");
        const heroBanner = document.getElementById("hero-banner") as HTMLImageElement; // or HTMLVideoElement
        heroBanner.src = "";
    }

    let heroText = document.getElementById('hero-text');
    heroText?.addEventListener('click', () => setOpen(true));

    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">HERO SECTION EDITOR</p>
            <p className="text-sm"><strong>Note:</strong> Click on elements on preview below to edit</p>

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

            <div className={`flex my-4 justify-between ${style == 'Split' ? 'w-3/4' : 'w-1/2'}`}>
                {
                    style == "Split" &&
                    <div className="w-[30%]">
                        <Typography variant="subtitle1">Background Color</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <div className="rounded-full w-4 h-4 border-2" style={{
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
                }


                <div className={`${style == 'Split' ? 'w-[30%]' : 'w-[45%]'}`}>
                    <Typography variant="subtitle1">Text Color</Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <div className="rounded-full w-4 h-4 border-2" style={{
                                    backgroundColor: textColor
                                }}>

                                </div>
                            </InputAdornment>,
                        }}
                        sx={{ marginBottom: '0.5rem' }}
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-full"
                    />
                    <HexColorPicker
                        color={textColor}
                        onChange={setTextColor}
                    />
                </div>

                <div className={`${style == 'Split' ? 'w-[30%]' : 'w-[45%]'}`}>
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
                                    // cloudinary();
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
                                            color='error'
                                            className="ml-1 cursor-pointer"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                clearImage();
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
                "marginTop": "-12%",
                "marginLeft": "-25%",
                "marginBottom": "-11%"
            }}>
                {hero}
            </div>

            <TextDialog
                open={open}
                handleTextChange={(e) => setText(e.target.value)}
                handleClose={() => setOpen(false)}
                value={text}
            />

            <div className="mb-4">
                <CustomButton buttonText="Save Changes"
                    handleClick={() => {
                        console.log(reactElementToJSXString(hero))
                    }}
                />
            </div>


        </div>
    )
}

export default HeroSection