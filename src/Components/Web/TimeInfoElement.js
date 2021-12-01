import styled from "styled-components";

const Layout = styled.div`
    display: flex;  flex-direction: column; row-gap: 9px;
`
const TimeInfoElementTitle = styled.div`
    text-transform: uppercase;
`

function TimeInfoElement({Title,Content}){

    return(
        <Layout>
            <TimeInfoElementTitle className="H6font">{Title}</TimeInfoElementTitle>
            <div className="H2font">{Content}</div>
        </Layout>
    )
}


export default TimeInfoElement