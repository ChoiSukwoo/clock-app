import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../../assets/icon-arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../assets/icon-arrow-down.svg"

const ReturnButton = styled.div`
    display: flex; align-items: center; justify-content: flex-end; column-gap: 16px;
    width: 115px;   height: 39px;   padding-right: 4px;
    background-color: #fff; border-radius: 999px;
    color: rgba(0,0,0,0.5); font-size: 12px; font-weight: 500; line-height: 14px; letter-spacing: 3.75px;
    cursor: pointer;
`

const Circle = styled.div`
    width: 32px; height: 32px; 
    transition-duration: 1s; transform: rotate( ${props=>props.style.rotation} );
    background-color: ${props=>props.style.color};  border-radius: 50%;
`

function TimeMoreBtn({ IsMore }) {

    const event = IsMore.isMore == false ? true : false
    const text = IsMore.isMore == false ? "MORE" : "LESS"
    const circleStyle = IsMore.isMore == false ? {color:"#999", rotation:"0deg"} : {color:"#303030", rotation:"180deg"}


    return (
        <ReturnButton onClick={() => IsMore.setIsMore(event)}>
            {text}
            <Circle className="center" style={circleStyle}><ArrowUp/></Circle>
        </ReturnButton>
    )
}


export default TimeMoreBtn