import styled from "styled-components";

const Layout = styled.div`
    max-width: 540px;
    display: flex;  flex-direction: column; row-gap: 13px;
`
function RefreshComponent(){
    return(
        <Layout>
            <div>"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</div>
            <div className="H5font">Ada Lovelace</div>
        </Layout>
    )
}


export default RefreshComponent