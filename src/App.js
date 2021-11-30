import { useState, useEffect } from 'react';
import styled from "styled-components";
import * as moment from 'moment';
import axios from "axios"

import './App.css';
import MobileLayout from './Layout/Mobile/MobileLayout'
import TabletLayout from './Layout/Tablet/TabletLayout'
import WebLayout from './Layout/Web/WebLayout'

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

  const setWindowHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', vh + 'px')
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

    if (window) {
      setDevice()
      setWindowHeight()

      window.addEventListener("resize", () => {
        setDevice()
        setWindowHeight()
      });
    }

    return () => {
      window.removeEventListener("resize", () => {
        setDevice()
        setWindowHeight()
      });
    };
  }, []);

  return state.device;
};

const useRegion = () => {

  const [regionInfo, setRegionInfo] = useState({
    countryCode: "none",
    countryName: "none",
  });

  const setRegion = (regionInfo) => {
    setRegionInfo({
      countryCode: regionInfo.country_code,
      countryName: regionInfo.country_name,
    })
  }


  return (
    {
      SetRegion: setRegion,
      countryCode: regionInfo.countryCode,
      countryName: regionInfo.countryName
    }
  )
}

const useTime = () => {

  const [isNight, setIsNight] = useState('day')

  const [timeInfo, setTimeInfo] = useState({
    datetime: new Date(moment()),
    timeZone: "none",
    dayOfWeek: 0,
    dayOfYear: 0,
    weekNumber: 0,
    abbreviation: "none"
  });

  const setTime = (timeInfo) => {

    let datetime = new Date(timeInfo['datetime'])

    if (datetime.getHours() < 9 || datetime.getHours() >= 21) {
      setIsNight('night')
    } else {
      setIsNight('day')
    }

    setTimeInfo({
      isNight: isNight,
      datetime:datetime,
      timeZone: timeInfo.timezone,
      dayOfWeek: timeInfo.day_of_week,
      dayOfYear: timeInfo.day_of_year,
      weekNumber: timeInfo.week_number,
      abbreviation: timeInfo.abbreviation
    })
  }

  return ({
    SetTime: setTime,
    datetime: ('0'+timeInfo.datetime.getHours()).slice(-2)+":"+('0'+timeInfo.datetime.getMinutes()).slice(-2),
    isNight: timeInfo.isNight,
    timeZone: timeInfo.timezone,
    dayOfWeek: timeInfo.day_of_week,
    dayOfYear: timeInfo.day_of_year,
    weekNumber: timeInfo.week_number,
    abbreviation: timeInfo.abbreviation    
  })
}

const useIsMore = () =>{
  const [isMore, setIsMore] = useState(false)

  return({
    isMore:isMore,
    setIsMore:setIsMore
  })
}

function App() {

  const device = useResize()
  const region = useRegion()
  const time = useTime()
  const isMore = useIsMore()

  let timer = null;

  const [isLoading, setIsLoading] = useState(true)



  const getIp = async () => {
    const { data } = await axios.get(`https://api.freegeoip.app/json/?apikey=8d6814b0-4ae3-11ec-ac38-13d6984d8b0f`)
    region.SetRegion(data)
    timer = setInterval(() => { //timer 라는 변수에 인터벌 종료를 위해 저장  
      getTime(data['ip']); // 현재 시간 세팅 
    }, 1000); //1000ms = 1s 간 반복   }

    const getTime = async (ip) => {
      const { data } = await axios.get(`http://worldtimeapi.org/api/ip=${ip}`)
      time.SetTime(data)
      console.log("타임 : ",data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("랜더링", isLoading)

    getIp(); // 현재 시간 세팅 
    return () => {
      clearInterval(timer); // 함수 언마운트시 clearInterval 
    };
  }, [isLoading])

  let Background
  let Layout

  switch (device) {
    case "web":
      Background = time.isNight == 'night' ? DesktopNight : DesktopDay
      Layout = WebLayout
      break;
    case "tablet":
      Background = time.isNight == 'night' ? TabletNight : TabletDay
      Layout = TabletLayout
      break;
    case "mobile":
      Background = time.isNight == 'night' ? MobileNight : MobileDay
      Layout = MobileLayout
      break
  }



  return (
    <Layout Background={Background} Region={region} Time={time} IsMore={isMore} ></Layout>
  );
}

export default App;
