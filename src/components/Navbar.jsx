import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import logo from "./mylogo.png";

const Navbar = () => {
  const {cart}=useSelector((state)=> state);

  return (
    <div>
        <nav className='flex justify-between h-20 items-center '>
            <NavLink to="/">
                <div className='xl:ml-[55px]'>
                    <img src={logo} className='lg:h-[200px] max-lg:h-[150px]'/>
                </div>
            </NavLink>

            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to="/">
                    <p className='lg:text-[20px] font-[500px] max-lg:text-[17px]'>
                        Home
                    </p>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative '>
                        <FaShoppingCart className='text-2xl xl:mr-[55px]'/>
                        {
                            cart.length>0 && 
                            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white xl:mr-[55px]'>
                                {cart.length}
                            </span>
                        }
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;