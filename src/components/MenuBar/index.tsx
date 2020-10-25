import React from 'react'

import * as S from './styled'
import {Home} from '@styled-icons/boxicons-regular/Home'
import {Search} from '@styled-icons/boxicons-regular/Search'
import {Flashlight as Ligth} from '@styled-icons/entypo/Flashlight'
import {ArrowUp as Arrow} from '@styled-icons/bootstrap/ArrowUp'


const MenuBar  = () => (

    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="voltar para home">
                <S.MenuBarItem>
                    <Home/>
                </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/" title="Pesquisar">
                <S.MenuBarItem>
                    <Search/>
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema">
                <Ligth/>
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o Top">
                <Arrow/>
            </S.MenuBarItem>


        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar