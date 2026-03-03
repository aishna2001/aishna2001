import React from 'react'
import "../ProductIteam/Style.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const ProductItems  = () => {
  return (
    <div className='productItem shadow-md rounded-md overflow-hidden mt-4  border-1 border-[#b6b7b8]'>
      <div className='imagWrapper w-[100%] h-[250px] rounded-md overflow-hidden'>
        <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" 
        className='w-full '/>
      </div>
      <div className='info p-3 '>
        <h6 className='text-[13px]'> <Link to="/ProductDetails/1" className='link transition-all text-[grey]'>StyleHub</Link></h6>
        <h3 className='text-[14px] title mt-2 font-[600px] mb-1 text-[#000000]'>
          <Link to="/ProductDetails/1" className='link transition-all'>
          A-Line Kurti With Sharara & Dupatta
          </Link>
          </h3>
           <Rating name="size-small" defaultValue={4} size="small" readOnly />

           <div className='flex items-center text-[12px] gap-3 text-[#3366CC] font-[300px]'>
            <span className='old price line-through text-[grey] '>₹700</span>
            <span className='old price text-[15px] font-semibold'>₹500</span>

           </div>

      </div>
    </div>
  )
}

export default ProductItems;
