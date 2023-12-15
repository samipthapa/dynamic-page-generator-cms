import Slider from "react-slick";

const MyComponent = (
    <div className="h-screen pt-24" id="services">
        <h1 className="capitalize text-5xl text-center font-semibold">
            Services we Offer
        </h1>

        <p className="px-28 pt-10 text-center text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            tenetur libero quas unde, odio cupiditate nisi deserunt odit expedita
            non tempora commodi aperiam maiores aut sed ipsa accusantium voluptate
            alias amet sint nostrum dolore et corporis. Fuga consectetur sed
        </p>

        <div className="w-1/2 m-auto overflow-hidden">
            <div className="my-32">
                <div>
                    <Slider
                        dots={true}
                        infinite={true}
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay={true}
                        speed={2000}
                        autoplaySpeed={2000}
                        cssEase={"linear"}
                    >
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Health
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702374511/l4loc0hkk5dwkdehyncp.jpg"
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Remit
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="http://res.cloudinary.com/dssvqu4bj/image/upload/v1702374612/hh0pnll84a2busyek7qv.jpg"
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Recharge
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="http://res.cloudinary.com/dssvqu4bj/image/upload/v1702374642/jozuh877cfq2arntlnp6.jpg"
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Gifts
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="http://res.cloudinary.com/dssvqu4bj/image/upload/v1702374681/gtopxnmx0uyspdg9ivpj.jpg "
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Jyotish
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="http://res.cloudinary.com/dssvqu4bj/image/upload/v1702374704/o9smwvgrajtbtsfowenb.jpg"
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "1rem",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                    borderRadius: "0.375rem",
                                    borderColor: "#D1D5DB",
                                    borderWidth: "1px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <img src="https://res.cloudinary.com/dssvqu4bj/image/upload/v1702360102/grfykaebabrla6izorzr.webp" alt="" className="h-10" />
                                    <h4 style={{ fontWeight: 500, textTransform: "capitalize" }}>
                                        Hamro Pay
                                    </h4>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img
                                        src="http://res.cloudinary.com/dssvqu4bj/image/upload/v1702374731/gpbzg6cn7q0yexfmeumj.jpg"
                                        alt="slider_image"
                                        style={{ objectFit: "cover", width: "100%", height: "9rem" }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    </div >
);

export default MyComponent