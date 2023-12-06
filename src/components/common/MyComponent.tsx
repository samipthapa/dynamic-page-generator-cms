import footerLogo from "../../assets/images/logo.webp"
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const MyComponent = (
    <div>
        <div className="border relative top-[230px] h-16 flex items-center justify-between px-16">
            <div className="flex items-center justify-center gap-10">
                <img src={footerLogo} alt="" className="h-10" />
                <p>
                    © Hamro Patro {new Date().getFullYear()}, All Rights Reserved |{" "}
                    <span className="hover:underline cursor-pointer">Privacy</span> |{" "}
                    <span className="hover:underline cursor-pointer">
                        Terms of Service
                    </span>
                </p>
            </div>
            <div className="flex gap-7">
                <p className="rounded-full cursor-pointer text-blue-800 hover:scale-105 transition duration-200">
                    <FaFacebook size={25} />
                </p>
                <p className=" rounded-full cursor-pointer text-rose-600 hover:scale-105 transition duration-200">
                    <RiInstagramFill size={27} />
                </p>
                <p className=" rounded-full cursor-pointer hover:scale-105 transition duration-200">
                    <FaXTwitter size={25} />
                </p>
                <p className=" rounded-full cursor-pointer text-[#E50914] hover:scale-105 transition duration-200">
                    <IoLogoYoutube size={26} />
                </p>
            </div>
        </div>
    </div>
);

export default MyComponent