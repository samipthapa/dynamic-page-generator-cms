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
import { serialize } from "../../utils/serialize";
import parse from "html-react-parser";

import { useEffect } from "react";

import { getJsonData } from "../../grpcRequests/footer";
import { updateJsonData } from "../../grpcRequests/footer";

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
  const [footer, setFooter] = useState("");

  //   let footer;

  useEffect(() => {
    let param;
    if (style == "Basic") {
      param = 2;
    } else if (style == "Centered") {
      param = 1;
    }
    getJsonData(param).then((res) => {
      const json = JSON.parse(res.response.jsonData.jsonDataString);
      setFooter(deserialize(json));
    });
  }, [style]);

  //   console.log(reactElementToJSXString(footer));

  //   if (footer) {
  //     if (bgColor === "") {
  //       setBgColor(
  //         rgbToHex(document.getElementById("body")?.style.backgroundColor)
  //       );
  //     } else {
  //       document.getElementById("body").style.backgroundColor = bgColor;
  //     }
  //     if (textColor === "") {
  //       setTextColor(
  //         rgbToHex(document.getElementById("footer-text")?.style.color)
  //       );
  //     } else {
  //       document.getElementById("footer-text").style.color = textColor;
  //     }
  //   }

  useEffect(() => {
    if (footer) {
      if (bgColor === "") {
        setBgColor(
          rgbToHex(document.getElementById("body")?.style.backgroundColor)
        );
      } else {
        document.getElementById("body").style.backgroundColor = bgColor;
      }
      if (textColor === "") {
        setTextColor(
          rgbToHex(document.getElementById("footer-text")?.style.color)
        );
      } else {
        document.getElementById("footer-text").style.color = textColor;
      }
    }
  }, [bgColor, textColor, footer]);

  return (
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

      <CustomButton
        handleClick={() => {
          const data = serialize(
            reactElementToJSXString(
              parse(document.getElementById("footer-section")?.outerHTML)
            )
          );
          //   console.log(data);
          updateJsonData(2, data).then((res) => {
            console.log(res);
          });
        }}
        buttonText="Save Changes"
      />
    </div>
  );
};

export default Footer;
