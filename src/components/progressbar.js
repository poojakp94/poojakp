import styled from "styled-components";
import {useState, useEffect} from 'react';
const Container = styled.div`
    background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 250px;
`

const Span = styled.span`
    background: linear-gradient(to left, #F2709C, #FF9472);
	/* box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C; */
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;

`

const ProgressBar = ({done})=> {
    const [style, setStyle] = useState({});
    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle)
    }, [done])
    return(
        <Container>
            <Span style={style}>
                {done}%
            </Span>
        </Container>
    )
}

export default ProgressBar;