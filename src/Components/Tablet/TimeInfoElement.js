import styled from "styled-components";

const Layout = styled.div`
    display: flex;  flex-direction: column;
`
const TimeInfoElementTitle = styled.div`
    text-transform: uppercase;
`
const TimeInfoElementContent = styled.div`
    font-size: 40px; line-height: 48px; font-weight: 500;
`

function TimeInfoElement({Title,Content}){

    return(
        <Layout>
            <TimeInfoElementTitle className="H6font">{Title}</TimeInfoElementTitle>
            <TimeInfoElementContent>{Content}</TimeInfoElementContent>
        </Layout>
    )
}


export default TimeInfoElement