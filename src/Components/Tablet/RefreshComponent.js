import styled from "styled-components";

const Layout = styled.div`
    width: 100%; height:${props => props.height}; padding: 80px 0px 0px 64px;
    display: flex;  flex-direction: column; row-gap: 13px;  overflow:hidden;
    transition-duration: 1s;
`

const Comment = styled.div`
    max-width:540px;
`

function RefreshComponent({IsMore}){

    let height = IsMore.isMore == false ? '100%' : '0%'
    
    return(
        <Layout height={height}>
            <Comment>"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</Comment>
            <div className="H5font">Ada Lovelace</div>
        </Layout>
    )
}


export default RefreshComponent