import { useState } from 'react';

import './App.css'

//useState return array 
// [variable , method ] method control variable

function App (){

  let [counter , setcounter ] = useState(0)

  //let counter = 0

  const addvalue = ()=>{
    if (counter >= 0 && counter < 10){
      return setcounter(counter+1)
    }
    //counter += 1;
   // console.log(counter)
    
    
    //console.log(counter)
  }
const removevalue =()=>{
  if(counter <= 0 ){
    return counter
  }
  setcounter(counter -1)
}

return(
  <>
  <h1>Counter App</h1>
  <h3>Initial counter value :0 and  Maximum counter value : 10  </h3>

  <button onClick={addvalue}>Add counter  </button> <br /> <br />
  <button onClick={removevalue}>Remove counter  </button>

  <h3>Updated counter : {counter}</h3>

  
  {/* //<h3>Updated Counter : {counter}</h3> */}
  </>
)
}
export default App
