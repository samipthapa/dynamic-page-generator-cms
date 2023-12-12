import logo from "../../assets/images/logo.webp"
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const MyComponent = (
    <div
        id="hero-split"
        style={{
            backgroundColor: '#ffffff',
            height: '85vh',
            marginBottom: '1.25rem',
            marginTop: '1.25rem',
            paddingBottom: '5rem',
            paddingTop: '5rem'
        }}
    >
        <div
            style={{
                display: 'grid',
                gap: '8rem',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    left: '1.25rem',
                    position: 'relative',
                    top: '5rem'
                }}
            >
                <img
                    alt="Banner"
                    height={600}
                    id="hero-banner"
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                        borderRadius: '0.25rem',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        marginTop: '0.5rem'
                    }}
                    width={550}
                />
            </div>
            <p
                style={{
                    fontSize: '1.875rem',
                    lineHeight: '2.25rem',
                    position: 'relative',
                    right: '6rem',
                    textAlign: 'center',
                    top: '11rem',
                    userSelect: 'none'
                }}
            >
                At Hamro Patro, we design seamless digital experiences . Explore our cutting-edge products for convenience that elevates your digital lifestyle .
            </p>
            <a
                href="#services"
                style={{
                    ':hover': {
                        color: '#E50914'
                    },
                    backgroundColor: '#DC2626',
                    borderRadius: '0.375rem',
                    bottom: '6rem',
                    color: '#FFFFFF',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    lineHeight: '1.75rem',
                    paddingBottom: '0.5rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    paddingTop: '0.5rem',
                    position: 'absolute',
                    right: '9rem'
                }}
            >
                Explore our products
            </a>
        </div>
    </div>
);

export default MyComponent