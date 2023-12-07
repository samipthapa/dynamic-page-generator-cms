import CustomButton from "../common/CustomButton"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from "@mui/material"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { useState } from "react"
import TextField from '@mui/material/TextField'
import { HexColorPicker } from "react-colorful"
import InputAdornment from '@mui/material/InputAdornment'
import deserialize from "../../utils/deserialize"
import basic from "../../data/header/basic.json"
import centered from "../../data/header/centered.json"

const Header = () => {
    const [style, setStyle] = useState('Basic');
    const [bgColor, setBgColor] = useState("#121212");
    const [textColor, setTextColor] = useState("#121212");

    let header;

    if (style === 'Basic') {
        header = deserialize(basic);
    } else if (style === 'Centered') {
        header = deserialize(centered);
    }

    return (
        <div>
            <p className="font-gilroy-bold text-gray-400">NAVIGATION BAR EDITOR</p>

            <div className="my-4">
                <Typography variant="subtitle1">Navigation Bar Style</Typography>
                <div className="w-1/4 my-1">
                    <FormControl size="small" fullWidth>
                        <Select
                            value={style}
                            onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                        >
                            <MenuItem value="Basic">Basic</MenuItem>
                            <MenuItem value="Centered">Centered</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="flex my-4 justify-between w-[45%]">
                <div>
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
                    />
                    <HexColorPicker
                        color={bgColor}
                        onChange={setBgColor}
                    />
                </div>
                <div>
                    <Typography variant="subtitle1">Text Color</Typography>

                    <TextField
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <div className="rounded-full w-4 h-4" style={{
                                    backgroundColor: textColor
                                }}>

                                </div>
                            </InputAdornment>,
                        }}
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        sx={{ marginBottom: '0.5rem' }}
                    />
                    <HexColorPicker
                        color={textColor}
                        onChange={setTextColor}
                    />
                </div>
            </div >
            <Typography variant="subtitle1">Preview</Typography>

            <div className="mt-4 mb-6 border-2 w-[95%] h-14 overflow-hidden">
                {header}
            </div>

            <CustomButton buttonText="Save Changes" />
        </div >
    )
}

export default Header