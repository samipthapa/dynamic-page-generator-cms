import Slider from "react-slick";

const MyComponent = (
  <div
    id="hero-split"
    style={{
      paddingTop: "5rem",
      paddingBottom: "5rem",
      marginTop: "1.25rem",
      marginBottom: "1.25rem",
      height: "85vh",
      backgroundColor: "#F5F5F5",
    }}
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
          id="hero-banner"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
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
      <div>

        <p
          id="hero-text"
          style={{
            position: "relative",
            right: "6rem",
            top: "11rem",
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            textAlign: "center",
            userSelect: "none",
            color: "#000000"
          }}
        >
          At Hamro Patro, we design seamless digital experiences . Explore our cutting-edge
          products for convenience that elevates your digital lifestyle .
        </p>
        <a
          href="#services"
          style={{
            display: "flex",
            width: "210px",
            marginTop: "200px",
            marginLeft: "400px",
            padding: "0.5rem 1rem 0.5rem 1rem",
            borderRadius: "0.375rem",
            fontSize: "1.125rem",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#DC2626",
          }}
        >
          Explore our products
        </a>
      </div>
    </div>
  </div>
);

export default MyComponent;
