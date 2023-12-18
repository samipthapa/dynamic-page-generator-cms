import CustomButton from "../common/CustomButton"
import deserialize from "../../utils/deserialize"
import Slider from "react-slick"
import reactElementToJSXString from "react-element-to-jsx-string"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react"
import { updateSliderSection } from "../../grpcRequests/SliderSection";
import parse from "html-react-parser";
import slider from "../../data/slider-section/slider.json"
import { Typography } from "@mui/material"
import TextDialog from "../common/TextDialog"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'


const SliderSection = () => {
    const initialDetail = {
        "heading": "",
        "subheading": ""
    } as { [key: string]: string }
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [image, setImage] = useState('')

    const [detail, setDetail] = useState(initialDetail)


    let sliderSection = deserialize(slider)
    // const [slider, setSlider] = useState()

    // useEffect(() => {
    //     const response = updateSliderSection("12")
    //     response
    //         .then((res) => {
    //             setSlider(deserialize(JSON.parse(res.response.basic)))
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

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

    useEffect(() => {
        Object.keys(detail).forEach((item: string) => {

            if (detail[item] == "") {
                setDetail({ ...detail, [item]: document.getElementById(item)?.innerHTML as string })
            } else {
                document.getElementById(item)!.innerHTML = detail[item]
            }
        })
    }, [detail])

    useEffect(() => {
        if (image != "") {
            const logoElement = document.getElementsByClassName("logo")
            for (let i = 0; i < logoElement.length; i++) {
                const logo = logoElement[i] as HTMLImageElement
                logo.src = image
            }
        }
    }, [image])

    function handleClick(id: string) {
        setValue(id);
        setOpen(true);
    }

    const addClickListener = (id: string, handleClick: (id: string) => void) => {
        const element = document.getElementById(id);
        element?.addEventListener('click', () => handleClick(id));
    };

    addClickListener('heading', handleClick);
    addClickListener('subheading', handleClick);

    document.getElementById('slider1')?.addEventListener('click', () => { console.log('slider1') });

    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">SLIDER SECTION EDITOR</p>
            <p className="text-sm"><strong>Note:</strong> Click on elements on preview below to edit</p>

            <div className="my-4">
                <Typography variant="subtitle1">Upload Logo</Typography>
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


            <Typography variant="subtitle1" className="mt-5">Preview</Typography>

            <div className="mt-4 mb-6 scale-[0.95]"
                style={{
                    "marginTop": "-6%",
                    "marginLeft": "-12%",
                    "marginBottom": "-8%"
                }}>
                {sliderSection}
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
                        console.log('Hello World')
                    }}
                />
            </div>
        </div>

    )
}

export default SliderSection;