//type rafc and press enter. (this generates boiler plate code )
import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
        <div className='bg-slate-900'>
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App;
//file name of .jsx file must start with capital letter