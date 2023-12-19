import CustomButton from "../common/CustomButton";
import deserialize from "../../utils/deserialize";
import Slider from "react-slick";
import reactElementToJSXString from "react-element-to-jsx-string";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { updateSliderSection } from "../../grpcRequests/SliderSection";
import parse from "html-react-parser";
import slider from "../../data/slider-section/slider.json";
import { Typography } from "@mui/material";
import TextDialog from "../common/TextDialog";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SliderDialog from "../common/SliderDialog";
import { serialize } from "../../utils/serialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SliderSection = () => {
  const initialDetail = {
    heading: "",
    subheading: "",
  } as { [key: string]: string };
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(null);

  const [detail, setDetail] = useState(initialDetail);

  const [sliders, setSliders] = useState({
    slider1: { title: "", image: "", body: "" },
    slider2: { title: "", image: "", body: "" },
    slider3: { title: "", image: "", body: "" },
    slider4: { title: "", image: "", body: "" },
    slider5: { title: "", image: "", body: "" },
    slider6: { title: "", image: "", body: "" },
  });

  // let sliderSection = deserialize(slider)
  const [slider, setSlider] = useState();

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
    setLoading(true);
    const response = updateSliderSection(localStorage.getItem("userId"));
    response
      .then((res) => {
        setSlider(deserialize(JSON.parse(res.response.basic)));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      cloudinary(reader.result)
        .then((imageUrl) => {
          setImage(imageUrl);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      cloudinary(reader.result)
        .then((imageUrl) => {
          setSliders({
            ...sliders,
            [value]: { ...sliders[value], image: imageUrl },
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function cloudinary(image: any): Promise<string> {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dynamic-cms");
    data.append("cloud_name", "dssvqu4bj");

    return fetch("https://api.cloudinary.com/v1_1/dssvqu4bj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data.url);
        return data.url; // Return the URL
      })
      .catch((err) => {
        console.log("error", err);
        throw err; // Propagate the error
      });
  }

  useEffect(() => {
    if (!slider) return;
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
  }, [detail]);

  useEffect(() => {
    if (!slider) return;
    const updatedSliders = { ...sliders };

    Object.keys(sliders).forEach((item: string) => {
      if (
        sliders[item]["title"] == "" &&
        sliders[item]["image"] == "" &&
        sliders[item]["body"] == ""
      ) {
        let sliderElements = document.getElementsByClassName(item);
        for (let i = 0; i < sliderElements.length; i++) {
          const currentElement = sliderElements[i] as HTMLElement;
          if (currentElement.tagName == "H4") {
            updatedSliders[item] = {
              ...updatedSliders[item],
              title: currentElement.innerText,
            };
          } else if (currentElement.tagName == "P") {
            updatedSliders[item] = {
              ...updatedSliders[item],
              body: currentElement.innerText,
            };
          } else if (currentElement.tagName == "IMG") {
            const image = currentElement as HTMLImageElement;
            updatedSliders[item] = {
              ...updatedSliders[item],
              image: image.src,
            };
          }
        }
        setSliders(updatedSliders);
      } else {
        let sliderElements = document.getElementsByClassName(item);
        for (let i = 0; i < sliderElements.length; i++) {
          const currentElement = sliderElements[i] as HTMLElement;
          if (currentElement.tagName == "H4") {
            currentElement.innerText = sliders[item]["title"];
          } else if (currentElement.tagName == "P") {
            currentElement.innerText = sliders[item]["body"];
          } else if (currentElement.tagName == "IMG") {
            const image = currentElement as HTMLImageElement;
            image.src = sliders[item]["image"];
          }
        }
      }
    });
  }, [sliders]);

  useEffect(() => {
    if (image != "") {
      const logoElement = document.getElementsByClassName("logo");
      for (let i = 0; i < logoElement.length; i++) {
        const logo = logoElement[i] as HTMLImageElement;
        logo.src = image;
      }
    }
  }, [image]);

  function handleClick(id: string) {
    setValue(id);
    setOpen(true);
  }

  const addClickListener = (id: string, handleClick: (id: string) => void) => {
    const element = document.getElementById(id);
    element?.addEventListener("click", () => handleClick(id));
  };

  // addClickListener('heading', handleClick);
  // addClickListener('subheading', handleClick);
  document.getElementById("heading")?.addEventListener("click", () => {
    setValue("heading");
    setOpenDialog(true);
  });
  document.getElementById("subheading")?.addEventListener("click", () => {
    setValue("subheading");
    setOpenDialog(true);
  });
  addClickListener("slider1", handleClick);
  addClickListener("slider2", handleClick);
  addClickListener("slider3", handleClick);
  addClickListener("slider4", handleClick);
  addClickListener("slider5", handleClick);
  addClickListener("slider6", handleClick);

  // document.getElementById('slider1')?.addEventListener('click', () => { console.log('slider1') });

  return (
    <>
      {loading ? (
        <div className="loader">
          <svg className="vg" viewBox="25 25 50 50">
            <circle className="circle" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      ) : (
        <div className="w-full">
          <p className="font-gilroy-bold text-gray-400">
            SLIDER SECTION EDITOR
          </p>
          <p className="text-sm">
            <strong>Note:</strong> Click on elements on preview below to edit
          </p>

          <div className="my-4">
            <ToastContainer />
            <Typography variant="subtitle1">Upload Logo</Typography>
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

          <Typography variant="subtitle1" className="mt-5">
            Preview
          </Typography>

          <div
            className="mt-4 mb-6 scale-[0.95]"
            style={{
              marginTop: "-6%",
              marginLeft: "-10%",
              marginBottom: "-8%",
            }}
          >
            {slider}
          </div>

          <TextDialog
            open={openDialog}
            handleTextChange={(e) =>
              setDetail({ ...detail, [value]: e.target.value })
            }
            handleClose={() => setOpenDialog(false)}
            value={value}
            field={detail}
          />

          <SliderDialog
            open={open}
            handleTitleChange={(e) =>
              setSliders({
                ...sliders,
                [value]: { ...sliders[value], title: e.target.value },
              })
            }
            handleImageUpload={(e) => handleImageUpload(e)}
            handleBodyChange={(e) =>
              setSliders({
                ...sliders,
                [value]: { ...sliders[value], body: e.target.value },
              })
            }
            handleClose={() => setOpen(false)}
            value={value}
            field={sliders}
          />

          <div className="mb-4">
            <CustomButton
              buttonText="Save Changes"
              handleClick={() => {
                let response;
                const json = serialize(
                  parse(document.getElementById("services")?.outerHTML)
                );
                response = updateSliderSection(
                  localStorage.getItem("userId"),
                  json
                );
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
    </>
  );
};

export default SliderSection;
