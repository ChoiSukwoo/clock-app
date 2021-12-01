import styled from "styled-components";

import { ReactComponent as DayIcon } from '../../assets/icon-sun.svg';
import { ReactComponent as NightIcon } from "../../assets/icon-moon.svg"
import TimeMoreBtn from "../Common/TimeMoreBtn";


const Layout = styled.div`
    width: 100%; padding: 73px 0px 64px 64px;
    display: flex; flex-direction:column;  justify-content: flex-start; align-items: flex-start; row-gap: 80px;
`

const TimeContent = styled.div`
    display: flex;  align-items:flex-end;  column-gap: 11px;
`

const TimeContentContent = styled.div`
    font-weight: 500; font-size: 175px; line-height: 1; letter-spacing: -4.38px;
`

const TimeAbbreviation = styled.div`
    margin-bottom: 24px;
    font-weight: 300;   font-size: 32px;
`

const RegionContent = styled.div`
        font-weight: 500; font-size: 18px; line-height: 28px; letter-spacing: 3.6px; text-transform: uppercase;
`


const CommentContent = styled.div`
    display: flex; column-gap: 16px; align-items: center;
    margin-bottom: 16px;
    font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: 3.6px;
`


function ShowTimeComponent({ Region, Time ,IsMore }) {

    let icon = Time.isNight == 'night' ? <NightIcon /> : <DayIcon />
    let comment = Time.isNight == 'night' ? "GOOD EVENING" : "GOOD MORNING" 

    return (
        <Layout>
            <div>
                <CommentContent>
                    {icon}
                    <div>{comment}, IT’S CURRENTLY</div>
                </CommentContent>
                <TimeContent>
                    <TimeContentContent>{Time.datetime}</TimeContentContent>
                    <TimeAbbreviation>{Time.abbreviation}</TimeAbbreviation>
                </TimeContent>
                <RegionContent className="H3font">in {Region.countryName}, {Region.countryCode}</RegionContent>
            </div>
            <TimeMoreBtn IsMore={IsMore} />
        </Layout>
    )
}


export default ShowTimeComponent