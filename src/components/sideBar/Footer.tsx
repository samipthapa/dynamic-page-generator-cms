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
import basic from "../../data/footer/basic.json";
import centered from "../../data/footer/centered.json";
import reactElementToJSXString from "react-element-to-jsx-string";
import { useEffect } from "react";
import TextDialog from "../common/TextDialog";
import LinkDialog from "../common/LinkDialog";
import { serialize } from "../../utils/serialize";

function rgbToHex(rgb) {
  // Extract the RGB values
  const rgbArray = rgb.match(/\d+/g);

  // Convert each component to a hexadecimal value
  const hexArray = rgbArray.map((component) => {
    const hex = parseInt(component).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });

  // Combine the hexadecimal values
  return "#" + hexArray.join("");
}

const Footer = () => {
  const [style, setStyle] = useState("Basic");
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [field, setField] = useState({
    company: "",
    facebook: "",
  });
  const [loading, setLoading] = useState(true);

  let footer;

  if (style === "Basic") {
    footer = deserialize(basic);
  } else if (style === "Centered") {
    footer = deserialize(centered);
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setText(e.target.value)
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
    if (value == "facebook") {
      document.getElementById(`${value}`).href = e.target.value;
    }
    document.getElementById(`${value}`).innerText = e.target.value;
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   if (bgColor === "") {
  //     setBgColor(
  //       rgbToHex(document.getElementById("body")?.style.backgroundColor)
  //     );
  //   } else {
  //     document.getElementById("body").style.backgroundColor = bgColor;
  //   }

  //   if (textColor === "") {
  //     setTextColor(
  //       rgbToHex(document.getElementById("footer-text")?.style.color)
  //     );
  //   } else {
  //     document.getElementById("footer-text").style.color = textColor;
  //   }
  //   setLoading(false);
  // }, [bgColor, textColor]);

  useEffect(() => {
    setLoading(true);
    const bodyElement = document.getElementById("body");
    const footerTextElement = document.getElementById("footer-text");

    if (bodyElement) {
      if (bgColor === "") {
        setBgColor(rgbToHex(bodyElement.style.backgroundColor));
      } else {
        bodyElement.style.backgroundColor = bgColor;
      }
    }

    if (footerTextElement) {
      if (textColor === "") {
        setTextColor(rgbToHex(footerTextElement.style.color));
      } else {
        footerTextElement.style.color = textColor;
      }
    }

    setLoading(false);
  }, [bgColor, textColor]);

  // useEffect(() => {
  //   setLoading(true);
  //   if (text === "") {
  //     setText(document.getElementById("company").innerText);
  //   }
  //   setField({
  //     ...field,
  //     company: document.getElementById("company").innerText,
  //     facebook: document.getElementById("facebook")?.getAttribute("href"),
  //   });
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    setLoading(true);
    const companyElement = document.getElementById("company");

    if (companyElement) {
      if (text === "") {
        setText(companyElement.innerText);
      }

      setField({
        ...field,
        company: companyElement.innerText,
        facebook: document.getElementById("facebook")?.getAttribute("href"),
      });
    }

    setLoading(false);
  }, []);

  function handleClick(id: string) {
    setValue(id);
    setOpen(true);
  }

  let company = document.getElementById("company");
  let facebook = document.getElementById("facebook");

  company?.addEventListener("click", () => handleClick("company"));

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
                        className="rounded-full w-4 h-4"
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
                        className="rounded-full w-4 h-4"
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
            field={field}
            handleTextChange={handleTextChange}
            handleClose={handleClose}
            value={value}
          />

          {/* <LinkDialog
                open={open}
                data={link}
                handleTextChange={handleTextChange}
                handleClose={handleClose}
            /> */}

          <CustomButton
            handleClick={() => {
              console.log(serialize(footer));
            }}
            buttonText="Save Changes"
          />
        </div>
      )}
    </>
  );
};

export default Footer;
