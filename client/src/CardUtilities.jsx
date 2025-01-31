import {useState, useEffect, use} from 'react'

export function GetCardData(){
    const [carddata, setCarddata] = useState([]);
    
      useEffect(()=> {
        fetch("/api/cardbrowse")
        .then(response=>response.json())
        .then(data=>{setCarddata(data)});
      });
  
      return carddata;
  }