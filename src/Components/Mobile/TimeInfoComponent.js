import styled from "styled-components";
import TimeInfoElement from "./TimeInfoElement";

const Layout = styled.div`
    width: 100%;    height:${props => props.height}; padding: 0px 26px 0px 26px;
    display: flex; row-gap: 13px;  overflow:hidden;
    transition-duration: 1s;
    background-color: ${props => props.BackgrondThema};
    color: ${props => props.FontThema};
`

const TimeInfoCover = styled.div`
    width: 100%;
    display: flex; flex-direction:column;  row-gap: 16px;
`

function TimeInfoComponent({Time,IsMore }) {

    let height = IsMore.isMore == false ? '0%' : '100%'

    let FontThema = Time.isNight == 'night' ? "#FFF" : '#303030'
    let BackgrondThema = Time.isNight == 'night' ? "rgba(0,0,0,0.75)" : 'rgba(255,255,255,0.75)'


    return (
        <Layout className="center" height={height} FontThema={FontThema} BackgrondThema={BackgrondThema}>
            <TimeInfoCover>
                <TimeInfoElement Title={"CURRENT TIMEZONE"} Content={Time.timeZone} />
                <TimeInfoElement Title={"Day of the year"} Content={Time.dayOfYear} />
                <TimeInfoElement Title={"Day of the week"} Content={Time.dayOfWeek} />
                <TimeInfoElement Title={"Week number"} Content={Time.weekNumber} />
            </TimeInfoCover>
        </Layout>
    )
}


export default TimeInfoComponent