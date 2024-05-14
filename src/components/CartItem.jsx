import React from 'react'

import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/slices/CartSlice"
import {toast} from "react-hot-toast"

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='h-[200px] flex ml-[5vw] space-x-[30px] border-b-[2px] border-black space-y-[30px] m-auto'>
        <div className='lg:h-[150px] lg:w-[150px] max-lg:h-[100px] max-lg:w-[100px] m-auto '>
            <img src={item.image} className='h-full w-full'/>
        </div>
        <div>
            <h1 className='lg:text-[20px] font-[300px] max-lg:leading-[20px]'>{item.title.split(" ").slice(0,10).join(" ")+"...."}</h1>
            <h3 className='text-[13px] max-lg:text-[10px] text-gray-400'>{item.description.split(" ").slice(0,10).join(" ")+"...."}</h3>
            <div className='flex justify-between mt-[30px] max-lg:mr-[20px] '>
                <p className=' text-green-600 text-[20px]'>${item.price}</p>
                <button onClick={removeFromCart}className='pr-[25px] h-[20px] w-[20px]'>
                  <MdDelete className=' text-[30px] my-[6px]mx-[6px] text-black shadow hover:shadow-red-500 hover:shadow-xl bg-red-400 rounded-full p-[2px] ease-in  '/>
                </button>
            </div>
        </div>
    </div>
  )
}
export default CartItem;