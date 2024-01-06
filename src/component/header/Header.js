import React from 'react'
import { Wrapper } from './Header.styled'
const Header = ({ name }) => {
    return (
        <Wrapper>
            <h1>SpaceVue</h1>
            <h3>Welcome {name}</h3>
        </Wrapper>
    )
}

export default Header