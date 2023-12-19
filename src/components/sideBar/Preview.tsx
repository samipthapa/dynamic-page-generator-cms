import navBasic from "../../data/header/nav-basic.json";
import heroSplit from "../../data/hero-section/Split.json";
import slider from "../../data/slider-section/slider.json";
import detailTile from "../../data/detail-section/detail-tile.json";
import contactCentered from "../../data/contact-section/contact-centered.json";
import footerCentered from "../../data/footer/centered.json";
import deserialize from "../../utils/deserialize";
import { useEffect, useState } from "react";

import { updateDetailSection } from "../../grpcRequests/DetailSection";
import { updateNavSection } from "../../grpcRequests/NavSection";
import { updateHeroSection } from "../../grpcRequests/HeroSection";
import { updateContactSection } from "../../grpcRequests/ContactSection";
import { updateFooterSection } from "../../grpcRequests/Footer";
import { updateSliderSection } from "../../grpcRequests/SliderSection";

const Preview = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [navbar, setNavbar] = useState(null);
  const [hero, setHero] = useState(null);
  const [contactSection, setContactSection] = useState(null);
  const [footerSection, setFooterSection] = useState(null);
  const [sliderSection, setSliderSection] = useState(null);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await updateNavSection(localStorage.getItem("userId"));
        if (response?.response) {
          if (response.response.active === "Basic") {
            setNavbar(deserialize(JSON.parse(response.response.basic)));
          } else if (response.response.active === "Centered") {
            setNavbar(deserialize(JSON.parse(response.response.centered)));
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbar();
  }, []);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await updateDetailSection(
          localStorage.getItem("userId")
        );
        if (response?.response) {
          if (response.response.active === "Tile") {
            setDetail(deserialize(JSON.parse(response.response.tile)));
          } else if (response.response.active === "Split") {
            setDetail(deserialize(JSON.parse(response.response.split)));
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchHeroSection = async () => {
      try {
        const response = await updateHeroSection(
          localStorage.getItem("userId")
        );
        if (response?.response) {
          if (response.response.active === "Split") {
            setHero(deserialize(JSON.parse(response.response.split)));
          } else if (response.response.active === "Centered") {
            setHero(deserialize(JSON.parse(response.response.centered)));
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
    fetchHeroSection();
  }, []);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await updateContactSection(
          localStorage.getItem("userId")
        );
        if (response?.response) {
          if (response.response.active === "Tile") {
            setContactSection(deserialize(JSON.parse(response.response.tile)));
          } else if (response.response.active === "Centered") {
            setContactSection(
              deserialize(JSON.parse(response.response.centered))
            );
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await updateFooterSection(
          localStorage.getItem("userId")
        );
        if (response?.response) {
          if (response.response.active === "Basic") {
            setFooterSection(deserialize(JSON.parse(response.response.basic)));
          } else if (response.response.active === "Centered") {
            setFooterSection(
              deserialize(JSON.parse(response.response.centered))
            );
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await updateSliderSection(
          localStorage.getItem("userId")
        );
        if (response?.response) {
          setSliderSection(deserialize(JSON.parse(response.response.basic)));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlider();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <svg className="vg" viewBox="25 25 50 50">
          <circle className="circle" r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }

  //   let navBasicSection = deserialize(navBasic);
  //   let heroSplitSection = deserialize(heroSplit);
  //   let sliderSection = deserialize(slider);
  //   let detailTileSection = deserialize(detailTile);
  //   let footerCenteredSection = deserialize(footerCentered);
  //   let contactCenteredSection = deserialize(contactCentered);

  return (
    <div
      className="scale-95 bg-neutral-100"
      style={{
        marginTop: "0%",
      }}
    >
      {/* {navBasicSection}
      {heroSplitSection}
      {detailTileSection}
      {sliderSection}
      {contactCenteredSection}
      {footerCenteredSection} */}

      <div>{navbar}</div>
      <div>{hero}</div>
      <div>{detail}</div>
      <div>{sliderSection}</div>
      <div>{contactSection}</div>
      <div>{footerSection}</div>
    </div>
  );
};

export default Preview;
