import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format'


export default function ProvinceCard(){
  const [DataProvince, provinceList] = useState([]);

   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {
        provinceList(response.data.data)
        
      })

    }, []);
return (
  <center>
<table border="10">
                <tr>
                    <th><center>No.</center></th>
                    <th><center>Provinsi</center></th>
                    <th><center>Positif</center></th>
                    <th><center>Sembuh</center></th>
                    <th><center>Meninggal</center></th>
         
                </tr>
                 {DataProvince.map((item, index) => {
                  return(
                      <tr classNames="tr">
                          <th scope="row" key={item.fid}><center>{index + 1}.</center></th>
                         <th> <center>{item.provinsi}</center></th>
                          <th><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></center></th>
                          <th><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></center></th>
                         <th><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></center></th>
                       </tr>
                 )
             })}
           </table>
           </center>
)
}