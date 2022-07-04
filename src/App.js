import axios from "axios";
import React, { useEffect, useState } from "react";


const App = () => {
  const [car, setCars] =useState([])

  const getCarData= async()=>{
    try{
      const data = await axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
      console.log(data.data);
      setCars(data.data)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getCarData()
  },[])
  return (<div className="App">
    {car.map(car=>{
      return <p>{car.model_variant}</p>
    })}
    
  </div>
  );
};

export default App;
