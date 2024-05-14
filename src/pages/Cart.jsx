import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem.jsx";
import {Link} from "react-router-dom";

const Cart = () => {    //Cart, capital c
  const {cart} =useSelector((state)=>state);
  console.log("cart dekho");
  console.log(cart);
  const [totalAmount, setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0))
  },[cart])

  return (
    <div >
        {
            cart.length>0 ?
            (<div className='lg:flex h-[80vh] max-lg:mr-[10px]'>
                <div className='pl-[1vw] lg:w-[60vw] '> {/*left side start*/}
                    {
                        cart.map((item, index)=>{
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }
                </div> {/*left side end*/}
                <div className='lg:w-[40vw] flex flex-col pl-[50px] justify-between '>{/*right side start*/}
                    <div className='mt-[40px] '>
                        <div className='text-2xl text-green-700 font-semibold'>
                            Your Cart
                        </div>
                        <div className='text-5xl text-green-700 font-bold '>
                            Summary
                        </div>
                        <p>
                            <span className=' text-[20px]'>
                                Total Items: {cart.length}
                            </span>
                        </p>
                    </div>
                    <div className='max-lg:mx-auto'>
                        <p className='lg:pl-[25px] max-lg:mt-[50px] '>
                            Total Amount: <span className='text-[20px]'>${totalAmount}</span>
                        </p>
                        <button className='bg-green-700 px-[20px] py-[10px] rounded-full text-white text-[20px] font-[600px] max-lg:mb-[50px] max-lg:ml-[-4px]'>
                            Checkout Now
                        </button>
                    </div>
                </div> {/*right side end*/}
            </div>) : 
            (
                <div className='h-screen flex flex-col items-center align-middle mt-[10rem] gap-y-[20px]'>
                    <Link to={"/"} className=''>
                	    <button className='text-4xl bg-green-400 rounded-[150px] px-10 py-5'>
                            Shop Now
                        </button>
                    </Link>
                    <h1 className='text-[19px]'>
                        Cart is Empty 😴
                    </h1>
                </div>
            )
        }
    </div>
  )
}

export default Cart  //Cart, capital c