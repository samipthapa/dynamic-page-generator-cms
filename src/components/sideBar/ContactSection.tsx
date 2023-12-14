import deserialize from "../../utils/deserialize"
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material"
import { useState } from "react"
import tile from "../../data/contact-section/contact-tile.json"
import centered from "../../data/contact-section//contact-centered.json"
import { Typography } from "@mui/material"

const ContactSection = () => {
    const [style, setStyle] = useState('Tile')

    // let contactSection = deserialize(tile)

    let contactSection

    if (style === 'Tile') {
        contactSection = deserialize(tile)
    } else if (style === 'Centered') {
        contactSection = deserialize(centered)
    }

    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">Contact SECTION EDITOR</p>
            <p className="text-sm"><strong>Note:</strong> Click on elements on preview below to edit</p>

            <div className="my-5 w-1/2">
                <Typography variant="subtitle1">Contact Section Style</Typography>
                <div className="my-1 w-[45%]">
                    <FormControl size="small" fullWidth>
                        <Select
                            value={style}
                            onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                        >
                            <MenuItem value="Centered">Centered</MenuItem>
                            <MenuItem value="Tile">Tile</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <Typography variant="subtitle1">Preview</Typography>

            <div className="mt-4 mb-6 scale-[0.6]" style={{
                "marginTop": "-12%",
                "marginLeft": "-25%",
                "marginBottom": "-11%"
            }}>
                {contactSection}
            </div>
        </div>
    )
}

export default ContactSection