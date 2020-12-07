import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function IndonesiaCard(){
  const [confirmed, setConfirmed] = useState("");
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then(response => {
        setConfirmed(response.data.perawatan)
        setDeaths(response.data.meninggal)
        setRecovered(response.data.sembuh)
        
      })

    }, []);

return (
  <div className="container">
  
  <h1 className="cardPositive">
  <p>Positive</p>
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  </h1>
  
      <h1 className="cardDeaths">
      <p>Deaths</p>
      <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
      </h1>

          <h1 className="cardRecovered">
          <p>Recovered</p>
          <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
          </h1>
      
  </div>

)
}