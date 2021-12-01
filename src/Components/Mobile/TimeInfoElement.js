import styled from "styled-components";

const Layout = styled.div`
    display: flex; justify-content: space-between; align-items: center;
`

const TimeInfoElementTitle = styled.div`
    font-size: 10px; line-height: 28px; word-spacing: 2px; text-transform: uppercase;
`

const TimeInfoElementContent = styled.div`
    font-size: 20px; line-height: 1; font-weight: 500;
`

function TimeInfoElement({Title,Content}){

    return(
        <Layout>
            <TimeInfoElementTitle>{Title}</TimeInfoElementTitle>
            <TimeInfoElementContent>{Content}</TimeInfoElementContent>
        </Layout>
    )
}


export default TimeInfoElement