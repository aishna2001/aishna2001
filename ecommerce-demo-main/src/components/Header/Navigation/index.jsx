import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const OpenCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[25%]">
            <Button
              className="!text-black  gap-2 w-full"
              onClick={OpenCategoryPanel}
            >
              <IoMdMenu className="text-[18px] font-bold" />
              SHOP BY CATEGORIES
              <IoIosArrowDown className="text-[18px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Fashion
                  </Button>
                </Link>

                <div
                  className="submenu absolute top-[120%] left-[0%] min-w-[200px]
                  bg-white shadow-md opacity-0 transition-all "
                >
                  <ul>
                    <li className="list-none w-full !justify-start">
                      <Link to="/" className="w-full"> 
                      <Button
                        className="!text-[rgba(0,0,0,0.8)]   w-full
                       !rounded-none  !text-left !justify-start">
                        Men
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full"> 
                      <Button
                        className="!text-[rgba(0,0,0,0.8)] w-full
                      rounded-none !text-left !justify-start">
                        Women
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full"> 
                      <Button
                        className="!text-[rgba(0,0,0,0.8)]  
                    rounded-none    w-full !text-left !justify-start" >
                        Kids
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full"> 
                      <Button
                        className="!text-[rgba(0,0,0,0.8)] 
                      rounded-none w-full !text-left !justify-start ">
                        Boys
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full"> 
                      <Button
                        className="!text-[rgba(0,0,0,0.8)] 
                      rounded-none w-full !text-left !justify-start" >
                        Girls
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Footware
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[550] !text-[rgba(0,0,0,0.5)] 
               hover:!text-[#3366cc]"
                  >
                    Wellness
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%] ">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[16px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
