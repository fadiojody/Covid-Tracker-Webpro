import React from 'react';
import {cekTahun, cekHari} from '../utils/waktu'
const Hello = () => {
    return (
    <>
      <p> Hello, Selamat datang di kelas Web programming</p>
      <p> Tahun Sekarang adalah {cekTahun()}</p>
      <p> Sekarang hari ke {cekHari()}</p>
    </>
    );
  };

  export default Hello;