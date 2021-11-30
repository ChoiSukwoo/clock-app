import styled from "styled-components";

import RefreshComponent from "../../Components/Common/RefreshComponent";

const Layout = styled.div`
    background-image: url(${props => props.Background});
    background-repeat:no-repeat;
    background-size:100% 100%;
    width:100%; height:100%;
`

function MobileLayout({Background,Region,Time}) {


    return(
        <Layout background={Background}>
            <RefreshComponent />
        </Layout>
    )
}

export default MobileLayout