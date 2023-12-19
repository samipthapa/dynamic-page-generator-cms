import SideBar from "../components/common/SideBar";
import Test from "../components/common/Test";
import Footer from "../components/sideBar/Footer";
import { useState } from "react";
import Header from "../components/sideBar/Header";
import HeroSection from "../components/sideBar/HeroSection";
import SliderSection from "../components/sideBar/SliderSection";
import DetailSection from "../components/sideBar/DetailSection";
import ContactSection from "../components/sideBar/ContactSection";
import Preview from "../components/sideBar/Preview";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("Preview");

  const handleSelected = (itemName: string) => {
    setSelectedItem(itemName);
  };

  if (selectedItem == "Logout") {
    navigate("/");
    localStorage.clear();
  }

  const renderComponent = () => {
    switch (selectedItem) {
      case "Footer":
        return <Footer />;
      case "Navigation Bar":
        return <Header />;
      case "Hero Section":
        return <HeroSection />;
      case "Slider Section":
        return <SliderSection />;
      case "Detail Section":
        return <DetailSection />;
      case "Contact Section":
        return <ContactSection />;
      case "Preview":
        return <Preview />;
      default:
        return null;
    }
  };

  return (
    <div>
      <SideBar selectedItem={selectedItem} handleSelected={handleSelected} />
      {/* <Test /> */}
      {/* <Tiptap /> */}
      <div className="ml-72 mt-3 mr-4">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
