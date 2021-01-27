import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        justify-content: flex-start;
    }
`
const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

function PageNotFound() {
    return (
        <>
            <Content>
           <Title> 404</Title> 
           <p> Opps! Page not found</p>
           <p>The page you were looking for doesn't exist. You may have mistyped the address.</p>
           <p><Link to="/"><button style={{border: "2px solid crimson", fontWeight: '600'}}>Back To Page</button></Link></p> 
           </Content>  
        </>
    )
}

export default PageNotFound
