import React from 'react'
import Calculate from './Calculate';
import { useContext } from 'react';

function CalculationHistory() {

    const data = useContext(Calculate)
    console.log(data);

  return (
    <div>CalculationHistory</div>
  )
}

export default CalculationHistory;