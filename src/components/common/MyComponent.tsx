import logo from "../../assets/images/logo.webp"
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const MyComponent = (
    <div
        style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            marginTop: "1.25rem",
            marginBottom: "1.25rem",
            height: "85vh",
        }}
        id="home"
    >
        {/* Body Section */}
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "8rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    left: "1.25rem",
                    top: "5rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Landscape picture"
                    width={550}
                    height={600}
                    style={{
                        marginTop: "0.5rem",
                        borderRadius: "0.25rem",
                        boxShadow:
                            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                />
            </div>
            <p
                style={{
                    position: "relative",
                    right: "6rem",
                    top: "11rem",
                    fontSize: "1.875rem",
                    lineHeight: "2.25rem",
                    textAlign: "center",
                    userSelect: "none",
                }}
            >
                At{" "}
                <span
                    style={{
                        fontSize: "3rem",
                        lineHeight: 1,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#E50914",
                    }}
                >
                    hamro patro
                </span>
                , we design seamless digital experiences . Explore our cutting-edge
                products for convenience that elevates your digital lifestyle .
            </p>
            <a
                href="#services"
                style={{
                    position: "absolute",
                    bottom: "6rem",
                    right: "9rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderRadius: "0.375rem",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    backgroundColor: "#DC2626",
                }}
            >
                Explore our products
            </a>
        </div>
    </div>
);

export default MyComponent