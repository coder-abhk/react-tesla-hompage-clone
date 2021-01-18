import Navbar from "./Navbar";
import Content from "./Content";
import "./App.css";
import Accessories from "../assets/Desktop-Accessories.jpg";
import Model3 from "../assets/Desktop-Model3.jpeg";
import ModelS from "../assets/Desktop-ModelS.jpeg";
import ModelX from "../assets/Desktop-ModelX.jpeg";
import ModelY from "../assets/Desktop-ModelY.jpeg";
import SolarPanels from "../assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "../assets/Desktop-SolarRoof.jpeg";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content__section">
        <Content
          bgImg={SolarPanels}
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          leftBtnLink=""
          leftBtnTxt="ORDER NOW"
          rightBtnLink=""
          rightBtnTxt="Learn More"
          isIndicator={true}
          isImp={true}
        />
        <Content
          bgImg={ModelS}
          title="Model S"
          desc="Starting at $69,420"
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          isIndicator={false}
          isImp={true}
        />
        <Content
          bgImg={Model3}
          title="Model 3"
          desc="
         Order Online for Touchless Delivery"
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          isIndicator={false}
          isImp={true}
        />
        <Content
          bgImg={ModelX}
          title="Model X"
          desc="
         Order Online for Touchless Delivery"
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          isIndicator={false}
          isImp={true}
        />
        <Content
          bgImg={ModelY}
          title="Model Y"
          desc="
         Order Online for Touchless Delivery"
          leftBtnLink=""
          leftBtnTxt="CUSTOM ORDER"
          rightBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          isIndicator={false}
          isImp={true}
        />
        <Content
          bgImg={SolarRoof}
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          leftBtnLink=""
          leftBtnTxt="ORDER NOW"
          rightBtnLink=""
          rightBtnTxt="Learn More"
          isIndicator={false}
          isImp={true}
        />

        <Content
          bgImg={Accessories}
          title="Accessories"
          desc=""
          leftBtnLink=""
          leftBtnTxt="ORDER NOW"
          rightBtnLink=""
          rightBtnTxt="Learn More"
          isIndicator={false}
          isImp={false}
        />
      </div>
    </div>
  );
};

export default App;
