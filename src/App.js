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

    if (window.innerWidth <= 767) {
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
    isNight: isNight,
    timeZone: timeInfo.timeZone,
    dayOfWeek: timeInfo.dayOfWeek,
    dayOfYear: timeInfo.dayOfYear,
    weekNumber: timeInfo.weekNumber,
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

const BackgroundCover = styled.div`
    width: 100%;  height: 100%;
    background-image: url(${props => props.background});
    background-repeat:no-repeat;
    background-size:cover;
`

const FillterCover = styled.div`
    width: 100%;  height: 100%;
    background-color: rgba(0,0,0,0.4);
`

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
    timer = setInterval(() => { //timer ?????? ????????? ????????? ????????? ?????? ??????  
      getTime(data['ip']); // ?????? ?????? ?????? 
    }, 1000); //1000ms = 1s ??? ??????   }

    const getTime = async (ip) => {
      const { data } = await axios.get(`http://worldtimeapi.org/api/ip=${ip}`)
      time.SetTime(data)
      console.log("?????? : ",data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("?????????", isLoading)

    getIp(); // ?????? ?????? ?????? 
    return () => {
      clearInterval(timer); // ?????? ??????????????? clearInterval 
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
    <BackgroundCover background={Background}>
      <FillterCover>
        <Layout Region={region} Time={time} IsMore={isMore} ></Layout>
      </FillterCover>
    </BackgroundCover>
  );
}

export default App;
