import styled from "styled-components";
import TimeInfoElement from "./TimeInfoElement";

const Layout = styled.div`
    width: 100%;    height:${props => props.height}; padding: 0px 64px 0px 64px;
    display: flex; row-gap: 13px;  overflow:hidden;
    transition-duration: 1s;
    background-color: ${props => props.BackgrondThema};
    color: ${props => props.FontThema};
`

const TimeInfoCover = styled.div`
    width: 100%;
    display: flex;  row-gap: 48px;  column-gap: 80px;
`

const TimeInfoLeft = styled.div`
    display:flex; flex-direction: column; row-gap: 42px;
`

const TimeInfoRight = styled.div`
    display:flex; flex-direction: column; row-gap: 42px;
`

function TimeInfoComponent({Time,IsMore }) {

    let height = IsMore.isMore == false ? '0%' : '100%'

    let FontThema = Time.isNight == 'night' ? "#FFF" : '#303030'
    let BackgrondThema = Time.isNight == 'night' ? "rgba(0,0,0,0.75)" : 'rgba(255,255,255,0.75)'


    return (
        <Layout className="center" height={height} FontThema={FontThema} BackgrondThema={BackgrondThema}>
            <TimeInfoCover>
                <TimeInfoLeft>
                    <TimeInfoElement Title={"CURRENT TIMEZONE"} Content={Time.timeZone} />
                    <TimeInfoElement Title={"Day of the year"} Content={Time.dayOfYear} />
                </TimeInfoLeft>
                <TimeInfoRight>
                    <TimeInfoElement Title={"Day of the week"} Content={Time.dayOfWeek} />
                    <TimeInfoElement Title={"Week number"} Content={Time.weekNumber} />
                </TimeInfoRight>
            </TimeInfoCover>
        </Layout>
    )
}


export default TimeInfoComponent