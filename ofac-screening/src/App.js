
import React, { useState } from 'react';

//import ScreeningForm from './ components/ScreeningForm';
import {Test} from './ components/Test';
import ResultDisplay from './ components/ResultDisplay';
function App() {
  const [result, setResult] = useState(null);


  return (
   
    <div>
      <h1>OFAC SDN Screening</h1>
      <Test  />
    
    </div>
    
    
  );
}

export default App;
