import CustomButton from "../common/CustomButton"
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField'
import { HexColorPicker } from "react-colorful"
import InputAdornment from '@mui/material/InputAdornment'


const SliderSection = () => {
    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">SLIDER SECTION EDITOR</p>

            <div className="mb-4">
                <CustomButton buttonText="Save Changes"
                    handleClick={() => {
                        console.log('Hello World')
                    }}
                />
            </div>
        </div>
    )
}

export default SliderSection;