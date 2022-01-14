import React,{useState} from 'react'
import "./Search.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router';

//date picker module
function Search() {
    const navigate =useNavigate()
const[startdate,setStartDate]=useState(new Date())
const[enddate,setEndDate]=useState(new Date())
   

//making object for range

const selectionRange = {
    startDate:startdate ,
    endDate:enddate ,
    key: "selection",
  }

  //handle change function

  function handleChange(ranges){
      setStartDate(ranges.selection.Startdate)
      setEndDate(ranges.selection.enddate)
  }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleChange}/>

            <h2>Number of guests
            <PeopleIcon />
            </h2>
            <input min ={0}
            defaultValue={2}
            type="number" />
            <Button onClick={()=>navigate("/search")}>Search Airbnb</Button>
        </div>
    )
}

export default Search
