import * as React from "react"
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from  './styled'
import GlobalStyes from '../../styles/global'


const Layout  = ({ children }) => {


  return (
     <S.LayoutWrapper>
       <GlobalStyes/>
            <Sidebar/>
        <S.LayoutMain>
          {children}
        </S.LayoutMain>
        <MenuBar/>



    </S.LayoutWrapper> 
 

  )
}


export default Layout
