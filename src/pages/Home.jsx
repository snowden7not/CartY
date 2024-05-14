import React from 'react'

import { useState,useEffect } from 'react';
import Spinner from "../components/Spinner.jsx"
import Product from "../components/Product.jsx"

const Home = () => {
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData(){
    setLoading(true);
    try{
        const res= await fetch(API_URL);
        const data= await res.json();

        setPosts(data);
    }
    catch(error){
        alert("Error in geting Data from Server");
        console.log("Error aa gya, fetch krne me");

        setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
        {
            loading ? 
            <div className='flex flex-col  h-screen items-center align-middle mt-[10rem]'>
                <Spinner/>
            </div> : 
            posts.length >0 ? 
            (<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
                {
                    posts.map((post)=>(<Product key={post.id} post={post}/>))
                }
            </div>) : 
            <div className='flex flex-col h-screen items-center align-middle mt-[10rem]'>
                <h1 className='text-[30px]'>No Data Found</h1>
            </div>
        } 
    </div>
  )
}

export default Home