import CustomButton from "../common/CustomButton";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { HexColorPicker } from "react-colorful";
import InputAdornment from "@mui/material/InputAdornment";
import deserialize from "../../utils/deserialize";
import { useEffect } from "react";
import TextDialog from "../common/TextDialog";
import { serialize } from "../../utils/serialize";
import rgbToHex from "../../utils/rgbToHex";
import { updateFooterSection } from "../../grpcRequests/Footer";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [style, setStyle] = useState("");
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [footer, setFooter] = useState();
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
  // if (style === 'Basic') {
  //     footer = deserialize(basic);
  // } else if (style === 'Centered') {
  //     footer = deserialize(centered);
  //     console.log(reactElementToJSXString(footer))
  // }
  useEffect(() => {
    setFooter();
    setBgColor("");
    setTextColor("");
  }, [style]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const response = updateFooterSection(userId);
    response
      .then((res) => {
        console.log(res.response);
        if (style == "") {
          if (res.response.active == "Basic") {
            setFooter(deserialize(JSON.parse(res.response.basic)));
          } else if (res.response.active == "Centered") {
            setFooter(deserialize(JSON.parse(res.response.centered)));
          }
          setStyle(res.response.active);
        } else {
          if (style == "Basic") {
            setFooter(deserialize(JSON.parse(res.response.basic)));
          } else if (style == "Centered") {
            setFooter(deserialize(JSON.parse(res.response.centered)));
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, [style]);

  useEffect(() => {
    if (!footer) return;
    if (bgColor === "") {
      setBgColor(
        rgbToHex(document.getElementById("footer-body")?.style.backgroundColor)
      );
    } else {
      document.getElementById("footer-body").style.backgroundColor = bgColor;
    }
    if (textColor === "") {
      setTextColor(
        rgbToHex(document.getElementById("footer-text")?.style.color)
      );
    } else {
      document.getElementById("footer-text").style.color = textColor;
    }
  }, [bgColor, textColor, footer]);
  useEffect(() => {
    if (!footer) return;
    if (text === "") {
      setText(document.getElementById("footer-text").innerText);
    } else {
      document.getElementById("footer-text")!.innerText = text;
    }
  }, [text, footer]);
  let company = document.getElementById("footer-text");
  company?.addEventListener("click", () => setOpen(true));
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
          <p className="font-gilroy-bold text-gray-400">FOOTER EDITOR</p>
          <div className="my-4">
            <Typography variant="subtitle1">Footer Style</Typography>
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
          <div className="flex my-4 justify-between w-[45%]">
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
          </div>
          <Typography variant="subtitle1">Preview</Typography>
          <div className="mt-4 mb-6">{footer}</div>
          <TextDialog
            open={open}
            handleTextChange={(e) => setText(e.target.value)}
            handleClose={() => setOpen(false)}
            value={text}
          />
          <ToastContainer />
          ;
          <CustomButton
            handleClick={() => {
              let response;
              const json = serialize(
                parse(document.getElementById("footer-section")?.outerHTML)
              );
              if (style == "Basic") {
                response = updateFooterSection(localStorage.getItem("userId"), {
                  basic: json,
                  active: style,
                });
              } else if (style == "Centered") {
                response = updateFooterSection(localStorage.getItem("userId"), {
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
            buttonText="Save Changes"
          />
        </div>
      )}
    </>
  );
};
export default Footer;
