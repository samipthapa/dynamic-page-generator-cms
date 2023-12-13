import split from "../../data/detail-section/detail-split.json"
import tile from "../../data/detail-section/detail-tile.json"
import deserialize from "../../utils/deserialize"
import CustomButton from "../common/CustomButton"
import { Typography } from "@mui/material"
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material"
import { useState, useEffect } from "react"
import TextDialog from "../common/TextDialog"
import reactElementToJSXString from "react-element-to-jsx-string"


const DetailSection = () => {
    const initialDetail = {
        "about": "",
        "welcomeHeading": "",
        "welcomeText": "",
        "visionHeading": "",
        "visionText": "",
        "teamCount": "",
        "projectsCount": "",
        "usersCount": "",
        "officesCount": ""
    } as { [key: string]: string }
    const [style, setStyle] = useState('Split')
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [detail, setDetail] = useState(initialDetail)

    let detailSection


    if (style == 'Split') {
        detailSection = deserialize(split)
    } else if (style == 'Tile') {
        detailSection = deserialize(tile)
        console.log(reactElementToJSXString(detailSection))
    }

    useEffect(() => {
        setDetail(initialDetail)
        setValue('')
    }, [style])

    const tileOnly = [
        "usersCount", "teamCount", "projectsCount", "officesCount"
    ]

    useEffect(() => {
        Object.keys(detail).forEach((item: string) => {
            if (item == "about" && style == "Tile") return
            if (tileOnly.includes(item) && style == "Split") return

            if (detail[item] == "") {
                setDetail({ ...detail, [item]: document.getElementById(item)?.innerHTML as string })
            } else {
                document.getElementById(item)!.innerHTML = detail[item]
            }
        })
    }, [detail])

    function handleClick(id: string) {
        setValue(id);
        setOpen(true);
    }

    const addClickListener = (id: string, handleClick: (id: string) => void) => {
        const element = document.getElementById(id);
        element?.addEventListener('click', () => handleClick(id));
    };

    addClickListener('about', handleClick);
    addClickListener('welcomeHeading', handleClick);
    addClickListener('welcomeText', handleClick);
    addClickListener('visionHeading', handleClick);
    addClickListener('visionText', handleClick);
    addClickListener('visionText', handleClick);
    addClickListener('teamCount', handleClick);
    addClickListener('projectsCount', handleClick);
    addClickListener('usersCount', handleClick);
    addClickListener('officesCount', handleClick);

    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">DETAIL SECTION EDITOR</p>
            <p className="text-sm"><strong>Note:</strong> Click on elements on preview below to edit</p>

            <div className="my-5 w-1/2">
                <Typography variant="subtitle1">Detail Section Style</Typography>
                <div className="my-1 w-[45%]">
                    <FormControl size="small" fullWidth>
                        <Select
                            value={style}
                            onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                        >
                            <MenuItem value="Split">Split</MenuItem>
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
                {detailSection}
            </div>

            <TextDialog
                open={open}
                handleTextChange={(e) => setDetail({ ...detail, [value]: e.target.value })}
                handleClose={() => setOpen(false)}
                value={value}
                field={detail}
            />

            <div className="mb-4">
                <CustomButton buttonText="Save Changes"
                    handleClick={() => {

                    }}
                />
            </div>
        </div>

    )
}

export default DetailSection