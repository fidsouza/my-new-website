import * as React from "./node_modules/react"
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'
import {TransitionPortal} from './node_modules/gatsby-plugin-transition-link'

import * as S from  './styled'
import GlobalStyes from '../../styles/global'


const Layout  = ({ children }) => {


  return (
     <S.LayoutWrapper>
       <GlobalStyes/>
       <TransitionPortal level="top">
           <Sidebar/>
       </TransitionPortal>
        <S.LayoutMain>
          {children}
        </S.LayoutMain>
        <TransitionPortal level="top">
           <MenuBar/>
        </TransitionPortal>




    </S.LayoutWrapper> 
 

  )
}


export default Layout
