import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/images/Banner.jpg";
import { Typography } from "@mui/material";
import Logo from "../assets/images/logo.webp";
import CustomButton from "../components/common/CustomButton";

import { register } from "../grpcRequests/Register";
import { login } from "../grpcRequests/LogIn";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSignInFrom, setIsSignInFrom] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  function handleRegiter() {
    if (user.email) {
      console.log("Signup");
      const response = register(user.username, user.email, user.password);
      response
        .then((res) => {
          toggleSignInFrom();
          console.log(res);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setUser({
            username: "",
            email: "",
            password: "",
          });
        });
    } else {
      console.log("Login");
      const response = login(user.username, user.password);
      response
        .then((res) => {
          localStorage.setItem("userId", res.response.userId.toString());
          console.log("response", res.response.userId.toString());
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setUser({
            username: "",
            email: "",
            password: "",
          });
        });
    }
  }

  return (
    <>
      <div className="flex-row flex items-center py-3 px-3 self-center">
        <img src={Logo} alt="logo" className="w-11 h-auto rounded" />
        <Typography
          component="div"
          sx={{ marginLeft: 1, fontWeight: 500, fontFamily: "GilroyBold" }}
        >
          HAMRO PATRO
        </Typography>
      </div>

      <div className="flex items-center justify-center w-screen h-[85vh]">
        <div className="h-[90%] w-[85%] flex flex-row items-center justify-around content-between">
          <div>
            <img
              src={Banner}
              alt="Landscape picture"
              width={800}
              height={800}
            />
          </div>

          <div className="w-1/3 h-auto flex items-center justify-center flex-col">
            <h1 className="text-2xl font-semibold mb-6 tracking-wide">
              {isSignInFrom ? "Login" : "Sign Up"}
            </h1>

            <input
              type="text"
              id="username"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full"
            />

            {!isSignInFrom && (
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full"
              />
            )}
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-gray-600 w-full"
            />

            <div className="mt-4 mb-5 w-full" onClick={handleRegiter}>
              <CustomButton buttonText="Continue" btnWidth="100%" />
            </div>

            <h3 className="text-sm">
              {isSignInFrom
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                className="text-base pl-1 text-[#E50914] hover:underline transition duration-300"
                onClick={toggleSignInFrom}
              >
                {isSignInFrom ? "Sign Up Now" : "Login Now"}
              </button>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
