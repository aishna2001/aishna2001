import React from "react";
import HomeSlider from "../../components/Header/HomeSlider";
import { MdOutlineLocalShipping } from "react-icons/md";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider";


const Home = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />

      <section className="bg-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Proudcts</h2>
              <p className="text-[14px] ]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="rightSec w-[60%] ">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footware" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>

      <section className="py-11 bg-white">
        <div className="container">
          <div
            className="freeShiping  w-[80%] m-auto h-20 p-4  border-2 border-[#b6b7b8] flex items-center
          justify-between rounded-md "
          >
            <div className="col1 flex items-center gap-4">
              <MdOutlineLocalShipping className="text-[50px]" />
              <span className="text-[20px] font-[500]">FREE SHIPPING</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery On Your First Order and Over ₹200
              </p>
            </div>

            <p className="font-bold text-[30px]">Only 200*</p>
          </div>
        </div>
      </section>

    
      <br />
  
    </>
  );
};

export default Home;
