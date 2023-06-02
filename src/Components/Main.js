import axios from 'axios'
import React from 'react'
import Show from './Show';
import { useEffect, useState } from 'react';




const Main = (props) => {
    const [data, setData] = useState([])

  useEffect(() => {
    const value = axios.get("https://api.tvmaze.com/search/shows?q=all").then((e)=>{
      console.log(e)
      setData(e.data);
  })
  },[])

   
  return (
    <div className='main'>
      <div className="display-1">
      SHOWMANIAC
    </div>
       {
        data.map((value, index)=> {
               return(
                   
                   <Show data={value} key={index} index={index}/>
                   )
                })
            }
    </div>
  )
}

export default Main
