import { useState,useEffect } from "react"
import { Menu_Api_URL } from "./constants"

const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchMenu()
  },[])

    const fetchMenu=async()=>{
        const data=await fetch(Menu_Api_URL + resId)
        const json=await data.json();
        console.log(json.data);
        setResInfo(json.data)
        
    }
    return resInfo
}

export default useRestaurantMenu