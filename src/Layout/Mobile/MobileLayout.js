import styled from "styled-components";

import RefreshComponent from "../../Components/Mobile/RefreshComponent"
import ShowTimeComponent from "../../Components/Mobile/ShowTimeComponet"
import TimeInfoComponent from "../../Components/Mobile/TimeInfoComponent"


const Layout = styled.div`
    width:100%; height:100%;
    display: flex; align-items: flex-start;   flex-direction: column;
    font-size: 12px; line-height: 22px; 
`
function MobileLayout({Region,Time,IsMore}) {

    return(
        <Layout>
            <RefreshComponent IsMore={IsMore} />
            <ShowTimeComponent Region={Region} Time={Time} IsMore={IsMore}/>
            <TimeInfoComponent Time={Time} IsMore={IsMore}/>
        </Layout>
    )
}

export default MobileLayout