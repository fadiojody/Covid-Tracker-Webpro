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

        setTotalConfirmed(response.data.confirmed.value)
        setTotalDeaths(response.data.deaths.value)
        setTotalRecovered(response.data.recovered.value)
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