import React, { useState, useContext, useEffect }  from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{
    const {dispatch} = useContext(AppContext);
    const [currency, setCurrency] = useState('£');

    const handleChange = (event) => {
        setCurrency(event.target.value);
        changeCurrency()
      };
    
      const changeCurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
      }
    
    useEffect(() => changeCurrency(), [currency] )
    return(
        <div className='alert alert-success'>
            <label>Currency: </label>
               <select id="currency" onChange={handleChange}>
                  <option value="$">$ Dollar</option>
                  <option value="£" selected>£ Pound</option>
                  <option value="€">€ Euro</option>
                  <option value="₹">₹ Ruppee</option>
               </select>
           </div>
    );
}

export default Currency;