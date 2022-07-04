import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'


const Cars =()=>{

  useEffect(()=>{
    getCars();
  })

  const [cars, setCars] =useState([])
  const [loading, setloading] =useState(false)

  const getCars =async ()=>{
    try{
      const res= await axios.get('https://react-challenge-api.azurewebsites.net/vehicles')
      setCars(res.data.resuls)
      
      setloading(true);
    } catch(err){
      alert(err.message)
    }
  }


  return(
    <Fragment>
      <div>
        {loading && cars.map((car)=>(
          <div key={car.model_variant}>
            {}

          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Cars