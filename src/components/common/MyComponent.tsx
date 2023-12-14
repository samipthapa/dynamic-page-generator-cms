// import { FaFacebook } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io5";
// import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MyComponent = (
    <div
        style={{
            background: "#F5F5F5",
            display: "flex",
            position: "fixed",
            zIndex: 10,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "3.5rem",
            paddingRight: "3.5rem",
            marginTop: "-1.25rem",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            ":hover": {
                boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            },
        }}
    >
        <a
            href="#"
            style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <img
                    src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp"
                    alt="logo"
                    style={{
                        height: "3.5rem",
                        width: "3.5rem",
                        borderRadius: "0.375rem",
                    }}
                />
            </div>
        </a>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <a
                href="#"
                style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                }}
            >
                hamro patro
            </a>
            <nav
                style={{
                    display: "flex",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: 500,
                    gap: "25px",
                }}
            >
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </div>
        <div>
            <a
                href="#login"
                style={{
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    borderRadius: "0.375rem",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    backgroundColor: "#DC2626",
                }}
            >
                login
            </a>
        </div>
    </div>
);

export default MyComponent