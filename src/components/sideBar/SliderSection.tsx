import CustomButton from "../common/CustomButton"
import slider from "../../data/slider-section/slider.json"
import deserialize from "../../utils/deserialize"
import Slider from "react-slick"
import reactElementToJSXString from "react-element-to-jsx-string"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
    let sliderSection = deserialize(slider)

    return (
        <div className="w-full">
            <p className="font-gilroy-bold text-gray-400">SLIDER SECTION EDITOR</p>

            <div className="mt-4 mb-6" >
                {sliderSection}
            </div>

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