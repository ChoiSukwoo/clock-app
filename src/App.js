import { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios"

import './App.css';

import DesktopNight from './assets/desktop/bg-image-nighttime.jpg'
import DesktopDay from './assets/desktop/bg-image-daytime.jpg'
import TabletNight from './assets/tablet/bg-image-nighttime.jpg'
import TabletDay from './assets/tablet/bg-image-daytime.jpg'
import MobileNight from './assets/mobile/bg-image-nighttime.jpg'
import MobileDay from './assets/mobile/bg-image-daytime.jpg'


const useResize = () => {

  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    device: 'web'
  });

  const setWindowHeight = () =>{
    let vh = window.innerHeight *0.01
    document.documentElement.style.setProperty('--vh',vh+'px')
  }

  const setDevice = () => {

    let nowDevice = 'mobile'

    if (window.innerWidth <= 768) {
      nowDevice = 'mobile'
    } else if (window.innerWidth <= 1023) {
      nowDevice = 'tablet'
    } else {
      nowDevice = 'web'
    }

    setState({
      x: window.scrollX,
      y: window.scrollY,
      device: nowDevice
    });
  };

  useEffect(() => {

    if(window){
      setDevice()
      setWindowHeight()

      window.addEventListener("resize", ()=>{
        setDevice()
        setWindowHeight()
      });
    }

    return () => {
      window.removeEventListener("resize", ()=>{
        setDevice()
        setWindowHeight()
      });
    };
  }, []);

  return state.device;
};

const useRegion = () =>{
  
  const [regionInfo, setRegionInfo] = useState({
    countryCode: "none",
    countryName : "none",
  });

  const setRegion = (regionInfo) =>{
    console.log("지역정보 : ",regionInfo)
    setRegionInfo({
      countryCode : regionInfo.country_code,
      countryName : regionInfo.country_name,
    })
  }


  return(
    {
      SetRegion : setRegion,
      countryCode : regionInfo.countryCode,
      countryName: regionInfo.countryName
    }
  )
}

const useTime = () => {

  const [isNight, setIsNight] = useState('day')

  const [timeInfo, setTimeInfo] = useState({
    timeZone: "none",
    dayOfWeek : 0,
    dayOfYear : 0,
    weekNumber : 0,
    abbreviation : "none"
  });

  const setTime = (timeInfo) =>{

    let hours = new Date(timeInfo['datetime']).getHours()

    if (hours < 9 || hours >= 21) {
      setIsNight('night')
    } else {
      setIsNight('day')
    }

    setTimeInfo({
      isNight:isNight,
      timeZone:timeInfo.timezone,
      dayOfWeek:timeInfo.day_of_week,
      dayOfYear:timeInfo.day_of_year,
      weekNumber:timeInfo.week_number,
      abbreviation:timeInfo.abbreviation
    })
  }

  return(
    {
    SetTime : setTime,
    Timezone:timeInfo.timeZone
    }
  )
}


const AppLaycout = styled.div`
  background-image: url(${props => props.Background});
  background-repeat:no-repeat;
  background-size:100% 100%;
  width:100%; height:100%;
`

function App() {

  const device = useResize()
  const region = useRegion()
  const time = useTime()


  const [isLoading, setIsLoading] = useState(true)


  const getIp = async () => {
    const { data } = await axios.get(
      `https://api.freegeoip.app/json/?apikey=8d6814b0-4ae3-11ec-ac38-13d6984d8b0f`
    )
    region.SetRegion(data)
    getTime(data['ip'])
  }

  const getTime = async (ip) => {
    const { data } = await axios.get(
      `http://worldtimeapi.org/api/ip=${ip}`
    )
    time.SetTime(data)

    setIsLoading(false)
  }

  useEffect(() => {
    console.log("랜더링",isLoading)
    getIp()
  }, [isLoading])



  let Background

  switch (device) {
    case "web":
      Background =  time.isNight == 'night' ? DesktopNight : DesktopDay
      break;
    case "tablet":
      Background =  time.isNight == 'night' ? TabletNight : TabletDay
      break;
    case "mobile":
      Background =  time.isNight == 'night' ? MobileNight : MobileDay
      break
  }


  return (
    <AppLaycout Background={Background} >
      <div>"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</div>
      <div className="H5font">Ada Lovelace</div>
      {region.countryCode}   
    </AppLaycout>
  );
}

export default App;
