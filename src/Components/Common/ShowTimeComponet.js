import styled from "styled-components";

import { ReactComponent as DayIcon } from '../../assets/icon-sun.svg';
import { ReactComponent as NightIcon } from "../../assets/icon-moon.svg"
import TimeMoreBtn from "./TimeMoreBtn";


const Layout = styled.div`
    width: 100%;
    display: flex;  justify-content: space-between; align-items: flex-end;
`

const TimeContent = styled.div`
    display: flex;  align-items:flex-end;  column-gap: 11px;
    margin-bottom: 16px;
`
const TimeAbbreviation = styled.div`
    margin-bottom: 27px;
    font-weight: 300;   font-size: 40px;
`

const CommentContent = styled.div`
    display: flex; column-gap: 16px; align-items: center;
    margin-bottom: 16px;
`


function ShowTimeComponent({ Region, Time ,IsMore }) {

    let icon = Time.isNight == 'night' ? <NightIcon /> : <DayIcon />
    let comment = Time.isNight == 'night' ? "GOOD EVENING" : "GOOD MORNING" 

    return (
        <Layout>
            <div>
                <CommentContent>
                    {icon}
                    <div className="H4font">{comment}, IT’S CURRENTLY</div>
                </CommentContent>
                <TimeContent>
                    <div className="H1font">{Time.datetime}</div>
                    <TimeAbbreviation>{Time.abbreviation}</TimeAbbreviation>
                </TimeContent>
                <div className="H3font">in {Region.countryName}, {Region.countryCode}</div>
            </div>
            <TimeMoreBtn IsMore={IsMore} />
        </Layout>
    )
}


export default ShowTimeComponent