import React from 'react'

import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/slices/CartSlice"

const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);

  const dispatch=useDispatch();
  const removeFromCart= ()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  const addToCart= ()=>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  return (
    <div className='flex flex-col items-center  justify-between hover:scale-110 hover:shadow-black shadow-lg transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  '>
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                {post.title}
            </p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>
                {post.description.split(" ").slice(0,10).join(" ")+"...."}
            </p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div>
                <p className='text-green-600 font-semibold '>
                    ${post.price}
                </p>
            </div>
            {
                cart.some((p)=>p.id==post.id) ?
                (<button onClick={removeFromCart} className='text-black bg-white border-2 border-slate-900 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-red-600  hover:text-white  hover:border-none transition duration-300 ease-in'>
                    Remove Item
                </button>) : 
                (<button onClick={addToCart} className='text-white bg-slate-900 border-2 border-slate-900 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-green-600  hover:text-white hover:border-none transition duration-300 ease-in'>
                    Add To Cart
                </button>)
            }
        </div>
    </div>
  )
}

export default Product