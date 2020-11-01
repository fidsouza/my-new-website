import React from 'react'
import * as S from './styled'
import getThemeColor from "../../utils/getThemeColor"

import links from './content'

const MenuLinks = () => (

    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link,i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink cover direction="up" bg={getThemeColor()} duration={0.5} to={link.url} activeClassName="active">{link.Label}</S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>

)

export default MenuLinks