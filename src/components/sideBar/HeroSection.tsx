import CustomButton from "../common/CustomButton";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { HexColorPicker } from "react-colorful";
import InputAdornment from "@mui/material/InputAdornment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import deserialize from "../../utils/deserialize";
import rgbToHex from "../../utils/rgbToHex";
import TextDialog from "../common/TextDialog";
import { updateHeroSection } from "../../grpcRequests/HeroSection";
import { serialize } from "../../utils/serialize";
import parse from "html-react-parser";
import { number, string } from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSection = () => {
  const [style, setStyle] = useState("");
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [image, setImage] = useState("");
  const [textColor, setTextColor] = useState("");
  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState();
  const [loading, setLoading] = useState(true);

  const notify = () => {
    toast.success("Your changes have been saved!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    setHero();
    setImage("");
    setTextColor("");
    setBgColor("");
  }, [style]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const response = updateHeroSection(userId);

    setLoading(true);

    response
      .then((res) => {
        console.log(res.response);
        if (style == "") {
          if (res.response.active == "Split") {
            setHero(deserialize(JSON.parse(res.response.split)));
          } else if (res.response.active == "Centered") {
            setHero(deserialize(JSON.parse(res.response.centered)));
          }
          setStyle(res.response.active);
        } else {
          if (style == "Split") {
            setHero(deserialize(JSON.parse(res.response.split)));
          } else if (style == "Centered") {
            setHero(deserialize(JSON.parse(res.response.centered)));
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [style]);

  //   if (loading) {
  //     return (
  //       <div>
  //         <svg className="vg" viewBox="25 25 50 50">
  //           <circle className="circle" r="20" cy="50" cx="50"></circle>
  //         </svg>
  //       </div>
  //     );
  //   }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
      cloudinary(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!hero) return;
    if (textColor == "") {
      setTextColor(rgbToHex(document.getElementById("hero-text")!.style.color));
      setText(document.getElementById("hero-text")!.innerHTML);
    } else {
      document.getElementById("hero-text")!.style.color = textColor;
      document.getElementById("hero-text")!.innerText = text;
    }
  }, [textColor, text, hero]);

  useEffect(() => {
    if (!hero || style == "Centered") return;
    if (bgColor == "") {
      setBgColor(
        rgbToHex(document.getElementById("hero-split")!.style.backgroundColor)
      );
    } else {
      document.getElementById("hero-split")!.style.backgroundColor = bgColor;
    }
  }, [bgColor, hero]);

  useEffect(() => {
    if (!hero) return;
    if (image != "" && style == "Split") {
      const heroBanner = document.getElementById(
        "hero-banner"
      ) as HTMLImageElement; // or HTMLVideoElement
      heroBanner.src = image;
    } else if (image != "" && style == "Centered") {
      document.getElementById(
        "hero-centered"
      )!.style.backgroundImage = `url(${image})`;
    }
  }, [image, hero]);

  function cloudinary(image: any) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dynamic-cms");
    data.append("cloud_name", "dssvqu4bj");

    fetch("https://api.cloudinary.com/v1_1/dssvqu4bj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        console.log("success", data.url);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  let heroText = document.getElementById("hero-text");
  heroText?.addEventListener("click", () => setOpen(true));

  return (
    <div>
      {loading ? (
        <div className="loader">
          <svg className="vg" viewBox="25 25 50 50">
            <circle className="circle" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      ) : (
        <div className="w-full">
          <p className="font-gilroy-bold text-gray-400">HERO SECTION EDITOR</p>
          <p className="text-sm">
            <strong>Note:</strong> Click on elements on preview below to edit
          </p>

          <div className="my-5 w-1/2">
            <Typography variant="subtitle1">Hero Section Style</Typography>
            <div className="my-1 w-[45%]">
              <FormControl size="small" fullWidth>
                <Select
                  value={style}
                  onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                >
                  <MenuItem value="Split">Split</MenuItem>
                  <MenuItem value="Centered">Centered</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div
            className={`flex my-4 justify-between ${
              style == "Split" ? "w-3/4" : "w-1/2"
            }`}
          >
            {style == "Split" && (
              <div className="w-[30%]">
                <ToastContainer />
                <Typography variant="subtitle1">Background Color</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <div
                          className="rounded-full w-4 h-4 border-2"
                          style={{
                            backgroundColor: bgColor,
                          }}
                        ></div>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginBottom: "0.5rem" }}
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full"
                />
                <HexColorPicker color={bgColor} onChange={setBgColor} />
              </div>
            )}

            <div className={`${style == "Split" ? "w-[30%]" : "w-[45%]"}`}>
              <Typography variant="subtitle1">Text Color</Typography>
              <TextField
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <div
                        className="rounded-full w-4 h-4 border-2"
                        style={{
                          backgroundColor: textColor,
                        }}
                      ></div>
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: "0.5rem" }}
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full"
              />
              <HexColorPicker color={textColor} onChange={setTextColor} />
            </div>

            <div className={`${style == "Split" ? "w-[30%]" : "w-[45%]"}`}>
              <Typography variant="subtitle1">Upload Image</Typography>
              <div
                className="w-64 h-40 border-2 mt-2 border-dashed flex items-center cursor-pointer rounded justify-center"
                onClick={() => document.getElementById("image")?.click()}
              >
                <input
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg, image/webp"
                  hidden
                  onChange={(event) => {
                    const { files } = event.target;
                    if (files) {
                      handleImageChange(event);
                    }
                    event.target.value = "";
                  }}
                />
                {image ? (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <img
                      src={image}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <CloudUploadIcon sx={{ fontSize: 35 }} />
                    <p className="font-gilroy-regular text-xs">
                      Supported file types: <b>JPG, PNG, WEBP</b>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Typography variant="subtitle1">Preview</Typography>

          <div
            className="mt-4 mb-6 scale-[0.6]"
            style={{
              marginTop: "-12%",
              marginLeft: "-25%",
              marginBottom: "-11%",
            }}
          >
            {hero}
          </div>

          <TextDialog
            open={open}
            handleTextChange={(e) => setText(e.target.value)}
            handleClose={() => setOpen(false)}
            value={text}
          />

          <div className="mb-4">
            <CustomButton
              buttonText="Save Changes"
              handleClick={() => {
                let json, response;
                if (style == "Split") {
                  json = serialize(
                    parse(document.getElementById("hero-split")?.outerHTML)
                  );
                  response = updateHeroSection(localStorage.getItem("userId"), {
                    split: json,
                    active: style,
                  });
                } else if (style == "Centered") {
                  json = serialize(
                    parse(document.getElementById("hero-centered")?.outerHTML)
                  );
                  response = updateHeroSection(localStorage.getItem("userId"), {
                    centered: json,
                    active: style,
                  });
                }
                response
                  ?.then((res) => {
                    notify();
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
