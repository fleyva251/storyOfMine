import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
        <MainContainer> <h1>StoryOfMine</h1> </MainContainer>
        </div>
    )
}

export default Header

//Main container
const MainContainer = styled.header`

    background: url(../../public/images/som-blog-header.jpg) no-repeat center/cover;
    height: 20rem;

h1 {
    transform: translate(-50%, -50%);
    font-weight: 900;
    position: absolute;
    top: 25%;
    left: 50%;
}
`;
