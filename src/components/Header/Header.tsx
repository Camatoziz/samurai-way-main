import React from 'react';
import s from './Header.module.css'
import styled from 'styled-components';

export const Header = () => {
    return (
        <ContainerHeader className={s.header}>
            <Image src="https://radiustheme.com/demo/html/cirkle/media/logo.png"/>
        </ContainerHeader>
    )
}



const ContainerHeader = styled.header`
  grid-area: h;
  background-color: #615dfa;
`
const Image = styled.img`
  width: 138px;
  max-width: 100%;
  margin-top: 7px;
  margin-left: 10px;
    `