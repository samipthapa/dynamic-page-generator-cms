import CustomButton from "../common/CustomButton";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { HexColorPicker } from "react-colorful";
import InputAdornment from "@mui/material/InputAdornment";
import deserialize from "../../utils/deserialize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import rgbToHex from "../../utils/rgbToHex";
import TextDialog from "../common/TextDialog";
import { updateNavSection } from "../../grpcRequests/NavSection";
import { serialize } from "../../utils/serialize";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [style, setStyle] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [image, setImage] = useState("");
  const [header, setHeader] = useState();
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
    setHeader();
    setDetail(initialDetail);
    setValue("");
    setImage("");
    setBgColor("");
    setTextColor("");
  }, [style]);

  useEffect(() => {
    setLoading(true);
    const response = updateNavSection(localStorage.getItem("userId"));
    response
      .then((res) => {
        console.log(res.response);
        if (style == "") {
          if (res.response.active == "Basic") {
            setHeader(deserialize(JSON.parse(res.response.basic)));
          } else if (res.response.active == "Centered") {
            setHeader(deserialize(JSON.parse(res.response.centered)));
          }
          setStyle(res.response.active);
        } else {
          if (style == "Basic") {
            setHeader(deserialize(JSON.parse(res.response.basic)));
          } else if (style == "Centered") {
            setHeader(deserialize(JSON.parse(res.response.centered)));
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [style]);

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
    if (!header) return;
    if (image == "") return;
    const Logo = document.getElementById("logo") as HTMLImageElement;
    Logo.src = image;
  }, [image, header]);

  useEffect(() => {
    if (!header) return;
    if (bgColor == "") {
      setBgColor(
        rgbToHex(
          document.getElementById("header-section")!.style.backgroundColor
        )
      );
    } else {
      document.getElementById("header-section")!.style.backgroundColor =
        bgColor;
    }
  }, [bgColor, header]);

  useEffect(() => {
    if (!header) return;
    if (textColor == "") {
      setTextColor(rgbToHex(document.getElementById("navHeader")!.style.color));
    } else {
      const textElement = document.getElementsByClassName("header-text");
      for (let i = 0; i < textElement.length; i++) {
        textElement[i].style.color = textColor;
      }
    }
  }, [textColor, header]);

  const initialDetail = {
    navHeader: "",
    navHome: "",
    navAbout: "",
    navServices: "",
    navContact: "",
  } as { [key: string]: string };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState(initialDetail);

  useEffect(() => {
    if (!header) return;
    Object.keys(detail).forEach((item: string) => {
      if (detail[item] == "") {
        setDetail({
          ...detail,
          [item]: document.getElementById(item)?.innerHTML as string,
        });
      } else {
        document.getElementById(item)!.innerHTML = detail[item];
      }
    });
  }, [detail, header]);

  function handleClick(id: string) {
    setValue(id);
    setOpen(true);
  }

  const addClickListener = (id: string, handleClick: (id: string) => void) => {
    const element = document.getElementById(id);
    element?.addEventListener("click", () => handleClick(id));
  };

  addClickListener("navHeader", handleClick);
  addClickListener("navHome", handleClick);
  addClickListener("navAbout", handleClick);
  addClickListener("navServices", handleClick);
  addClickListener("navContact", handleClick);

  return (
    <>
      {loading ? (
        <div className="loader">
          <svg className="vg" viewBox="25 25 50 50">
            <circle className="circle" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      ) : (
        <div>
          <p className="font-gilroy-bold text-gray-400">
            NAVIGATION BAR EDITOR
          </p>

          <div className="my-4">
            <Typography variant="subtitle1">Navigation Bar Style</Typography>
            <div className="w-1/4 my-1">
              <FormControl size="small" fullWidth>
                <Select
                  value={style}
                  onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                >
                  <MenuItem value="Basic">Basic</MenuItem>
                  <MenuItem value="Centered">Centered</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="flex my-4 justify-between w-[75%]">
            <div>
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
              />
              <HexColorPicker color={bgColor} onChange={setBgColor} />
            </div>
            <div>
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
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                sx={{ marginBottom: "0.5rem" }}
              />
              <HexColorPicker color={textColor} onChange={setTextColor} />
            </div>

            <div>
              <Typography>Upload Image</Typography>
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
          <ToastContainer />
          <Typography variant="subtitle1">Preview</Typography>

          <div
            className="my-6 h-14 scale-95"
            style={{
              marginLeft: "-3%",
            }}
          >
            {header}
          </div>

          <TextDialog
            open={open}
            handleTextChange={(e) =>
              setDetail({ ...detail, [value]: e.target.value })
            }
            handleClose={() => setOpen(false)}
            value={value}
            field={detail}
          />

          <CustomButton
            buttonText="Save Changes"
            handleClick={() => {
              let response;
              const json = serialize(
                parse(document.getElementById("header-section")?.outerHTML)
              );
              if (style == "Basic") {
                response = updateNavSection(localStorage.getItem("userId"), {
                  basic: json,
                  active: style,
                });
              } else if (style == "Centered") {
                response = updateNavSection(localStorage.getItem("userId"), {
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
      )}
    </>
  );
};

export default Header;
