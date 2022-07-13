import React, { useState } from 'react'
import { Formik } from 'formik';
import '../style/calculate.css'
import { createContext } from 'react';


const Calculate = createContext();

function Calculate() {

  const [userValue, setUserValue] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const calculatingScreen = (values) => {
    const endeks = (values.weight / ((values.height / 100) * (values.height / 100)))

    setUserValue(endeks.toFixed(2));
  }

  return (
    <div className='calculate'>

      <Formik
        initialValues={{
          name: '',
          height: '',
          weight: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          //setUserValues(values);

          calculatingScreen(values);
          setVisibility(true);




        }}
      >
        {
          ({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <label className='input' htmlFor="name">İsim</label>
              <input
              className='input'
                id="name"
                name="name"
                placeholder="Jane"
                onChange={handleChange} />
                <label className='input' htmlFor="height"></label>
              <br />

              <label className='input' htmlFor="height">Boy</label>
              <input
              className='input'
                id="height"
                name="height"
                placeholder="185"
                onChange={handleChange} />
              <label className='input' htmlFor="height">(Cm)</label>
              <br />

              <label className='input' htmlFor="weight">Kilo</label>
              <input
              className='input'
                id="weight"
                name="weight"
                placeholder="70"
                onChange={handleChange} />
              <label  className='input' htmlFor="height">(Kg)</label>
              <br />
              <button  className='input' type="submit" >Hesapla</button>
            </form>
          )
        }
      </Formik>

      <div className={`information${visibility}`} >
        <h4>Vücud Kitle Endeksiniz : {userValue}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>





    </div>
  )
}



export default Calculate;