import deserialize from "../../utils/deserialize";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import TextDialog from "../common/TextDialog";
import CustomButton from "../common/CustomButton";
import { updateContactSection } from "../../grpcRequests/ContactSection"
import parse from "html-react-parser";
import { serialize } from "../../utils/serialize";

const ContactSection = () => {
  const [style, setStyle] = useState("");
  const [contact, setContact] = useState();

  useEffect(() => {
    setContact();
    setDetail(initialContact);
    setValue("");
  }, [style]);

  useEffect(() => {
    const response = updateContactSection("5")
    response
      .then((res) => {
        if (style == "") {
          if (res.response.active == "Tile") {
            setContact(deserialize(JSON.parse(res.response.tile)))
          }
          else if (res.response.active == "Centered") {
            setContact(deserialize(JSON.parse(res.response.centered)))
          }
          setStyle(res.response.active)
        } else {
          if (style == "Tile") {
            setContact(deserialize(JSON.parse(res.response.tile)))
          }
          else if (style == "Centered") {
            setContact(deserialize(JSON.parse(res.response.centered)))
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [style])

  const initialContact = {
    welcomeheading: "",
    officeheading: "",
    phoneheading: "",
    emailheading: "",
    address1: "",
    address2: "",
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
  } as { [key: string]: string };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState(initialContact);

  const tileOnly = [
    "officeheading",
    "phoneheading",
    "phone2",
    "emailheading",
    "email2",
    "address2",
  ];

  useEffect(() => {
    if (!contact) return;
    Object.keys(detail).forEach((item: string) => {
      if (tileOnly.includes(item) && style == "Centered") return;

      if (detail[item] == "") {
        setDetail({
          ...detail,
          [item]: document.getElementById(item)?.innerHTML as string,
        });
      } else {
        document.getElementById(item)!.innerHTML = detail[item];
      }
    });
  }, [detail, contact]);

  function hanldeClick(id: string) {
    setValue(id);
    setOpen(true);
  }

  const addClickListener = (id: string, hanldeClick: (id: string) => void) => {
    const element = document.getElementById(id);
    element?.addEventListener("click", () => hanldeClick(id));
  };

  addClickListener("welcomeheading", hanldeClick);
  addClickListener("officeheading", hanldeClick);

  addClickListener("phoneheading", hanldeClick);
  addClickListener("emailheading", hanldeClick);

  addClickListener("address1", hanldeClick);
  addClickListener("address2", hanldeClick);
  addClickListener("phone1", hanldeClick);
  addClickListener("phone2", hanldeClick);
  addClickListener("email1", hanldeClick);
  addClickListener("email2", hanldeClick);

  return (
    <div className="w-full">
      <p className="font-gilroy-bold text-gray-400 uppercase">
        Contact SECTION EDITOR
      </p>
      <p className="text-sm">
        <strong>Note:</strong> Click on elements on preview below to edit
      </p>

      <div className="my-5 w-1/2">
        <Typography variant="subtitle1">Contact Section Style</Typography>
        <div className="my-1 w-[45%]">
          <FormControl size="small" fullWidth>
            <Select
              value={style}
              onChange={(e: SelectChangeEvent) => setStyle(e.target.value)}
            >
              <MenuItem value="Centered">Centered</MenuItem>
              <MenuItem value="Tile">Tile</MenuItem>
            </Select>
          </FormControl>
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
        {contact}
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
        <CustomButton buttonText="Save Changes" handleClick={() => {
          let response
          const json = serialize(parse(document.getElementById("contact-section")?.outerHTML))
          if (style == "Tile") {
            response = updateContactSection("5", { tile: json, active: style })
          } else if (style == "Centered") {
            response = updateContactSection("5", { centered: json, active: style })
          }
          response
            ?.then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })

        }} />
      </div>
    </div>
  );
};

export default ContactSection;
