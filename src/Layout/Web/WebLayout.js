import styled from "styled-components";

import RefreshComponent from "../../Components/Common/RefreshComponent";
import ShowTimeComponent from "../../Components/Common/ShowTimeComponet";
const Layout = styled.div`
    background-image: url(${props => props.background});
    background-repeat:no-repeat;
    background-size:100% 100%;
    width:100%; height:100%;    padding: 56px 165px 98px 165px;
    display: flex;  justify-content: space-between; align-items: flex-start;   flex-direction: column;
`

function WebLayout({Background,Region,Time,IsMore}) {
    return(
        <Layout background={Background}>
            <RefreshComponent />
            <ShowTimeComponent Region={Region} Time={Time} IsMore={IsMore}/>
        </Layout>
    )
}

export default WebLayout