import { useState,useEffect } from 'react';
import axios from "axios"

import './App.css';



function App() {


  const [isLoading, setIsLoading] = useState(true)

  const getIp = async() =>{
    const { data } = await axios.get(
      `https://api.freegeoip.app/json/?apikey=8d6814b0-4ae3-11ec-ac38-13d6984d8b0f`
    )
    console.log("위치정보 : ", data)
    getTime(data['ip'])
  }

  const getTime = async(ip) =>{
    const { data } = await axios.get(
      `http://worldtimeapi.org/api/ip=${ip}`
    )
    console.log("시간정보 : ", data)

    //로딩 종료 알림
    setIsLoading(false)
  }

  useEffect(() => {
    console.log("랜더링",isLoading)
    getIp()
  },[isLoading])



  return (
    isLoading ?  <div> Loading </div> : <div> end Loading </div>
  );
}

export default App;
