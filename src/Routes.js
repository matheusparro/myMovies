import React from "react";
import {Home} from "./views/Home";
import {About} from "./views/About";
import { Routes, Route} from "react-router-dom";
import {MovieDetail} from "./views/MovieDetail";

export const AppRoutes = () =>{
    return(

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/movie/:id' element={<MovieDetail/>}></Route>
            </Routes>

    )
}
