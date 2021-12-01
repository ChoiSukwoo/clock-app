import styled from "styled-components";

import RefreshComponent from "../../Components/Web/RefreshComponent";
import ShowTimeComponent from "../../Components/Web/ShowTimeComponet";
import TimeInfoComponent from "../../Components/Web/TimeInfoComponent";

const Layout = styled.div`
    background-image: url(${props => props.background});
    background-repeat:no-repeat;
    background-size:100% 100%;
    width:100%; height:100%;
    display: flex; align-items: flex-start;   flex-direction: column;
`

function WebLayout({Background,Region,Time,IsMore}) {
    return(
        <Layout background={Background}>
            <RefreshComponent IsMore={IsMore} />
            <ShowTimeComponent Region={Region} Time={Time} IsMore={IsMore}/>
            <TimeInfoComponent Time={Time} IsMore={IsMore}/>
        </Layout>
    )
}

export default WebLayout