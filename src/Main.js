import React from "react"
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Lingkungan from './pages/Lingkungan'
import Cart from './pages/Cart';

class Main extends React.Component{
    render(){
        return(
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route path='/Lingkungan' element={<Lingkungan/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        )
    }
}

export default Main;