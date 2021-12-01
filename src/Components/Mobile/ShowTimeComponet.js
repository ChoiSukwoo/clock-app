import styled from "styled-components";

import { ReactComponent as DayIcon } from '../../assets/icon-sun.svg';
import { ReactComponent as NightIcon } from "../../assets/icon-moon.svg"
import MobileTimeMoreBtn from "../Common/MobileTimeMoreBtn";


const Layout = styled.div`
    width: 100%; padding: 67px 0px 40px 26px;
    display: flex; flex-direction:column;  justify-content: flex-start; align-items: flex-start; row-gap: 48px;
`

const TimeContent = styled.div`
    display: flex;  align-items:flex-end;  column-gap: 11px;
    margin-bottom: 16px;
`
const TimeContentContent = styled.div`
    font-weight: 500; font-size: 100px; line-height: 1; letter-spacing: -2.5px;
`

const TimeAbbreviation = styled.div`
    margin-bottom: 5px;
    font-weight: 300; font-size: 15px; line-height: 28px;

`
const CommentContent = styled.div`
    display: flex; column-gap: 16px; align-items: center;
    margin-bottom: 16px;
    font-weight: 400; font-size: 15px; line-height: 25px; letter-spacing: 3px;
`

const RegionContent = styled.div`
    text-transform: uppercase;
`


function ShowTimeComponent({ Region, Time ,IsMore }) {

    let icon = Time.isNight == 'night' ? <NightIcon /> : <DayIcon />
    let comment = Time.isNight == 'night' ? "GOOD EVENING" : "GOOD MORNING" 

    return (
        <Layout>
            <div>
                <CommentContent>
                    {icon}
                    <div>{comment}</div>
                </CommentContent>
                <TimeContent>
                    <TimeContentContent>{Time.datetime}</TimeContentContent>
                    <TimeAbbreviation>{Time.abbreviation}</TimeAbbreviation>
                </TimeContent>
                <RegionContent className="H6font">in {Region.countryName}, {Region.countryCode}</RegionContent>
            </div>
            <MobileTimeMoreBtn IsMore={IsMore} />
        </Layout>
    )
}


export default ShowTimeComponent