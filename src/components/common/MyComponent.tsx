import Slider from "react-slick";

const MyComponent = (
  <div
    id="hero-split"
    style={{
      backgroundColor: "rgb(255, 0, 0)",
      height: "85vh",
      marginBottom: "1.25rem",
      marginTop: "1.25rem",
      paddingBottom: "5rem",
      paddingTop: "5rem",
    }}
  >
    <div
      style={{
        display: "grid",
        gap: "8rem",
        gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          left: "1.25rem",
          position: "relative",
          top: "5rem",
        }}
      >
        <img
          alt="Banner"
          height="600"
          id="hero-banner"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            borderRadius: "0.25rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            marginTop: "0.5rem",
          }}
          width="550"
        />
      </div>
      <p
        id="hero-text"
        style={{
          color: "rgb(0, 0, 0)",
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          position: "relative",
          right: "6rem",
          textAlign: "center",
          top: "11rem",
          userSelect: "none",
        }}
      >
        At Hamro Patro, we design seamless digital experiences . Explore our
        cutting-edge products for convenience that elevates your digital
        lifestyle .
        <a
          href="#services"
          style={{
            display: "flex",
            width: "210px",
            marginTop: "30px",
            marginLeft: "400px",
            padding: "0.5rem 1rem 0.5rem 1rem",
            borderRadius: "0.375rem",
            fontSize: "1.125rem",
            fontWeight: 500,
            color: "#ffffff",
            backgroundColor: "#DC2626",
          }}
        >
          Explore our products
        </a>
      </p>
    </div>
  </div>
);

export default MyComponent;
