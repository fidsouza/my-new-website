import React,{useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'


import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled'
import {Home} from '@styled-icons/boxicons-regular/Home'
import {Search} from '@styled-icons/boxicons-regular/Search'

import {PersonBoundingBox as People} from '@styled-icons/bootstrap/PersonBoundingBox'
import {Flashlight as Ligth} from '@styled-icons/entypo/Flashlight'
import {ArrowUp as Arrow} from '@styled-icons/bootstrap/ArrowUp'


const MenuBar  = () => {

    const isMobile = useMediaQuery({
        query: '(min-device-width: 1170px)'
      })

    const [theme,setTheme] = useState(null)

    const isDarkMode = theme === 'dark'
    
    useEffect(() =>{
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    },[])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/" cover direction="up" bg={getThemeColor()} duration={0.5} title="voltar para home">
                    <S.MenuBarItem>
                      {isMobile ? <Home/> : 'blog' }  
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink to="/search" cover direction="up" bg={getThemeColor()} duration={0.5} title="Pesquisar">
                    <S.MenuBarItem>
                    {isMobile ? <Search/>: 'busca' }  
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink to="/about" cover direction="up" bg={getThemeColor()} duration={0.5} title="Pesquisar">
                    <S.MenuBarItem>
                    {isMobile ? <People/>: 'eu' }  
                    </S.MenuBarItem>
                </S.MenuBarLink>

            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema"  onClick={() =>{
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                }}>
                    <Ligth/>
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o Top">
                    <Arrow/>
                </S.MenuBarItem>
    
    
            </S.MenuBarGroup>
        </S.MenuBarWrapper>)

}

export default MenuBar