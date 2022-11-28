import axios from "axios";
import {useEffect, useState } from "react";

const useFetch = (url,payload,method) => { 
  const [data,setData]=useState("")
  
  useEffect( () => {
    extractDataFromApi();
  },[url,method,payload]);
  const extractDataFromApi=()=>{
    let res;
    switch(method){
      case "GET":
         axios.get(url).then(response=>{res=response;setData(res.data)})
        break;
      case "POST":
        axios.post(url,payload).then(response=>{res=response;setData(res.data)})
        break;
      case "PUT":
        axios.put(url,payload).then(response=>{res=response;setData(res.data)})
        break;
      case "DELETE":
        axios.delete(url).then(response=>{res=response;setData(res.data)})
        break;
      case "":
        break; 
      default:
        alert("Please provide a right method")
    }
  }
  return data
};

export default useFetch;