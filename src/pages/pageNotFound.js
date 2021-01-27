import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width: 95vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
    background-color: #fff;
    }
`
const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
function PageNotFound() {
    return (
        <Wrapper>
            <Content>
           <h1> 404</h1> 
           <p> Opps! Page not found</p>
           <p>The page you were looking for doesn't exist. You may have mistyped the address.</p>
           <p><Link to="/"><button>Back To Page</button></Link></p> 
           </Content>  
        </Wrapper>
    )
}

export default PageNotFound
