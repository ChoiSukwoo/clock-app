import styled from "styled-components";

import RefreshComponent from "../../Components/Mobile/RefreshComponent"
import ShowTimeComponent from "../../Components/Mobile/ShowTimeComponet"
import TimeInfoComponent from "../../Components/Mobile/TimeInfoComponent"


const Layout = styled.div`
    background-image: url(${props => props.background});
    background-repeat:no-repeat;
    background-size:100% 100%;
    width:100%; height:100%;
    display: flex; align-items: flex-start;   flex-direction: column;
    font-size: 12px; line-height: 22px; 
`
function MobileLayout({Background,Region,Time,IsMore}) {

    return(
        <Layout background={Background}>
            <RefreshComponent IsMore={IsMore} />
            <ShowTimeComponent Region={Region} Time={Time} IsMore={IsMore}/>
            <TimeInfoComponent Time={Time} IsMore={IsMore}/>
        </Layout>
    )
}

export default MobileLayout