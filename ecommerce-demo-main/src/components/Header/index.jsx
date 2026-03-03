import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Navigation from "./Navigation";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/Order Tracking"
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3  border-b-[2px] border-gray-300">
        <div className="container flex items-center justify-between gap-6">
          <div className="col1 w-[25%] py-2">
            <Link to={"/"}>
              {" "}
              <img src="/logo.svg" alt="Logo" className="h-10 w-[100%]" />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3  ">
              <li className="list-none  flex items-center gap-2">
                <Link to="/login" className="link transition font-[450]">
                  Login
                </Link>
                <span>|</span>
                <Link to="/register" className="link transition font-[450]">
                  Register
                </Link>
              </li>
              <li>
                 <Tooltip title="compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    <BiGitCompare />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                 <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                 <Tooltip title="My Cart">
                  <Link to="/CartPage">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                    
                    <MdOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
                </Link>
                </Tooltip>
              </li>
            
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    
    </header>
  );
};

export default Header;
