import styled from "styled-components";

import RefreshComponent from "../../Components/Web/RefreshComponent";
import ShowTimeComponent from "../../Components/Web/ShowTimeComponet";
import TimeInfoComponent from "../../Components/Web/TimeInfoComponent";

const Layout = styled.div`
    width:100%; height:100%;
    display: flex; align-items: flex-start;   flex-direction: column;
`

function WebLayout({Region,Time,IsMore}) {
    return(
        <Layout >
            <RefreshComponent IsMore={IsMore} />
            <ShowTimeComponent Region={Region} Time={Time} IsMore={IsMore}/>
            <TimeInfoComponent Time={Time} IsMore={IsMore}/>
        </Layout>
    )
}

export default WebLayout