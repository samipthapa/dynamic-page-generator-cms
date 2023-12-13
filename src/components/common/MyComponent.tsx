import logo from "../../assets/images/logo.webp"
// import { FaFacebook } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io5";
// import { RiInstagramFill } from "react-icons/ri";
import { PiUsersBold } from "react-icons/pi";
import { PiStackBold } from "react-icons/pi";
import { TbMoodHappy } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";

const MyComponent = (
    <div
        style={{
            display: "flex",
            paddingTop: "6rem",
            paddingBottom: "6rem",
            gap: "2.5rem",
        }}
        id="about"
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "60px",
                paddingRight: "16px",
                paddingTop: "110px",
                paddingBottom: "10px",
                marginTop: "32px",
                height: "16rem",
                backgroundColor: "#DC2626",
            }}
        >
            <h1
                id="about"
                style={{
                    marginTop: "-6rem",
                    fontSize: "3rem",
                    lineHeight: 1,
                    fontWeight: 600,
                    color: "#ffffff",
                    textTransform: "capitalize",
                }}
            >
                About us
            </h1>
            <p
                id="welcomeText"
                style={{
                    paddingTop: "1.25rem",
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem",
                    fontWeight: 400,
                    color: "#ffffff",
                }}
            >
                Welcome to Hamro Patro, a leading IT company dedicated to revolutionizing the digital landscape. With a relentless commitment to innovation, we bring you a diverse portfolio of cutting-edge products designed to simplify and enhance your online experience.
            </p>

            <div style={{ position: "relative", top: "7rem" }}>
                <h1
                    id="visionHeading"
                    style={{
                        fontSize: "3rem",
                        lineHeight: 1,
                        fontWeight: 500,
                        color: "#DC2626",
                    }}
                >
                    Our Vision:
                </h1>
                <p
                    id="visionText"
                    style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem",
                        fontWeight: 500,
                    }}
                >
                    Empowering individuals and businesses through the limitless
                    possibilities of technology. We envision a world where connectivity,
                    convenience, and creativity converge to shape a brighter and more
                    accessible future.
                </p>
            </div>
        </div>

        <div
            style={{
                display: "flex",
                paddingRight: "4rem",
                paddingTop: "31px",
                gap: "2.5rem",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0.375rem",
                        width: "12rem",
                        height: "12rem",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        ":hover": {
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        },
                    }}
                >
                    <h1 style={{ color: "#e50914" }}>
                        <PiUsersBold size={60} />
                    </h1>
                    <h1
                        style={{
                            paddingTop: "1.25rem",
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            fontWeight: 500,
                        }}
                    >
                        80+
                    </h1>
                    <h2
                        style={{
                            paddingTop: "0.75rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                            textTransform: "uppercase",
                        }}
                    >
                        TEAM MEMBERS
                    </h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0.375rem",
                        width: "12rem",
                        height: "12rem",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        ":hover": {
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        },
                    }}
                >
                    <h1 style={{ color: "#e50914" }}>
                        <PiStackBold size={60} />
                    </h1>
                    <h1
                        style={{
                            paddingTop: "1.25rem",
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            fontWeight: 500,
                        }}
                    >
                        10+
                    </h1>
                    <h2
                        style={{
                            paddingTop: "0.75rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                            textTransform: "uppercase",
                        }}
                    >
                        projects
                    </h2>
                </div>
            </div>
            <div
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
                <div
                    style={{
                        display: "flex",
                        padding: "1rem",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0.375rem",
                        width: "12rem",
                        height: "12rem",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        ":hover": {
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        },
                    }}
                >
                    <h1 style={{ color: "#e50914" }}>
                        <TbMoodHappy size={60} />
                    </h1>
                    <h1
                        style={{
                            paddingTop: "1.25rem",
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            fontWeight: 500,
                        }}
                    >
                        10M+
                    </h1>
                    <h2
                        style={{
                            paddingTop: "0.75rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                            textTransform: "uppercase",
                        }}
                    >
                        happy users
                    </h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        padding: "1rem",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0.375rem",
                        width: "12rem",
                        height: "12rem",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        ":hover": {
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        },
                    }}
                >
                    <h1 style={{ color: "#e50914" }}>
                        <IoLocation size={60} />
                    </h1>
                    <h1
                        style={{
                            paddingTop: "1.25rem",
                            fontSize: "2.25rem",
                            lineHeight: "2.5rem",
                            fontWeight: 500,
                        }}
                    >
                        1
                    </h1>
                    <h2
                        style={{
                            paddingTop: "0.75rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                            textTransform: "uppercase",
                        }}
                    >
                        office
                    </h2>
                </div>
            </div>
        </div>
    </div>
);

export default MyComponent