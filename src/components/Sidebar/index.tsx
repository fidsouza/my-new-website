import React from 'react'
import Profile from '../Profile'
import Sociallinks from '../Sociallinks'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = () => (
    <S.SidebarWrapper>
           <Profile/>
           <Sociallinks/>
           <MenuLinks/>
    </S.SidebarWrapper>
)

export default Sidebar