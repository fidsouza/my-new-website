import styled from 'styled-components'
import {Link} from 'gatsby'


export const MenuBarWrapper = styled.aside`
  align-items:center;
  display:flex;
  flex-direction:column;
  height:100vh;
  justify-content:space-between;
  padding :0.8rem 0 ; 
  position:fixed;
  width:1.75rem;
  background: rgb(255,229,54);
background: linear-gradient(180deg, rgba(255,229,54,1) 20%, rgba(255,177,31,1) 48%, rgba(255,142,15,1) 100%);

`

export const MenuBarGroup = styled.div`

    display:flex;
    flex-direction:column;

`

export const MenuBarLink = styled(Link)`

    display:block;

`

export const MenuBarItem = styled.span`

    color:--black;
    cursor:pointer;
    display:block;
    height:1.25rem;
    padding:1.0rem 0 2.0rem;
    position:relative;
    width:1.25rem;


`