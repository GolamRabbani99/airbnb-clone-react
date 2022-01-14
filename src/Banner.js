import React from 'react'
import './Banner.css'
import react,{useState} from "react"
import Button from '@mui/material/Button';
import Search from "./Search"
import { useNavigate } from 'react-router';
function Banner() {
     const navigate =useNavigate()
    //state and hooks for the show date
    const [showDate,setShowDate]=useState(false)
    return (
        <div className="banner">
        <div className="banner__searchButton">
        {showDate && <Search />}
        <Button onClick={()=>setShowDate(!showDate)}variant="outlined"className="banner__searchButton">{showDate?"Hide":"Search Dates"}</Button>
        </div>
     
            <div className="banner__info">
                <h1>Not sure where to go? Perfect.</h1>
                <h5>plan a different kind of gateway to uncover the hidden gems near you </h5>


                <Button onClick={()=>navigate("/search")}variant="outlined">explore near by</Button>
            </div>
        </div>
    )
}

export default Banner
