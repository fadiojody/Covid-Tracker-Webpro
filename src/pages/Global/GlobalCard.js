import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function GlobalCard(){
  const [confirmed, setTotalConfirmed] = useState("");
  const [recovered, setTotalRecovered] = useState("");
  const [deaths, setTotalDeaths] = useState("");
  
    useEffect(() => {
      axios
      .get("https://covid19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setTotalConfirmed(response.data.confirmed.value)
        setTotalDeaths(response.data.deaths.value)
        setTotalRecovered(response.data.recovered.value)
        
        
      })
     
    }, []);

return (
  <div className="container">
  
  <h1 className="card1">
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  <p>Positive</p>
  </h1>
  
      <h1 className="card2">
      <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
      <p>Deaths</p>
      </h1>

          <h1 className="card3">
          <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
          <p>Recovered</p>
          </h1>
      
  </div>

)
}