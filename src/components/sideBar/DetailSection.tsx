import deserialize from "../../utils/deserialize";
import CustomButton from "../common/CustomButton";
import { Typography } from "@mui/material";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useEffect } from "react";
import TextDialog from "../common/TextDialog";
import { updateDetailSection } from "../../grpcRequests/DetailSection";
import { serialize } from "../../utils/serialize";
import parse from "html-react-parser";
import { FaSleigh } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailSection = () => {
  const initialDetail = {
    about: "",
    welcomeHeading: "",
    welcomeText: "",
    visionHeading: "",
    visionText: "",
    teamCount: "",
    projectsCount: "",
    usersCount: "",
    officesCount: "",
  } as { [key: string]: string };
  const [style, setStyle] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState(initialDetail);
  const [detailSection, setDetailSection] = useState();
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

  // let detailSection

  // if (style == 'Split') {
  //     detailSection = deserialize(split)
  // } else if (style == 'Tile') {
  //     detailSection = deserialize(tile)
  //     console.log(reactElementToJSXString(detailSection))
  // }

  useEffect(() => {
    setDetailSection();
    setDetail(initialDetail);
    setValue("");
  }, [style]);

  useEffect(() => {
    const response = updateDetailSection(localStorage.getItem("userId"));
    response
      .then((res) => {
        if (style == "") {
          if (res.response.active == "Tile") {
            setDetailSection(deserialize(JSON.parse(res.response.tile)));
          } else if (res.response.active == "Split") {
            setDetailSection(deserialize(JSON.parse(res.response.split)));
          }
          setStyle(res.response.active);
        } else {
          if (style == "Tile") {
            setDetailSection(deserialize(JSON.parse(res.response.tile)));
          } else if (style == "Split") {
            setDetailSection(deserialize(JSON.parse(res.response.split)));
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [style]);

  const tileOnly = ["usersCount", "teamCount", "projectsCount", "officesCount"];

  useEffect(() => {
    if (!detailSection) return;
    setLoading(true);
    Object.keys(detail).forEach((item: string) => {
      if (item == "about" && style == "Tile") return;
      if (tileOnly.includes(item) && style == "Split") return;

      if (detail[item] == "") {
        setDetail({
          ...detail,
          [item]: document.getElementById(item)?.innerHTML as string,
        });
      } else {
        document.getElementById(item)!.innerHTML = detail[item];
      }
    });
    setLoading(false);
  }, [detail, detailSection]);

  function handleClick(id: string) {
    setValue(id);
    setOpen(true);
  }

  const addClickListener = (id: string, handleClick: (id: string) => void) => {
    const element = document.getElementById(id);
    element?.addEventListener("click", () => handleClick(id));
  };

  addClickListener("about", handleClick);
  addClickListener("welcomeHeading", handleClick);
  addClickListener("welcomeText", handleClick);
  addClickListener("visionHeading", handleClick);
  addClickListener("visionText", handleClick);
  addClickListener("visionText", handleClick);
  addClickListener("teamCount", handleClick);
  addClickListener("projectsCount", handleClick);
  addClickListener("usersCount", handleClick);
  addClickListener("officesCount", handleClick);

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
          <p className="font-bold text-gray-400">DETAIL SECTION EDITOR</p>
          <p className="text-sm">
            <strong>Note:</strong> Click on elements on preview below to edit
          </p>

          <div className="my-5 w-1/2">
            <Typography variant="subtitle1">Detail Section Style</Typography>
            <div className="my-1 w-[45%]">
              <FormControl size="small" fullWidth>
                <Select
                  value={style}
                  onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
                >
                  <MenuItem value="Split">Split</MenuItem>
                  <MenuItem value="Tile">Tile</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <ToastContainer />
          <Typography variant="subtitle1">Preview</Typography>

          <div
            className="mt-4 mb-6 scale-[0.6]"
            style={{
              marginTop: "-12%",
              marginLeft: "-25%",
              marginBottom: "-11%",
            }}
          >
            {detailSection}
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

          <div className="mb-4">
            <CustomButton
              buttonText="Save Changes"
              handleClick={() => {
                let response;
                const json = serialize(
                  parse(document.getElementById("detail-section")?.outerHTML)
                );
                if (style == "Tile") {
                  response = updateDetailSection(
                    localStorage.getItem("userId"),
                    {
                      tile: json,
                      active: style,
                    }
                  );
                } else if (style == "Split") {
                  response = updateDetailSection(
                    localStorage.getItem("userId"),
                    {
                      split: json,
                      active: style,
                    }
                  );
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

export default DetailSection;
