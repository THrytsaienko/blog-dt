import React from 'react';
import AddPost from '../add-post/add-post';

import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    display: inline;
`;

const Title = styled.h1`
    font-size: 36px;
    text-align: center;
    color: yellowgreen;
    display: inline;
`;

const MainHeader = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
`;

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: left;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
`;

const Header = () => (
    <div>
        <MainHeader>
            <HeaderContainer>
                <Link href='/'>
                    <Title>My Blog</Title>
                </Link>
                <AddPost></AddPost>
            </HeaderContainer>
        </MainHeader>
    </div>
);

export default Header;
