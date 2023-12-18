import MyComponent from "./MyComponent"
import CustomButton from "./CustomButton"
import { serialize } from "../../utils/serialize";

const Test = () => {
    return (
        <div>
            <CustomButton
                buttonText="Click"
                handleClick={() => {
                    console.log(MyComponent)
                    console.log(serialize(MyComponent))
                }}
                btnWidth="100%"
            />

        </div>
    );
};

export default Test