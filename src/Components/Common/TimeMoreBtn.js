import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../assets/icon-arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../assets/icon-arrow-down.svg"

const ReturnButton = styled.div`
    display: flex; align-items: center; justify-content: flex-end; column-gap: 14px;
    width: 146px;   height: 56px;   padding-right: 9px;
    background-color: #fff; border-radius: 999px;
    color: rgba(0,0,0,0.5); font-size: 16px; font-weight: 500; line-height: 28px; letter-spacing: 5px;
`

const Circle = styled.div`
    width: 40px; height: 40px; 
    background-color: #303030;  border-radius: 50%;
`

function TimeMoreBtn({ IsMore }) {

    const event = IsMore.isMore == false ? true : false
    const text = IsMore.isMore == false ? "MORE" : "LESS"
    const circle = IsMore.isMore == false ? <Circle className="center"><ArrowDown/></Circle> : <Circle className="center"><ArrowUp/></Circle>


    return (
        <ReturnButton onClick={() => IsMore.setIsMore(event)}>
            {text}
            {circle}
        </ReturnButton>
    )
}


export default TimeMoreBtn